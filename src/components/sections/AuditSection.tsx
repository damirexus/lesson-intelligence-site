"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { ConfirmationModal } from "@/components/ui/ConfirmationModal";
import { submitEmailToKit } from "@/lib/kit";
import { auditQuestions, computeAuditResult, type AuditComputation, type AuditQuestion } from "@/lib/lessonThinkingAudit";

type AuditFormValues = {
  q1: string;
  q2: string;
  q3: string;
  q4: string;
  q5: string;
  visibilityText: string;
};

const initialValues: AuditFormValues = {
  q1: "",
  q2: "",
  q3: "",
  q4: "",
  q5: "",
  visibilityText: ""
};

const auditStepIds = [...auditQuestions.map((question) => question.id), "visibilityText"] as const;
const totalSteps = auditStepIds.length;

function getFieldsetId(question: AuditQuestion) {
  return `audit-${question.id}`;
}

export function AuditSection() {
  const [values, setValues] = useState<AuditFormValues>(initialValues);
  const [error, setError] = useState("");
  const [result, setResult] = useState<AuditComputation | null>(null);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [email, setEmail] = useState("");
  const [signupError, setSignupError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const advanceTimeoutRef = useRef<number | null>(null);

  const isFormComplete = Boolean(values.q1 && values.q2 && values.q3 && values.q4 && values.q5 && values.visibilityText.trim().length);
  const currentStepId = auditStepIds[currentStepIndex];
  const currentQuestion = currentStepId === "visibilityText" ? null : auditQuestions[currentStepIndex];
  const completedStepCount = auditStepIds.filter((stepId) => {
    if (stepId === "visibilityText") {
      return values.visibilityText.trim().length > 0;
    }

    return Boolean(values[stepId]);
  }).length;

  useEffect(() => {
    return () => {
      if (advanceTimeoutRef.current !== null) {
        window.clearTimeout(advanceTimeoutRef.current);
      }
    };
  }, []);

  const clearAdvanceTimeout = () => {
    if (advanceTimeoutRef.current !== null) {
      window.clearTimeout(advanceTimeoutRef.current);
      advanceTimeoutRef.current = null;
    }
  };

  const queueStepChange = (nextStepIndex: number) => {
    clearAdvanceTimeout();
    advanceTimeoutRef.current = window.setTimeout(() => {
      setCurrentStepIndex(nextStepIndex);
      advanceTimeoutRef.current = null;
    }, 180);
  };

  const handleOptionChange = (questionId: AuditQuestion["id"], optionValue: string) => {
    setError("");
    setValues((current) => ({ ...current, [questionId]: optionValue }));

    const questionIndex = auditQuestions.findIndex((question) => question.id === questionId);
    const nextStepIndex = Math.min(questionIndex + 1, totalSteps - 1);

    if (nextStepIndex !== questionIndex) {
      queueStepChange(nextStepIndex);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (!isFormComplete) {
      setError("Please write your answer in order to continue.");
      return;
    }

    clearAdvanceTimeout();
    setResult(computeAuditResult(values));
  };

  const resetAudit = () => {
    clearAdvanceTimeout();
    setValues(initialValues);
    setError("");
    setResult(null);
    setCurrentStepIndex(0);
    setEmail("");
    setSignupError("");
  };

  const goToPreviousStep = () => {
    clearAdvanceTimeout();
    setError("");
    setCurrentStepIndex((current) => Math.max(0, current - 1));
  };

  const handleGuideDownload = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSignupError("");

    if (!email.trim()) {
      setSignupError("Please enter your email address.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setSignupError("Please enter a valid email address.");
      return;
    }

    try {
      setIsSubmitting(true);
      await submitEmailToKit(email.trim());
      setEmail("");
      setIsModalOpen(true);
    } catch {
      setSignupError("We could not send the guide right now. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="lesson-audit" aria-labelledby="lesson-audit-title" className="border-b border-brand-border bg-white py-16 sm:py-20">
      <Container>
        <SectionHeader
          id="lesson-audit-title"
          title="Quick LIF Lesson Audit"
          description="Think of one lesson you are planning this week. Work through six quick steps to see whether student thinking will be required, visible, and guided."
        />

        <div className="mx-auto mt-10 max-w-3xl animate-fade-up">
          <div className="rounded-2xl border border-brand-border bg-brand-card p-5 shadow-soft sm:min-h-[44rem] sm:p-6 lg:min-h-[45rem]">
            {!result ? (
              <>
                <div className="flex items-center gap-2" aria-label="Audit progress">
                  {auditStepIds.map((stepId, index) => {
                    const isDone = index < completedStepCount;
                    const isCurrent = index === currentStepIndex;

                    return (
                      <span
                        key={stepId}
                        className={[
                          "h-2.5 flex-1 rounded-full transition-all duration-300",
                          isCurrent ? "bg-brand-navy" : isDone ? "bg-brand-purple" : "bg-white"
                        ].join(" ")}
                      />
                    );
                  })}
                </div>
                <div className="mt-3 flex items-center justify-between text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-brand-muted">
                  <span>Step {currentStepIndex + 1} of {totalSteps}</span>
                  <span>{completedStepCount}/{totalSteps} answered</span>
                </div>

                <div className="mt-5 sm:min-h-[34rem]">
                  {currentQuestion ? (
                    <div
                      key={currentQuestion.id}
                      id={getFieldsetId(currentQuestion)}
                      className="audit-step-panel rounded-xl border border-brand-border bg-brand-bg p-4 sm:h-full sm:p-5"
                    >
                      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-brand-purple">
                        {currentQuestion.layer}
                      </p>
                      <h3 className="mt-2 text-[1.02rem] font-semibold leading-6 text-brand-navy">
                        {currentQuestion.prompt}
                      </h3>

                      <div className="mt-4 space-y-3">
                        {currentQuestion.options.map((option, index) => {
                          const isSelected = values[currentQuestion.id] === option.value;

                          return (
                            <button
                              key={option.value}
                              type="button"
                              onClick={() => handleOptionChange(currentQuestion.id, option.value)}
                              className={[
                                "flex w-full items-start gap-3 rounded-xl border px-4 py-3 text-left transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple",
                                isSelected
                                  ? "border-brand-purple bg-white shadow-soft"
                                  : "border-brand-border bg-white hover:border-brand-purple/70 hover:-translate-y-0.5"
                              ].join(" ")}
                            >
                              <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-bg text-[0.72rem] font-semibold text-brand-navy">
                                {index + 1}
                              </span>
                              <span className="text-sm leading-6 text-brand-text">{option.label}</span>
                            </button>
                          );
                        })}
                      </div>

                      <div className="mt-5 flex justify-start">
                        <button
                          type="button"
                          onClick={goToPreviousStep}
                          disabled={currentStepIndex === 0}
                          className="inline-flex items-center justify-center rounded-lg border border-brand-border bg-white px-4 py-2.5 text-sm font-semibold text-brand-text transition hover:border-brand-purple hover:text-brand-navy disabled:cursor-not-allowed disabled:opacity-40"
                        >
                          Back
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form
                      key="visibilityText"
                      onSubmit={handleSubmit}
                      noValidate
                      className="audit-step-panel rounded-xl border border-brand-border bg-brand-bg p-4 sm:h-full sm:p-5"
                      aria-label="Quick LIF Lesson Audit"
                    >
                      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-brand-purple">
                        Thinking Visibility
                      </p>
                      <label htmlFor="visibilityText" className="mt-2 block text-[1.02rem] font-semibold leading-6 text-brand-navy">
                        In one sentence, what will students produce to show their thinking?
                      </label>
                      <textarea
                        id="visibilityText"
                        name="visibilityText"
                        value={values.visibilityText}
                        onChange={(event) => {
                          setError("");
                          setValues((current) => ({ ...current, visibilityText: event.target.value }));
                        }}
                        required
                        rows={4}
                        placeholder="Example: Students will justify their answer using evidence from the text."
                        className="mt-3 w-full rounded-xl border border-brand-border bg-white px-3 py-3 text-sm text-brand-text placeholder:text-brand-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple"
                      />
                      <p className="mt-3 text-xs leading-5 text-brand-muted">
                        Be specific about the reasoning students will make visible, not just the task they will complete.
                      </p>

                      {error ? <p className="mt-3 text-sm text-red-600">{error}</p> : null}

                      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <button
                          type="button"
                          onClick={goToPreviousStep}
                          className="inline-flex items-center justify-center rounded-lg border border-brand-border bg-white px-4 py-3 text-sm font-semibold text-brand-text transition hover:border-brand-purple hover:text-brand-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple"
                        >
                          Back
                        </button>
                        <button
                          type="submit"
                          className="inline-flex w-full items-center justify-center rounded-lg bg-brand-purple px-5 py-3 text-[0.97rem] font-semibold text-white shadow-lg shadow-brand-purple/30 transition hover:bg-[#b8850e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple sm:w-auto"
                        >
                          See Thinking-Risk Result
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </>
            ) : (
              <div className="audit-result-panel rounded-xl border border-brand-border bg-brand-bg p-5 sm:min-h-[34rem]" role="status" aria-live="polite">
                <h3 className="font-display text-[1.55rem] uppercase leading-[1.08] text-brand-navy sm:text-[1.75rem]">{result.title}</h3>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.05em] text-brand-purple">Score: {result.totalScore}/10</p>
                <p className="mt-3 text-sm leading-6 text-brand-text">{result.diagnosis}</p>

                <div className="mt-4 space-y-2 rounded-lg border border-brand-border bg-white p-4 text-sm text-brand-text">
                  <p>
                    <span className="font-semibold text-brand-navy">Weakest LIF layer:</span> {result.weakestLayer}
                  </p>
                  <p>
                    <span className="font-semibold text-brand-navy">One next move:</span> {result.nextMove}
                  </p>
                  <p>
                    <span className="font-semibold text-brand-navy">Thinking visibility check:</span> {result.visibilityAnalysis.message}
                  </p>
                </div>

                <form
                  onSubmit={handleGuideDownload}
                  className="mt-5 flex flex-col gap-3 border-t border-brand-border pt-5"
                  aria-label="Audit result guide signup form"
                >
                  <label htmlFor="audit-result-email" className="text-sm font-semibold text-brand-navy">
                    Expand the LIF exploration with the Teacher&apos;s Guide
                  </label>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <input
                      id="audit-result-email"
                      name="email_address"
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder="email"
                      aria-invalid={signupError ? "true" : "false"}
                      className="w-full rounded-lg border border-brand-border bg-white px-4 py-3.5 text-[1rem] text-brand-text placeholder:text-brand-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple"
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex w-full items-center justify-center rounded-lg bg-brand-purple px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-purple/30 transition hover:bg-[#b8850e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple sm:min-w-[15rem]"
                    >
                      {isSubmitting ? "Sending..." : "Download the Full LIF Guide"}
                    </button>
                  </div>
                  {signupError ? <p className="text-sm text-red-600">{signupError}</p> : null}
                </form>

                <div className="mt-8 flex justify-center">
                  <button
                    type="button"
                    onClick={resetAudit}
                    className="inline-flex w-full items-center justify-center rounded-lg border border-brand-border bg-white px-5 py-3 text-sm font-semibold text-brand-text transition hover:border-brand-purple hover:text-brand-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple sm:w-auto"
                  >
                    Try Again
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
      <ConfirmationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
