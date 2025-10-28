import "./globals.css";
import BackgroundParticles from "./components/BackgroundParticles";
import { ReactNode } from "react";

export const metadata = {
  title: "What's My Vibe?",
  description: "A modern personality quiz based on MBTI energy types — discover your vibe 🔮",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen bg-black text-white overflow-hidden">
        <BackgroundParticles />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
