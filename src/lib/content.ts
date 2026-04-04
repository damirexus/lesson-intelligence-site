export const navItems = [
  { href: "#five-layers", label: "Five LIF Layers" },
  { href: "#about", label: "About Damir" }
] as const;

export const pageContent = {
  hero: {
    eyebrow: "Lesson Intelligence Framework",
    title: "Your Students Are Producing More. Thinking Less.",
    subtitle:
      "AI didn't create this problem. It made it impossible to ignore.\n\nThe Lesson Intelligence Framework (LIF) gives you a five-layer structure for designing lessons where thinking is required, visible, and guided - grounded in learning science, built for your classroom.",
    primaryCta: "Download the Free Teacher's Guide",
    secondaryCta: "See the 5 Layers",
    testimonial: {
      text: "\"Research-grounded... structured and systematic... practical and actionable.\"",
      author: "Syeda S. Zehra, English Teacher"
    }
  },
  problem: {
    title: "Does This Sound Familiar?",
    cards: [
      {
        title: "YOUR LESSON WENT WELL. OR DID IT?",
        body: "Students completed the task. The room was busy. Work got submitted. But when you look at what they produced - you're not sure any real thinking happened. The lesson felt successful. The learning didn't."
      },
      {
        title: "AI FINISHED THE WORK. YOUR STUDENT DIDN'T.",
        body: "Polished writing. Structured answers. Correct format. In an AI classroom, finished work no longer tells you what a student understands. It only tells you they know how to use a tool."
      },
      {
        title: "YOU CAN'T TEACH WHAT YOU CAN'T SEE.",
        body: "When thinking stays hidden, your only option is to guess. You generalize feedback, move on too early, and hope it lands. Without visible thinking, responsive teaching is impossible."
      }
    ]
  },
  whatLifHelps: {
    title: "HOW LIF HELPS TEACHERS",
    cards: [
      {
        icon: "/assets/visible.png",
        title: "Make thinking visible",
        body: "See student reasoning before polished output hides it.",
        detail: "Annotations, justification, compare-and-explain tasks"
      },
      {
        icon: "/assets/think.png",
        title: "Reduce passive learning",
        body: "Design lessons where students must think, not just complete.",
        detail: "Prediction, ranking, explanation, critique"
      },
      {
        icon: "/assets/map.png",
        title: "Guide teacher intervention",
        body: "Spot where thinking breaks down and respond with purpose.",
        detail: "Prompt, scaffold, redirect, reteach"
      }
    ]
  },
  testimonials: {
    title: "What teachers are saying",
    quotes: [
      {
        text: "\"A framework like this should have existed already - but it's even more necessary now in the age of AI.\"",
        author: "Horacio Ferrandiz, Head of Science Department"
      },
      {
        text: "\"A thoughtful framework that fits well with modern teaching approaches - it would resonate with many educators, especially in international and IB schools.\"",
        author: "Muberra Semin, Music Educator"
      }
    ]
  },
  guideContents: {
    title: "WHAT'S INSIDE THE GUIDE",
    framing: [
      "This is not just the framework.",
      "It shows how to apply it, stress-test it, and use it in real lessons."
    ],
    cards: [
      {
        title: "Learning Conditions Behind LIF",
        hook: "Why strong lessons fail to produce real thinking.",
        points: [
          "Where cognitive overload actually happens",
          "Why students appear fluent but do not retain",
          "How to distinguish challenge from confusion"
        ],
        outcome: "Translated into practical design decisions you can apply immediately."
      },
      {
        title: "Worked Lesson Examples",
        hook: "See how LIF looks inside real classrooms.",
        points: [
          "History -> justify the most impactful change",
          "Math -> explain proportional reasoning step by step",
          "English -> build an evidence-based argument"
        ],
        outcome: "Each example broken down across all 5 layers."
      },
      {
        title: "Quick Planning Guide",
        hook: "A tool you can use before any lesson.",
        points: [
          "5 questions to pressure-test your design",
          "A fast check for thinking, not activity",
          "A repeatable structure you can use daily"
        ],
        outcome: "Designed to be used in under 30 seconds."
      },
      {
        title: "From Idea to Implementation",
        hook: "How to move from understanding to execution.",
        points: [
          "What strong vs weak lessons actually look like",
          "Where most lessons break (and how to fix them)",
          "How to refine lessons after seeing student thinking"
        ],
        outcome: "Built to turn the framework into a usable system."
      }
    ]
  },
  whatIsLif: {
    title: "What LIF Is",
    claim:
      "LIF gives you a five-step system to design lessons where student thinking can't hide.\n\nNo new curriculum. No extra planning time. Just a clearer lens on what's already happening in your classroom - and what to do about it.",
    description: ""
  },
  layers: {
    title: "The Five Layers of Lesson Intelligence Framework",
    layers: [
      {
        order: "01",
        name: "Thinking Intent",
        detail: "Define the exact kind of thinking students must do and why it matters in this lesson."
      },
      {
        order: "02",
        name: "Cognitive Load Control",
        detail: "Reduce unnecessary complexity so effort goes to learning, not avoidable confusion."
      },
      {
        order: "03",
        name: "Thinking Activation",
        detail: "Use prompts and structures that require students to process, not just complete tasks."
      },
      {
        order: "04",
        name: "Thinking Visibility",
        detail: "Make student reasoning observable through talk, writing, modeling, and checks."
      },
      {
        order: "05",
        name: "Intervention Intelligence",
        detail: "Respond with targeted moves based on evidence from student thinking."
      }
    ]
  },
  practice: {
    title: "HOW CAN TEACHERS USE LIF",
    intro: "",
    useCases: [
      {
        title: "Plan a new lesson",
        body: "Use LIF to design lessons where student thinking is intentionally built into the structure from the start."
      },
      {
        title: "Improve an existing lesson",
        body: "Use the framework to identify passive segments, overloaded tasks, or moments where student thinking remains hidden."
      },
      {
        title: "Reflect after teaching",
        body: "Review where thinking was visible, where students got stuck, and what needs to change next time."
      }
    ],
    workedExample: {
      label: "Worked mini example",
      title: "Worked example: History lesson on the Industrial Revolution",
      intro:
        "Instead of simply asking students to learn about the causes of the Industrial Revolution, LIF helps structure the lesson around visible reasoning, clearer task design, and targeted teacher intervention.",
      steps: [
        {
          name: "Thinking Intent",
          detail: "Students rank the most important causes and justify their choices with evidence."
        },
        {
          name: "Cognitive Load Control",
          detail: "Key vocabulary is introduced in advance and task instructions are simplified."
        },
        {
          name: "Thinking Activation",
          detail: "Students compare causes, discuss alternatives, and build an argument."
        },
        {
          name: "Thinking Visibility",
          detail: "Students annotate sources and explain their rankings in writing or discussion."
        },
        {
          name: "Intervention Intelligence",
          detail: "The teacher listens for weak causal reasoning and uses prompts to redirect thinking before misconceptions settle."
        }
      ]
    }
  },
  about: {
    title: "ABOUT DAMIR ODOBASIC",
    subtitle: "LIF DEVELOPER",
    points: [
      "Educator, school leader, and speaker focused on AI, innovation, and lesson design in the age of AI",
      "Head of Music, ICT, and Digital Integration at an international school",
      "Works across classroom practice, instructional leadership, and learning science",
      "Innovation in Education awardee",
      "Bett Asia Advisory Board member",
      "Developer of the Lesson Intelligence Framework (LIF)"
    ]
  },
  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "Who is LIF for?",
        answer:
          "LIF is designed primarily for classroom teachers, but it can also support instructional leaders, coaches, and curriculum teams who want a clearer lens on lesson quality."
      },
      {
        question: "Does using LIF add more planning time?",
        answer:
          "Not necessarily. Most teachers already make many of these decisions while planning. LIF brings them into a clearer structure so lesson design becomes more intentional and easier to refine."
      },
      {
        question: "Is LIF designed only for AI-based classrooms?",
        answer:
          "No. LIF works across all teaching contexts. It becomes especially useful in AI-infused classrooms, where polished outputs can hide whether real thinking has taken place."
      },
      {
        question: "Which subjects work best with LIF?",
        answer:
          "LIF is designed to work across subjects. It can be applied in science, humanities, mathematics, arts, and interdisciplinary lessons wherever student thinking needs to be required, visible, and guided."
      }
    ]
  },
  guide: {
    title: "Get the Free LIF Teacher's Guide",
    subtitle:
      "A concise guide to the framework, the five layers, and reflection prompts you can use immediately.",
    inclusions: [
      "Practical overview",
      "Five-layer explanation",
      "Simple reflection prompts",
      "Immediate classroom use"
    ],
    cta: "Get the LIF Guide"
  },
  footer: {
    note: "Lesson Intelligence Framework (LIF)",
    copyright: "All rights reserved."
  }
} as const;
