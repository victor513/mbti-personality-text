"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function IntroScreen({ onStart }: { onStart: () => void }) {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowButton(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen text-center bg-gradient-to-b from-purple-900 via-black to-black text-white overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      {/* Floating text animation */}
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        What's My Vibe?
      </motion.h1>

      <motion.p
        className="text-lg md:text-2xl text-gray-300 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        ✨ Loading your energy... aligning your aura...
      </motion.p>

      {showButton && (
        <motion.button
          onClick={onStart}
          className="px-8 py-4 bg-gradient-to-r from-fuchsia-600 to-purple-700 rounded-xl font-semibold hover:scale-105 transition-all shadow-lg"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Let’s find your vibe 💫
        </motion.button>
      )}

      {/* floating background orbs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-1/3 left-1/4 w-80 h-80 bg-purple-700/30 blur-[120px] rounded-full"
          animate={{ y: [0, -40, 0], opacity: [0.4, 0.6, 0.4] }}
          transition={{ repeat: Infinity, duration: 6 }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-pink-600/30 blur-[100px] rounded-full"
          animate={{ y: [0, 40, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ repeat: Infinity, duration: 5 }}
        />
      </div>
    </motion.div>
  );
}
