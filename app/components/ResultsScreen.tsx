"use client";

import { motion } from "framer-motion";

const descriptions: Record<string, { title: string; vibe: string; summary: string }> = {
  ENFJ: {
    title: "The Visionary 💫",
    vibe: "Charismatic • Inspiring • Loyal",
    summary:
      "You move with heart and purpose. People naturally gravitate toward your energy because you see potential everywhere — and you help others see it too. You’re the friend who hypes people up and genuinely means it.",
  },
  INFP: {
    title: "The Dreamer 🌙",
    vibe: "Empathic • Deep • Artistic",
    summary:
      "You live in your feelings and imagination — always searching for meaning and connection. People might call you quiet, but your thoughts run galaxies deep. You’re loyal to your values and those who vibe with them.",
  },
  ESTP: {
    title: "The Go-Getter ⚡",
    vibe: "Adventurous • Bold • Fearless",
    summary:
      "You’re about action, not theory. You thrive in the moment and know how to turn any situation into a story worth telling. You’ve got main-character energy and the confidence to back it up.",
  },
  INTJ: {
    title: "The Strategist 🧠",
    vibe: "Calculated • Independent • Vision-driven",
    summary:
      "You’re the mastermind behind the scenes — always five steps ahead. You crave efficiency and growth, and people underestimate how much you actually care beneath that calm, collected surface.",
  },
  ESFP: {
    title: "The Performer 🔥",
    vibe: "Vibrant • Magnetic • Fun",
    summary:
      "Life’s a stage, and you’re the star. You bring the party, the laughter, and the light. People love your presence because it makes the world feel more alive — but you’ve got real depth, too.",
  },
  ISTJ: {
    title: "The Grounded One 🌍",
    vibe: "Reliable • Honest • Consistent",
    summary:
      "You keep it 100 — steady, loyal, and always on point. You like structure and hate when people waste time. When you commit, you show up fully. Everyone knows you’re built different.",
  },
  ENFP: {
    title: "The Free Spirit 🌈",
    vibe: "Curious • Creative • Warm",
    summary:
      "Your energy is contagious — you dream big, connect deep, and chase what lights you up. You can see the best in people and help them see it, too. You’re not made for boxes or labels — you build your own lane.",
  },
  ISTP: {
    title: "The Fixer 🔧",
    vibe: "Cool • Practical • Mysterious",
    summary:
      "You like figuring things out — from tech to people — and you move quietly but with confidence. You’re chill until something needs handling, then you’re locked in and focused.",
  },
  ENTJ: {
    title: "The Boss 🏁",
    vibe: "Driven • Decisive • Visionary",
    summary:
      "You’ve got CEO energy — ambitious, strategic, and unafraid to take charge. You see goals as missions, not maybes. You inspire respect by walking the talk and expecting excellence.",
  },
  INFJ: {
    title: "The Mystic 🔮",
    vibe: "Insightful • Compassionate • Private",
    summary:
      "You read vibes like other people read words. You sense things others miss and often feel like an old soul in a loud world. You crave real connection and move with purpose and intention.",
  },
  ISFP: {
    title: "The Aesthetic Soul 🎨",
    vibe: "Chill • Creative • Genuine",
    summary:
      "You express yourself through art, style, and vibe. You move at your own rhythm — never fake, always authentic. People trust you because you keep it real and beautiful at the same time.",
  },
  ESTJ: {
    title: "The Organizer 📊",
    vibe: "Efficient • Assertive • Solid",
    summary:
      "You don’t just talk — you execute. You like when things make sense and when people follow through. You’re the backbone of every team because you bring order to the chaos.",
  },
  INTP: {
    title: "The Thinker 🌀",
    vibe: "Analytical • Curious • Abstract",
    summary:
      "Your mind’s always running — connecting dots, testing theories, and questioning everything. You love ideas more than small talk and crave people who can keep up with your brainwaves.",
  },
  ISFJ: {
    title: "The Protector 🛡️",
    vibe: "Caring • Loyal • Thoughtful",
    summary:
      "You remember every detail that matters. You’re that friend who checks in quietly but consistently. You value peace, comfort, and making sure your people are safe and good.",
  },
  ESFJ: {
    title: "The Connector 💞",
    vibe: "Friendly • Generous • Social",
    summary:
      "You’re the glue in your circles — the one who remembers birthdays, plans the link-ups, and makes everyone feel seen. You live for good vibes, real loyalty, and shared laughs.",
  },
  ENTP: {
    title: "The Maverick ⚔️",
    vibe: "Innovative • Playful • Bold",
    summary:
      "You question rules, spark new ideas, and never settle for average. You see possibilities others miss and love debating just for fun. You’re chaos — but the *fun* kind.",
  },
};

export default function ResultsScreen({ type }: { type: string }) {
  const info =
    descriptions[type as keyof typeof descriptions] || {
      title: "Unique Mix ✨",
      vibe: "Unpredictable • Complex • One-of-one",
      summary:
        "You don’t fit the mold — and that’s your power. Your mix of energy, logic, and intuition makes you someone people remember.",
    };

  return (
    <motion.div
      key="results"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center justify-center text-center px-6 py-12"
    >
      <motion.h2
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-transparent bg-clip-text"
      >
        {info.title}
      </motion.h2>

      <p className="text-lg text-gray-300 mb-2">
        Your vibe type:{" "}
        <span className="font-semibold text-white">{type}</span>
      </p>
      <p className="text-md text-purple-300 mb-8">{info.vibe}</p>

      <p className="max-w-2xl text-gray-200 mb-10 leading-relaxed">
        {info.summary}
      </p>

      <motion.a
        href="/"
        className="mt-6 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold py-3 px-8 rounded-full shadow-md hover:opacity-90 transition"
        whileHover={{ scale: 1.05 }}
      >
        Retake the Quiz 🔁
      </motion.a>

      <motion.div
        className="mt-10 text-sm text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        Share your vibe 🔗 — tag{" "}
        <span className="text-pink-400 font-semibold">@whatsmyvibe</span>
      </motion.div>
    </motion.div>
  );
}
