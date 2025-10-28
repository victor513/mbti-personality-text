"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function VibeSound() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

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
    <div className="fixed bottom-6 right-6 z-50">
      <audio ref={audioRef} src="/vibe-sound.mp3" preload="auto" />
      <motion.button
        onClick={toggleAudio}
        className={`px-4 py-2 rounded-full text-sm font-semibold transition-all backdrop-blur-md border ${
          isPlaying
            ? "bg-purple-600/60 border-purple-400 text-white"
            : "bg-gray-800/40 border-gray-600 text-gray-300"
        }`}
        whileTap={{ scale: 0.95 }}
      >
        {isPlaying ? "Pause 🔇" : "Play Vibe 🔊"}
      </motion.button>
    </div>
  );
}
