import type { Book } from '../types';

export const INITIAL_BOOKS: Book[] = [
  {
    id: 'meditations-aurelius',
    title: 'Meditations',
    author: 'Marcus Aurelius',
    category: 'History',
    coverBg: 'linear-gradient(135deg, #4A3E3D 0%, #2A2120 100%)',
    coverTextColor: '#F7E7CE',
    readingTime: '4 hrs 15 mins',
    totalPages: 248,
    publicationYear: '180 AD',
    isAudioAvailable: true,
    audioDuration: '3 hrs 45 mins',
    description: 'Personal writings of the Roman Emperor Marcus Aurelius detailing his private notes on Stoic philosophy, self-discipline, resilience, and ethical living in an unpredictable world.',
    progress: {
      chapterIndex: 0,
      pageNumber: 34,
      percent: 24,
      lastRead: '2 hours ago'
    },
    chapters: [
      {
        id: 'ch-1',
        number: 1,
        title: 'Debts and Lessons from My Elders',
        readingTime: '20 mins',
        summary: 'Marcus Aurelius reflects on the virtues and morals he acquired from his grandfather, father, mother, and teachers.',
        keyPoints: [
          'Gratitude is the cornerstone of character development.',
          'True composure stems from observing the integrity of ancestors.',
          'Avoid luxury, vanity, and unnecessary social disputes.'
        ],
        content: `From my grandfather Verus, I learned good morals and the government of my temper. From the reputation and remembrance of my father, modesty and a manly character. From my mother, piety and beneficence, and abstinence, not only from evil deeds, but even from evil thoughts; and further, simplicity in my way of living, far removed from the habits of the rich.

When you wake up in the morning, tell yourself: The people I deal with today will be meddling, ungrateful, arrogant, dishonest, jealous, and surly. They are like this because they cannot distinguish good from evil. But I have seen the beauty of good, and the ugliness of evil, and I have recognized that the wrongdoer has a nature related to my own — not of the same blood or birth, but the same mind, and possessing a share of the divine. And so none of them can hurt me. No one can implicate me in ugliness. Nor can I be angry at my relative, or hate him. We were born to work together like feet, hands, and the rows of the upper and lower teeth. To obstruct one another is unnatural. To feel anger at someone, to turn your back on him: these are obstructions.

Whatever this is that I am, it is a little flesh and breath, and the ruling part. Degrade not your mind. Do not let it be enslaved, nor pulled like a puppet by every impulse. Let not your ruling reason be discontented with its present lot or dread the future.`
      },
      {
        id: 'ch-2',
        number: 2,
        title: 'On the Ruling Mind & Tranquility',
        readingTime: '25 mins',
        summary: 'An inquiry into preserving an unshakeable inner citadel amidst external chaos and opinion.',
        keyPoints: [
          'External events cannot touch the soul; only our judgements create distress.',
          'Every moment is a gift to perform your immediate duty with reverence.',
          'Time is a rushing river; all material things pass away rapidly.'
        ],
        content: `Perform every act of your life as if it were your last. Lay aside all carelessness, all passionate aversion to the commands of reason, all hypocrisy, self-love, and dissatisfaction with your own share. You see how few things a person needs to master in order to live a tranquil and god-fearing life.

Remember how long you have put off these things, and how often you have received a opportunity from the gods, and yet do not use it. You must now at last perceive of what universe you are a part, and of what governor of the universe your existence is an efflux. A limit of time is fixed for you, which if you do not use for clearing away the clouds from your mind, it will go and never return.

Never regard something as beneficial to you that will ever force you to break your pledge, to lose your self-respect, to hate anyone, to suspect, to curse, to act hypocritically, or to desire anything that needs walls and curtains to hide it.`
      },
      {
        id: 'ch-3',
        number: 3,
        title: 'Inner Citadel and Impermanence',
        readingTime: '30 mins',
        summary: 'Reflecting on nature, change, and retreat into one’s internal sanctuary.',
        keyPoints: [
          'Nowhere can man find a quieter or more untroubled retreat than in his own soul.',
          'Accept change as the fundamental law of nature.',
          'Live in the present; the past is gone, the future is uncertain.'
        ],
        content: `People look for retreats for themselves, in the country, by the coast, or in the hills. There is nowhere that a person can find a more peaceful and trouble-free retreat than in his own mind. So constantly give yourself this retreat, and renew yourself. Let your principles be brief and fundamental, the kind that will at once close out the world and send you back without irritation to the life to which you must return.

Loss is nothing else but change, and change is Nature's delight. Everything happens according to nature's ordinance. Look at the swiftness of the stream in which all things are borne past us.`
      }
    ],
    summary: {
      quickOverview: 'Meditations is a masterpiece of Stoic philosophy written as a private diary by Roman Emperor Marcus Aurelius. It emphasizes self-mastery, emotional resilience, duty, and accepting impermanence.',
      mainIdeas: [
        'Our thoughts determine the quality of our life, not external circumstance.',
        'Acceptance of what we cannot control releases anxiety.',
        'Living with integrity and serving the common good is our primary calling.'
      ],
      keyTakeaways: [
        'You have power over your mind — not outside events. Realize this, and you will find strength.',
        'It is not death that a man should fear, but he should fear never beginning to live.',
        'The best revenge is to be unlike him who performed the injury.'
      ],
      importantConcepts: [
        { title: 'The Inner Citadel', explanation: 'The mind as a fortress unaffected by external chaos if disciplined properly.' },
        { title: 'Amor Fati', explanation: 'Love of fate — embracing every obstacle as material for personal growth.' }
      ]
    },
    presetQAs: [
      {
        question: 'What is Marcus Aurelius’ advice for dealing with difficult people?',
        answer: 'Marcus Aurelius reminds himself every morning that people who act unkindly or selfishly do so out of ignorance of what is good. Rather than reacting with anger, he advises viewing them as fellow human beings designed to work together, and refusing to let their actions corrupt your own integrity.'
      },
      {
        question: 'How can I apply Stoicism to daily stress?',
        answer: 'Focus strictly on your internal response rather than the external event. Ask yourself: "Is this within my direct control?" If not, accept it calmly and allocate your energy solely to your choices, duty, and composure.'
      }
    ]
  },
  {
    id: 'architecture-of-silence',
    title: 'The Architecture of Silence',
    author: 'Evelyn St. Claire',
    category: 'Psychology',
    coverBg: 'linear-gradient(135deg, #CDB891 0%, #A6916B 100%)',
    coverTextColor: '#2C2421',
    readingTime: '3 hrs 50 mins',
    totalPages: 210,
    publicationYear: '2024',
    isAudioAvailable: true,
    audioDuration: '4 hrs 10 mins',
    description: 'A quiet exploration into the neurobiology of solitude, contemplative focus, and how creating intentional space in a noisy world restores deep cognitive clarity and creative rhythm.',
    progress: {
      chapterIndex: 1,
      pageNumber: 88,
      percent: 42,
      lastRead: 'Yesterday'
    },
    chapters: [
      {
        id: 'silence-1',
        number: 1,
        title: 'The Overstimulated Mind',
        readingTime: '18 mins',
        summary: 'Examining the sensory load of modern notification culture and its impact on reflection.',
        keyPoints: [
          'Constant connection fragments continuous attention.',
          'Silence is not the absence of sound, but the presence of awareness.'
        ],
        content: `In an era defined by perpetual pinging, silence has become the rarest luxury of human existence. We have conditioned our nervous systems to treat quietude as an anomaly, an uncomfortable vacuum that demands immediate filling with digital noise.

Yet neuroscientific research confirms what monastic traditions understood centuries ago: the default mode network of the human brain requires periods of unprompted stillness to consolidate memory, synthesize complex ideas, and foster emotional self-regulation.`
      },
      {
        id: 'silence-2',
        number: 2,
        title: 'Designing Sacral Quiet Spaces',
        readingTime: '22 mins',
        summary: 'Practical principles for carving out contemplative sanctuaries in home and daily routine.',
        keyPoints: [
          'Spatial boundaries signal psychological boundaries.',
          'Morning quiet hours protect cognitive reserves.'
        ],
        content: `Creating a sanctuary of quiet does not require moving to a cabin in the woods. It begins with small, deliberate architectural and behavioral choices. Designating a single chair, a quiet corner, or an unhurried 20 minutes before dawn creates an anchor point around which your mental energy settles.`
      }
    ],
    summary: {
      quickOverview: 'An illuminating work on reclaiming cognitive sovereignty through intentional silence, reduced sensory input, and deep contemplative routines.',
      mainIdeas: [
        'Solitude is essential for profound creative output.',
        'Noise pollution impairs working memory and elevates stress hormones.',
        'Silence unlocks intuitive problem solving.'
      ],
      keyTakeaways: [
        'Schedule non-negotiable quiet windows in your daily routine.',
        'Protect your first hour awake from digital consumption.'
      ],
      importantConcepts: [
        { title: 'Auditory Fasting', explanation: 'Deliberately abstaining from audio input during walks, commutes, and domestic chores.' }
      ]
    },
    presetQAs: [
      {
        question: 'Why does silence improve creativity?',
        answer: 'When external input ceases, the brain shifts into the default mode network, allowing distant memories, concepts, and emotional insights to collide and form novel ideas.'
      }
    ]
  },
  {
    id: 'deep-work-mastery',
    title: 'Focus in the Age of Noise',
    author: 'Dr. Julian Thorne',
    category: 'Self Development',
    coverBg: 'linear-gradient(135deg, #7D6C65 0%, #4E403B 100%)',
    coverTextColor: '#FAF0E6',
    readingTime: '5 hrs 10 mins',
    totalPages: 310,
    publicationYear: '2023',
    isAudioAvailable: true,
    audioDuration: '5 hrs 00 mins',
    description: 'A systematic framework for developing rare, uninterrupted concentration skills to produce high-value knowledge work.',
    progress: {
      chapterIndex: 0,
      pageNumber: 12,
      percent: 5,
      lastRead: '3 days ago'
    },
    chapters: [
      {
        id: 'fw-1',
        number: 1,
        title: 'The Deep Work Hypothesis',
        readingTime: '25 mins',
        summary: 'Why the ability to perform deep work is becoming increasingly rare and valuable.',
        keyPoints: [
          'Shallow work keeps you busy; deep work produces breakthroughs.',
          'Multitasking leaves attention residue that degrades quality.'
        ],
        content: `Deep work is the ability to focus without distraction on a cognitively demanding task. It is a skill that allows you to quickly master complicated information and produce better results in less time. Deep work will make you better at what you do and provide the sense of true fulfillment that comes from craftsmanship.`
      }
    ],
    summary: {
      quickOverview: 'A definitive guide to cultivating intense focus, eliminating digital distractions, and structuring your work environment for peak intellectual output.',
      mainIdeas: [
        'Monastic and bimodal scheduling foster deep work habits.',
        'Embrace boredom to strengthen mental stamina.'
      ],
      keyTakeaways: [
        'Batch administrative shallow work into designated afternoon blocks.'
      ],
      importantConcepts: [
        { title: 'Attention Residue', explanation: 'The cognitive penalty paid when switching between tasks before completing the first.' }
      ]
    },
    presetQAs: [
      {
        question: 'How do I start building a deep work habit?',
        answer: 'Begin with 60 to 90-minute distraction-free blocks where your phone is in another room and all browser tabs unrelated to the task are closed.'
      }
    ]
  },
  {
    id: 'art-of-clarity',
    title: 'The Art of Clear Thinking',
    author: 'Clara V. Vance',
    category: 'Psychology',
    coverBg: 'linear-gradient(135deg, #C3B091 0%, #8C785B 100%)',
    coverTextColor: '#2C2421',
    readingTime: '4 hrs 00 mins',
    totalPages: 260,
    publicationYear: '2022',
    isAudioAvailable: false,
    description: 'Understanding mental models, cognitive biases, and how noble simplicity in thinking leads to wiser life decisions.',
    progress: {
      chapterIndex: 2,
      pageNumber: 140,
      percent: 55,
      lastRead: '4 hours ago'
    },
    chapters: [
      {
        id: 'ac-1',
        number: 1,
        title: 'First Principles Thinking',
        readingTime: '20 mins',
        summary: 'Deconstructing complex problems down to their fundamental truths.',
        keyPoints: [
          'Reason from first principles rather than by analogy.',
          'Question assumptions relentlessly.'
        ],
        content: `First principles thinking is one of the best ways to reverse-engineer complicated problems and unleash creative freedom. Sometimes called reasoning from first principles, the idea is to break down a problem into its most basic foundational truths and build up a solution from there.`
      }
    ],
    summary: {
      quickOverview: 'A handbook on mental models designed to help thinkers cut through cognitive distortions, emotional biases, and logical fallacies.',
      mainIdeas: [
        'Inversion thinking prevents catastrophic errors.',
        'Second-order effects dictate long-term success.'
      ],
      keyTakeaways: [
        'Always ask: "And then what?" when evaluating major decisions.'
      ],
      importantConcepts: [
        { title: 'Inversion Principle', explanation: 'Thinking through how to achieve failure in order to avoid it.' }
      ]
    },
    presetQAs: [
      {
        question: 'What is second-order thinking?',
        answer: 'Second-order thinking considers the subsequent consequences of consequences, evaluating long-term outcomes rather than immediate immediate relief.'
      }
    ]
  },
  {
    id: 'stargazing-mind',
    title: 'Cosmic Perspective',
    author: 'Prof. Arthur Pendelton',
    category: 'Science',
    coverBg: 'linear-gradient(135deg, #3A322D 0%, #1F1917 100%)',
    coverTextColor: '#F7E7CE',
    readingTime: '6 hrs 20 mins',
    totalPages: 380,
    publicationYear: '2023',
    isAudioAvailable: true,
    audioDuration: '6 hrs 15 mins',
    description: 'A poetic journey through astrophysical discoveries, relativity, and what the vastness of the universe teaches us about human humility.',
    progress: {
      chapterIndex: 0,
      pageNumber: 0,
      percent: 0,
      lastRead: 'Not started'
    },
    chapters: [
      {
        id: 'cp-1',
        number: 1,
        title: 'Pale Blue Dot of Awareness',
        readingTime: '30 mins',
        summary: 'Reflecting on humanity’s fragile place within interstellar space.',
        keyPoints: [
          'Cosmic perspective instills awe and reduces trivial worries.',
          'We are the universe experiencing itself.'
        ],
        content: `Look again at that dot. That's here. That's home. That's us. On it everyone you love, everyone you know, everyone you ever heard of, every human being who ever was, lived out their lives. The aggregate of our joy and suffering, thousands of confident religions, ideologies, and economic doctrines.`
      }
    ],
    summary: {
      quickOverview: 'An inspiring exploration of modern astronomy and quantum physics, connecting cosmological phenomena with human purpose.',
      mainIdeas: [
        'Elements in our bodies were forged in distant stellar furnaces.',
        'Awe reduces ego and expands empathy.'
      ],
      keyTakeaways: [
        'Cultivate daily curiosity about the natural world.'
      ],
      importantConcepts: [
        { title: 'Stardust Origin', explanation: 'Carbon, nitrogen, and oxygen atoms in our DNA originated inside dying stars.' }
      ]
    },
    presetQAs: [
      {
        question: 'What is the cosmic perspective?',
        answer: 'It is a worldview that sees earth and human existence in the context of the vast universe, engendering humility, curiosity, and unity.'
      }
    ]
  },
  {
    id: 'silicon-philosophy',
    title: 'Humanity in the Machine Age',
    author: 'Elena Rostova',
    category: 'Technology',
    coverBg: 'linear-gradient(135deg, #5E504A 0%, #3B312D 100%)',
    coverTextColor: '#FFF8E7',
    readingTime: '4 hrs 45 mins',
    totalPages: 275,
    publicationYear: '2024',
    isAudioAvailable: true,
    audioDuration: '4 hrs 30 mins',
    description: 'How artificial intelligence, digital ecosystems, and synthetic tools can enhance human wisdom rather than diminish our soul.',
    progress: {
      chapterIndex: 0,
      pageNumber: 45,
      percent: 18,
      lastRead: '5 days ago'
    },
    chapters: [
      {
        id: 'hma-1',
        number: 1,
        title: 'Tools of Thought',
        readingTime: '22 mins',
        summary: 'Historical perspective on technology as cognitive extensions of human intention.',
        keyPoints: [
          'Technology should serve as a quiet bicycle for the mind.',
          'Keep human agency at the center of automated workflows.'
        ],
        content: `From the invention of written script to the printing press, technology has always reshaped the contours of human thought. The goal of modern digital tools should not be to capture attention, but to amplify human intellect and peaceful creativity.`
      }
    ],
    summary: {
      quickOverview: 'A thoughtful treatise advocating for human-centered technology that respects cognitive serenity, privacy, and genuine human flourishing.',
      mainIdeas: [
        'Humane design prioritizes calm focus over engagement algorithms.',
        'AI is a collaborative reading companion, not a replacement for human discernment.'
      ],
      keyTakeaways: [
        'Choose tools that enhance your agency and deep quiet thoughts.'
      ],
      importantConcepts: [
        { title: 'Calm Computing', explanation: 'Technology that operates quietly in the background without constantly demanding attention.' }
      ]
    },
    presetQAs: [
      {
        question: 'What is calm technology?',
        answer: 'Calm technology informs and helps without demanding continuous active attention, residing peacefully in the periphery of our environment.'
      }
    ]
  },
  {
    id: 'psychology-of-quiet-wealth',
    title: 'The Psychology of Quiet Wealth',
    author: 'Marcus Sterling',
    category: 'Business',
    coverBg: 'linear-gradient(135deg, #D4C3A3 0%, #A3906F 100%)',
    coverTextColor: '#2C2421',
    readingTime: '3 hrs 40 mins',
    totalPages: 220,
    publicationYear: '2023',
    isAudioAvailable: true,
    audioDuration: '3 hrs 50 mins',
    description: 'Timeless lessons on financial independence, emotional freedom, and understanding what true abundance means beyond material accumulation.',
    progress: {
      chapterIndex: 0,
      pageNumber: 0,
      percent: 0,
      lastRead: 'Not started'
    },
    chapters: [
      {
        id: 'qw-1',
        number: 1,
        title: 'Freedom is the Highest Dividend',
        readingTime: '20 mins',
        summary: 'Why controlling your time is the ultimate value of wealth.',
        keyPoints: [
          'Wealth is what you do not see — saved assets, options, and freedom.',
          'Ability to wake up and say "I can do whatever I want today" is the true metric.'
        ],
        content: `The highest form of wealth is the ability to wake up every morning and say, "I can do whatever I want today." People want to build wealth to make them happy. Happiness is a complicated topic, but if there is a common denominator, it is that people want to control their lives.`
      }
    ],
    summary: {
      quickOverview: 'An insightful book showing how behavioral psychology and personal values dictate long-term financial security far more than technical formulas.',
      mainIdeas: [
        'Doing well with money has little to do with how smart you are and a lot to do with how you behave.',
        'True wealth is quiet and invisible.'
      ],
      keyTakeaways: [
        'Save money not just for a specific purchase, but for life flexibility.'
      ],
      importantConcepts: [
        { title: 'Margin of Safety', explanation: 'Leaving room for error in planning to survive unexpected life events.' }
      ]
    },
    presetQAs: [
      {
        question: 'What is the main definition of wealth in this book?',
        answer: 'Wealth is unspent financial flexibility — the options, security, and freedom to control your own time.'
      }
    ]
  },
  {
    id: 'socratic-pedagogy',
    title: 'The Art of Learning & Teaching',
    author: 'Dr. Maria Montano',
    category: 'Education',
    coverBg: 'linear-gradient(135deg, #A89575 0%, #7A694B 100%)',
    coverTextColor: '#FFF8E7',
    readingTime: '5 hrs 00 mins',
    totalPages: 290,
    publicationYear: '2021',
    isAudioAvailable: false,
    description: 'Rediscovering classical inquiry, curiosity-driven education, and cultivating lifelong habits of deep comprehension.',
    progress: {
      chapterIndex: 1,
      pageNumber: 102,
      percent: 38,
      lastRead: '1 week ago'
    },
    chapters: [
      {
        id: 'ed-1',
        number: 1,
        title: 'The Joy of Unforced Curiosity',
        readingTime: '25 mins',
        summary: 'How intrinsic motivation transforms learning from a chore into a lifelong pleasure.',
        keyPoints: [
          'True understanding requires active questioning.',
          'Education is the lighting of a fire, not the filling of a vessel.'
        ],
        content: `Childhood curiosity is natural and relentless. When we create educational environments that honor this natural drive, learning becomes self-sustaining and joyful.`
      }
    ],
    summary: {
      quickOverview: 'A masterclass in self-directed education, critical inquiry, and building intellectual stamina.',
      mainIdeas: [
        'Teach how to think, not what to think.',
        'Spaced repetition and active recall build durable knowledge.'
      ],
      keyTakeaways: [
        'Test your comprehension by explaining complex topics in plain language.'
      ],
      importantConcepts: [
        { title: 'Feynman Technique', explanation: 'Simplifying a concept until a novice can understand it to uncover gaps in your knowledge.' }
      ]
    },
    presetQAs: [
      {
        question: 'How can I retain what I read better?',
        answer: 'Annotate key passages, write a short 2-sentence summary after finishing each chapter, and discuss key ideas with others.'
      }
    ]
  }
];
