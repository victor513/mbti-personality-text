import "./globals.css";
import BackgroundParticles from "./components/BackgroundParticles";

export const metadata = {
  title: "What's My Vibe? 🔮 Personality Quiz",
  description:
    "Find out your real vibe with this personality test — are you chill, deep, chaotic, or visionary?",
  metadataBase: new URL("https://mbti-personality-text-ly5rkcw4b-vics-projects-3f1d9524.vercel.app"),
  openGraph: {
    title: "What's My Vibe? 🔮",
    description:
      "Find out your real vibe — are you chill, deep, chaotic, or visionary?",
    url: "https://mbti-personality-text-ly5rkcw4b-vics-projects-3f1d9524.vercel.app",
    siteName: "What's My Vibe?",
    images: [
      {
        url: "/preview.png", // Put your screenshot in the /public folder as preview.png
        width: 1200,
        height: 630,
        alt: "What's My Vibe Personality Quiz",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "What's My Vibe? 🔮",
    description: "Find out your real vibe — chill, deep, chaotic, or visionary?",
    images: ["/preview.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen bg-black text-white">
        <BackgroundParticles />
        {children}
      </body>
    </html>
  );
}
