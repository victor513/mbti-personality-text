"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import IntroScreen from "./components/IntroScreen";
import MBTIQuiz from "./components/MBTIQuiz";
import { useEffect, useRef } from "react";

export default function Page() {
  const [started, setStarted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.loop = true;
      audioRef.current.volume = 0.35;
    }
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#1a0b2e] to-[#000] text-white flex flex-col items-center justify-center">
      {/* 🎧 Background Sound */}
      <audio ref={audioRef} src="/vibe-sound.mp3" preload="auto" />

      {/* 🎵 Floating Sound Button */}
      <motion.button
        onClick={toggleAudio}
        className={`fixed bottom-6 right-6 px-4 py-2 rounded-full text-sm font-semibold transition-all backdrop-blur-md border z-50 ${
          isPlaying
            ? "bg-purple-600/60 border-purple-400 text-white"
            : "bg-gray-800/40 border-gray-600 text-gray-300"
        }`}
        whileTap={{ scale: 0.95 }}
      >
        {isPlaying ? "Pause 🔇" : "Play Vibe 🔊"}
      </motion.button>

      {/* 💫 Main Content */}
      <AnimatePresence mode="wait">
        {!started ? (
          <motion.div
            key="intro"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6 }}
          >
            <IntroScreen onStart={() => setStarted(true)} />
          </motion.div>
        ) : (
          <motion.div
            key="quiz"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <MBTIQuiz />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
