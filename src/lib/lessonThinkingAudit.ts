export type AuditQuestionOption = {
  value: string;
  label: string;
  score: number;
};

export type AuditQuestion = {
  id: "q1" | "q2" | "q3" | "q4" | "q5";
  layer: "Thinking Intent" | "Cognitive Load Control" | "Thinking Activation" | "Thinking Visibility" | "Intervention Intelligence";
  prompt: string;
  options: AuditQuestionOption[];
};

export type VisibilityLevel = "weak" | "developing" | "strong";

export type VisibilityAnalysis = {
  level: VisibilityLevel;
  message: string;
};

export type AuditResultBand = {
  min: number;
  max: number;
  title: string;
  message: string;
};

export const auditQuestions: AuditQuestion[] = [
  {
    id: "q1",
    layer: "Thinking Intent",
    prompt: "What is the most demanding thinking students must produce in this lesson?",
    options: [
      { value: "q1_1", label: "Recall or identify", score: 0 },
      { value: "q1_2", label: "Explain an idea", score: 1 },
      { value: "q1_3", label: "Compare options or examples", score: 1 },
      { value: "q1_4", label: "Justify with evidence", score: 2 },
      { value: "q1_5", label: "Create, design, or solve", score: 2 }
    ]
  },
  {
    id: "q2",
    layer: "Cognitive Load Control",
    prompt: "What is most likely to make the task difficult?",
    options: [
      { value: "q2_1", label: "Too much new information", score: 1 },
      { value: "q2_2", label: "Unclear instructions", score: 0 },
      { value: "q2_3", label: "Too many steps", score: 0 },
      { value: "q2_4", label: "Tools or AI used too early", score: 0 },
      { value: "q2_5", label: "I'm not sure", score: 0 }
    ]
  },
  {
    id: "q3",
    layer: "Thinking Activation",
    prompt: "What do students do before receiving explanation, help, or tools?",
    options: [
      { value: "q3_1", label: "Nothing - I explain first", score: 0 },
      { value: "q3_2", label: "They watch or copy an example", score: 0 },
      { value: "q3_3", label: "They answer guided questions", score: 1 },
      { value: "q3_4", label: "They make a first attempt independently", score: 2 }
    ]
  },
  {
    id: "q4",
    layer: "Thinking Visibility",
    prompt: "How will you see student thinking during the lesson?",
    options: [
      { value: "q4_1", label: "Final answer only", score: 0 },
      { value: "q4_2", label: "Short written response", score: 1 },
      { value: "q4_3", label: "Structured explanation", score: 2 },
      { value: "q4_4", label: "Multiple checkpoints or drafts", score: 2 }
    ]
  },
  {
    id: "q5",
    layer: "Intervention Intelligence",
    prompt: "What will you do if student thinking stalls?",
    options: [
      { value: "q5_1", label: "Repeat the instructions", score: 0 },
      { value: "q5_2", label: "Give the answer or model solution", score: 0 },
      { value: "q5_3", label: "Ask guiding questions", score: 2 },
      { value: "q5_4", label: "Provide a scaffold or partial example", score: 2 },
      { value: "q5_5", label: "I'm not sure", score: 0 }
    ]
  }
];

const resultBands: AuditResultBand[] = [
  {
    min: 8,
    max: 10,
    title: "Strong Thinking Design",
    message:
      "Your lesson is likely to require and reveal student thinking. Check that your intervention plan is specific enough to guide students when thinking stalls."
  },
  {
    min: 5,
    max: 7,
    title: "Needs Tightening",
    message:
      "Your lesson has some strong thinking conditions, but one or two layers may still allow passive completion. Strengthen the weakest layer before teaching."
  },
  {
    min: 0,
    max: 4,
    title: "Cognitively Risky",
    message:
      "Students may be able to complete this lesson without enough visible thinking. Tighten the task before teaching."
  }
];

const weakestLayerFeedback: Record<AuditQuestion["layer"], string> = {
  "Thinking Intent":
    "Make the thinking demand more precise. Replace broad activity language with one clear thinking verb: explain, justify, compare, design, or evaluate.",
  "Cognitive Load Control":
    "Reduce friction before increasing challenge. Clarify instructions, remove unnecessary steps, or limit tool use until students know what they are thinking about.",
  "Thinking Activation":
    "Add a short first-attempt moment before explanation or support. Students should predict, try, explain, or decide before receiving help.",
  "Thinking Visibility":
    "Make thinking observable before the final answer. Add a checkpoint, draft, explanation frame, or claim-evidence-reasoning response.",
  "Intervention Intelligence":
    "Plan your response before students get stuck. Prepare one guiding question, one scaffold, and one extension prompt."
};

const thinkingVerbs = [
  "explain",
  "justify",
  "compare",
  "evaluate",
  "predict",
  "defend",
  "revise",
  "reason",
  "infer",
  "analyze",
  "analyse",
  "prove",
  "decide"
];

const visibilitySignals = ["because", "evidence", "reason", "why", "claim", "example", "steps", "support", "reflection"];

