export const navItems = [
  { href: "#five-layers", label: "Five LIF Layers" },
  { href: "#about", label: "About Damir" }
] as const;

export const pageContent = {
  hero: {
    eyebrow: "Lesson Intelligence Framework",
    title: "Lesson Design for the AI-infused Classroom",
    subtitle:
      "The challenge in today's classroom is no longer producing answers but knowing whether real thinking happened along the way.\n\nWhen the process disappears behind polished output, teaching becomes guesswork.\n\nThe LIF Teacher's Guide helps you design lessons where thinking is built into the structure of the learning itself.",
    primaryCta: "Download LIF Guide",
    secondaryCta: "See the 5 Layers"
  },
  problem: {
    title: "Why Lessons Miss Student Thinking",
    points: [
      "A lesson can feel busy, structured, and successful while students do very little real thinking.",
      "AI makes polished output easy, which means finished work no longer proves understanding.",
      "If thinking stays hidden, teachers cannot respond precisely - they can only guess, generalize, or move on too early."
    ]
  },
  whatIsLif: {
    title: "What LIF Is",
    claim:
      "The Lesson Intelligence Framework (LIF) helps teachers look at lessons through the lens of student thinking. Grounded in learning science, it provides a practical structure for designing lessons where thinking is intentional, visible, and guided. Rather than adding complexity, LIF helps teachers recognize and strengthen practices they already use-while making their purpose clearer.",
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
    title: "LIF in Practice",
    setup:
      "A Year 8 science class is studying ecosystems. Students can recall food chains, but struggle to explain what happens when one species disappears.",
    moves: [
      {
        layer: "Thinking Intent",
        action: "The teacher sets one clear goal: explain how removing one species changes the ecosystem.",
        student: "Students focus on cause and effect, not just naming facts."
      },
      {
        layer: "Cognitive Load Control",
        action: "The task is broken into one scenario, one question, and one model before discussion.",
        student: "Students spend effort on reasoning instead of decoding instructions."
      },
      {
        layer: "Thinking Activation",
        action: "Students predict outcomes in pairs and justify each claim with evidence.",
        student: "Students test ideas aloud and refine their explanations with a partner."
      },
      {
        layer: "Thinking Visibility",
        action: "The teacher uses a short written reasoning prompt and quick board checks.",
        student: "Student thinking becomes visible through explanations, not just answers."
      },
      {
        layer: "Intervention Intelligence",
        action: "The teacher groups misconceptions and gives targeted mini-feedback before independent work.",
        student: "Students revise flawed reasoning and strengthen their final explanations."
      }
    ],
    outcome:
      "Students move from recalling food chains to explaining ecosystem changes with evidence. The teacher can clearly see which reasoning is secure and which misconceptions need support."
  },
  about: {
    title: "About Damir",
    body:
      "Damir Odobasic is an educator, school leader, and speaker on AI and innovation in education focused on thinking-driven lesson design in the age of AI. As Head of Music, ICT, and Digital Integration at an international school, he works at the intersection of classroom practice, instructional leadership, and learning science. He is an Innovation in Education awardee and Bett Asia Advisory Board member, and the developer of the Lesson Intelligence Framework (LIF)-a practical approach that helps teachers design lessons where student thinking is visible, intentional, and guided."
  },
  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "Does using LIF add more planning time?",
        answer:
          "Not necessarily. Most teachers already make many of these decisions while planning. LIF brings them into a clearer structure so lesson design becomes more intentional and easier to refine."
      },
      {
        question: "What is included in the framework?",
        answer:
          "The guide includes an introduction to LIF, the five-layer structure, the learning conditions behind it, a worked classroom example, and a quick planning guide for immediate use."
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
    cta: "Send me the guide"
  },
  footer: {
    note: "Lesson Intelligence Framework (LIF)",
    copyright: "All rights reserved."
  }
} as const;
