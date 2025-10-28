"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ResultsScreen from "./ResultsScreen";

// 🔮 48 urban-translated MBTI questions
const questions = [
  // Extraversion vs Introversion
  { text: "You walk into a room and instantly start vibing with folks you’ve never met before.", trait: "E" },
  { text: "You recharge best when you’re by yourself, not surrounded by noise.", trait: "I" },
  { text: "People say you’re the one who keeps the energy going at kickbacks.", trait: "E" },
  { text: "Big crowds drain your battery fast.", trait: "I" },
  { text: "You’d rather FaceTime one close friend than be in a group chat all night.", trait: "I" },
  { text: "You’re usually the one hyping everyone up before a night out.", trait: "E" },

  // Sensing vs Intuition
  { text: "You notice the little things — outfits, tone, vibes — before anyone else does.", trait: "S" },
  { text: "You care more about what something means than how it looks.", trait: "N" },
  { text: "You like when things are concrete, not all ‘what ifs’.", trait: "S" },
  { text: "You love daydreaming about what’s possible — not just what’s real.", trait: "N" },
  { text: "You catch patterns or deeper meanings in random convos.", trait: "N" },
  { text: "You trust what you can see, touch, and prove.", trait: "S" },

  // Thinking vs Feeling
  { text: "You’d rather be real than ‘nice’.", trait: "T" },
  { text: "You make choices with your heart more than your head.", trait: "F" },
  { text: "You believe logic solves more than emotions ever could.", trait: "T" },
  { text: "You hate seeing people hurt — even if they messed up.", trait: "F" },
  { text: "You like debates — not drama.", trait: "T" },
  { text: "You feel things deeply, even if you don’t show it.", trait: "F" },

  // Judging vs Perceiving
  { text: "You love structure — calendars, lists, plans.", trait: "J" },
  { text: "You’re chill about plans — vibes decide the night.", trait: "P" },
  { text: "You like things settled and handled early.", trait: "J" },
  { text: "You work best under pressure — deadlines make you move.", trait: "P" },
  { text: "You get a rush from spontaneous adventures.", trait: "P" },
  { text: "You feel better when your space (and life) is organized.", trait: "J" },

  // Repeat with alternate energy (for balance)
  { text: "You can talk to literally anyone — strangers, cashiers, whoever.", trait: "E" },
  { text: "Alone time isn’t lonely — it’s peace.", trait: "I" },
  { text: "You’d rather experience life than overthink it.", trait: "S" },
  { text: "You get random creative downloads that actually hit.", trait: "N" },
  { text: "You think feelings are valid, but facts are louder.", trait: "T" },
  { text: "Empathy’s your superpower — you just get people.", trait: "F" },
  { text: "You like closing tabs — in your browser *and* in life.", trait: "J" },
  { text: "You like to keep your options open till the last minute.", trait: "P" },

  { text: "You’re the one starting convos in awkward silence.", trait: "E" },
  { text: "You’d rather people-watch than be the center of attention.", trait: "I" },
  { text: "You love hands-on projects — seeing things come to life.", trait: "S" },
  { text: "You’re always connecting random dots no one else sees.", trait: "N" },
  { text: "You’d rather fix the problem than talk about it.", trait: "T" },
  { text: "You go out of your way to make people feel included.", trait: "F" },
  { text: "You prefer plans over surprises.", trait: "J" },
  { text: "You feel boxed in by too many rules.", trait: "P" },
];

// Helper function — Calculate MBTI result
const calculateResult = (answers: string[]) => {
  const traits = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
  answers.forEach((t) => (traits[t as keyof typeof traits] += 1));

  const type =
    (traits.E >= traits.I ? "E" : "I") +
    (traits.S >= traits.N ? "S" : "N") +
    (traits.T >= traits.F ? "T" : "F") +
    (traits.J >= traits.P ? "J" : "P");

  return type;
};

export default function MBTIQuiz() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<string | null>(null);

  const handleAnswer = (trait: string) => {
    const updated = [...answers, trait];
    if (current + 1 === questions.length) {
      const final = calculateResult(updated);
      setResult(final);
    } else {
      setCurrent(current + 1);
    }
    setAnswers(updated);
  };

  return (
    <div className="flex flex-col items-center justify-center text-center px-6 py-12 max-w-2xl mx-auto">
      <AnimatePresence mode="wait">
        {!result ? (
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-8">
              Question {current + 1} of {questions.length}
            </h2>
            <p className="text-lg mb-10 text-gray-200">{questions[current].text}</p>
            <div className="flex flex-col gap-4">
              <button
                onClick={() => handleAnswer(questions[current].trait)}
                className="bg-purple-600 hover:bg-purple-700 transition rounded-full py-3 px-6 text-white font-semibold shadow-md"
              >
                That’s me 💯
              </button>
              <button
                onClick={() =>
                  handleAnswer(
                    questions[current].trait === "E"
                      ? "I"
                      : questions[current].trait === "I"
                      ? "E"
                      : questions[current].trait === "S"
                      ? "N"
                      : questions[current].trait === "N"
                      ? "S"
                      : questions[current].trait === "T"
                      ? "F"
                      : questions[current].trait === "F"
                      ? "T"
                      : questions[current].trait === "J"
                      ? "P"
                      : "J"
                  )
                }
                className="bg-gray-700 hover:bg-gray-600 transition rounded-full py-3 px-6 text-white font-semibold shadow-md"
              >
                Nah, not really 😅
              </button>
            </div>
          </motion.div>
        ) : (
          <ResultsScreen type={result} />
        )}
      </AnimatePresence>
    </div>
  );
}