const weakProductWords = [
  "worksheet",
  "quiz",
  "poster",
  "presentation",
  "slides",
  "notes",
  "answers",
  "discussion",
  "task",
  "activity"
];

const layerPriorityOrder: AuditQuestion["layer"][] = [
  "Thinking Intent",
  "Cognitive Load Control",
  "Thinking Activation",
  "Thinking Visibility",
  "Intervention Intelligence"
];

function includesAny(input: string, terms: string[]) {
  return terms.some((term) => input.includes(term));
}

function getOptionScore(questionId: AuditQuestion["id"], optionValue?: string) {
  if (!optionValue) return 0;

  const question = auditQuestions.find((item) => item.id === questionId);
  if (!question) return 0;

  return question.options.find((option) => option.value === optionValue)?.score ?? 0;
}

export function analyzeVisibilityInput(rawInput: string): VisibilityAnalysis {
  const input = rawInput.trim();
  const normalized = input.toLowerCase();

  if (!input || input.length < 20) {
    return {
      level: "weak",
      message: "This is too brief to show visible thinking. Name what students must explain, justify, compare, or prove."
    };
  }

  const hasThinkingVerb = includesAny(normalized, thinkingVerbs);
  const hasVisibilitySignal = includesAny(normalized, visibilitySignals);
  const hasWeakProductWord = includesAny(normalized, weakProductWords);

  if (hasWeakProductWord && !hasThinkingVerb) {
    return {
      level: "weak",
      message: "The product is visible, but the thinking is not. Add what students must explain, justify, compare, or decide."
    };
  }

  if (hasThinkingVerb && hasVisibilitySignal) {
    return {
      level: "strong",
      message: "Strong thinking visibility: students must show reasoning, not just complete a task."
    };
  }

  if (hasThinkingVerb || hasVisibilitySignal) {
    return {
      level: "developing",
      message:
        "Developing: this points toward visible thinking, but it could be clearer. Add what students must explain and what evidence you will see."
    };
  }

  return {
    level: "weak",
    message: "This describes an activity more than visible thinking. Add a thinking verb and a reasoning signal."
  };
}

function getResultBand(score: number): AuditResultBand {
  return resultBands.find((band) => score >= band.min && score <= band.max) ?? resultBands[2];
}

function getWeakestLayer(
  scoreByLayer: Record<AuditQuestion["layer" | "id"], number>,
  visibilityLevel: VisibilityLevel
): AuditQuestion["layer"] {
  const adjustedVisibilityScore =
    visibilityLevel === "weak" ? Math.max(0, scoreByLayer["Thinking Visibility"] - 1) : scoreByLayer["Thinking Visibility"];

  const layerScores: Record<AuditQuestion["layer"], number> = {
    "Thinking Intent": scoreByLayer["Thinking Intent"],
    "Cognitive Load Control": scoreByLayer["Cognitive Load Control"],
    "Thinking Activation": scoreByLayer["Thinking Activation"],
    "Thinking Visibility": adjustedVisibilityScore,
    "Intervention Intelligence": scoreByLayer["Intervention Intelligence"]
  };

  const minScore = Math.min(...Object.values(layerScores));
  const tiedLayers = layerPriorityOrder.filter((layer) => layerScores[layer] === minScore);

  return tiedLayers[0] ?? "Thinking Intent";
}

export type AuditComputation = {
  totalScore: number;
  title: string;
  diagnosis: string;
  weakestLayer: AuditQuestion["layer"];
  nextMove: string;
  visibilityAnalysis: VisibilityAnalysis;
};

export function computeAuditResult(values: {
  q1: string;
  q2: string;
  q3: string;
  q4: string;
  q5: string;
  visibilityText: string;
}): AuditComputation {
  const q1Score = getOptionScore("q1", values.q1);
  const q2Score = getOptionScore("q2", values.q2);
  const q3Score = getOptionScore("q3", values.q3);
  const q4Score = getOptionScore("q4", values.q4);
  const q5Score = getOptionScore("q5", values.q5);

  const totalScore = q1Score + q2Score + q3Score + q4Score + q5Score;
  const visibilityAnalysis = analyzeVisibilityInput(values.visibilityText);

  const scoreByLayer: Record<AuditQuestion["layer" | "id"], number> = {
    q1: q1Score,
    q2: q2Score,
    q3: q3Score,
    q4: q4Score,
    q5: q5Score,
    "Thinking Intent": q1Score,
    "Cognitive Load Control": q2Score,
    "Thinking Activation": q3Score,
    "Thinking Visibility": q4Score,
    "Intervention Intelligence": q5Score
  };

  const weakestLayer = getWeakestLayer(scoreByLayer, visibilityAnalysis.level);
  const resultBand = getResultBand(totalScore);

  return {
    totalScore,
    title: resultBand.title,
    diagnosis: resultBand.message,
    weakestLayer,
    nextMove: weakestLayerFeedback[weakestLayer],
    visibilityAnalysis
  };
}
