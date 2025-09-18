// src/components/ResultScreen.tsx
import React, { useEffect, useRef, useState } from "react";
import html2canvas from "html2canvas";
import { BADGES } from "../data/badges";
import {
  getUnlockedBadges,
  markFirstQuizDone,
  checkAndUnlockBadges,
} from "@/state/badges";

type ResultScreenProps = {
  score: number;
  correctAnswers: number;
  totalQuestions: number;
  factsRead: number;
  timeBonus: number;
  onReplay?: () => void;
  onShare?: () => void;
};

const ResultScreen: React.FC<ResultScreenProps> = ({
  score,
  correctAnswers,
  totalQuestions,
  factsRead,
  timeBonus,
  onReplay,
  onShare,
}) => {
  const cardRef = useRef<HTMLDivElement>(null); // ✅ bien défini ici

  const [alreadyUnlocked, setAlreadyUnlocked] = useState<string[]>([]);
  const [newlyUnlocked, setNewlyUnlocked] = useState<string[]>([]);

  useEffect(() => {
    setAlreadyUnlocked(getUnlockedBadges());

    markFirstQuizDone();
    const newOnes = checkAndUnlockBadges();
    if (newOnes.length) setNewlyUnlocked(newOnes);
  }, []);

  const handleShare = async () => {
    if (!cardRef.current) return;

    const canvas = await html2canvas(cardRef.current, {
      backgroundColor: "#ffffff",
      scale: 2,
    });
    const dataUrl = canvas.toDataURL("image/png");

    if (navigator.canShare && navigator.canShare({ files: [] as any })) {
      const res = await fetch(dataUrl);
      const blob = await res.blob();
      const file = new File([blob], "culinafrica_result.png", {
        type: "image/png",
      });
      await (navigator as any).share({
        files: [file],
        title: "CulinAfrica",
        text: "Mon badge débloqué !",
      });
    } else {
      const a = document.createElement("a");
      a.href = dataUrl;
      a.download = "culinafrica_result.png";
      a.click();
    }

    if (onShare) onShare();
  };

  const allToShow = Array.from(new Set([...alreadyUnlocked, ...newlyUnlocked]));

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div
        ref={cardRef}
        className="bg-white rounded-xl shadow-lg p-6 w-full max-w-sm text-center"
      >
        <h2 className="text-red-500 font-bold mb-2">Score</h2>
        <div className="text-5xl font-bold text-brown-700 mb-2">{score}</div>
        <p className="mb-4">Tu es un·e Maître Guérisseur !</p>

        <div className="space-y-1 text-left mx-auto max-w-[260px]">
          <div className="flex justify-between">
            <span>Réponses correctes:</span>
            <span className="font-semibold">
              {correctAnswers}/{totalQuestions}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Fiches informatives lues:</span>
            <span className="font-semibold">{factsRead}</span>
          </div>
          <div className="flex justify-between">
            <span>Bonus de temps:</span>
            <span className="font-semibold">+{timeBonus}</span>
          </div>
        </div>

        {allToShow.length > 0 && (
          <div className="mt-6">
            <h3 className="font-semibold mb-2">🎖 Badges</h3>
            <div className="flex justify-center gap-3 flex-wrap">
              {BADGES.filter((b) => allToShow.includes(b.id)).map((b) => (
                <div key={b.id} className="flex flex-col items-center">
                  <img
                    src={b.icon}
                    alt={b.title}
                    className="w-12 h-12"
                    onError={(e) =>
                      ((e.currentTarget as HTMLImageElement).src =
                        "/placeholder.svg")
                    }
                  />
                  <span className="text-xs mt-1">{b.title}</span>
                </div>
              ))}
            </div>

            {newlyUnlocked.length > 0 && (
              <p className="text-xs text-green-600 mt-2">
                Nouveaux : {newlyUnlocked.join(", ")}
              </p>
            )}
          </div>
        )}

        <div className="mt-6 flex flex-col gap-3">
          <button
            className="bg-orange-500 text-white px-4 py-2 rounded-xl"
            onClick={onReplay}
          >
            Rejouer
          </button>
          <button
            className="bg-orange-500 text-white px-4 py-2 rounded-xl"
            onClick={handleShare}
          >
            Partager
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultScreen;
