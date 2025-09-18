import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import SplashScreen from "./SplashScreen";
import InstructionsScreen from "./InstructionsScreen";
import QuizScreen from "./QuizScreen";
import FactCardScreen from "./FactCardScreen";
import HealerModeScreen from "./HealerModeScreen";
import ResultScreen from "./ResultScreen";
import { GameState } from "@/types";
import { questions, factCards, ailments, dishes } from "@/data/gameData";
import Confetti from "react-confetti";

const Game: React.FC = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const { toast } = useToast();
  const { t } = useLanguage();

  const [gameState, setGameState] = useState<GameState>({
    currentScreen: "splash",
    currentQuestionIndex: 0,
    score: 0,
    correctAnswers: 0,
    factsRead: 0,
    timeBonus: 0,
    healerModeCompleted: false,
  });

  const [currentAilment, setCurrentAilment] = useState(ailments[0]);
  const [availableDishes, setAvailableDishes] = useState(dishes);

  // Reset game state
  const resetGame = () => {
    setGameState({
      currentScreen: "instructions",
      currentQuestionIndex: 0,
      score: 0,
      correctAnswers: 0,
      factsRead: 0,
      timeBonus: 0,
      healerModeCompleted: false,
    });
  };

  // Start the game from splash
  const startGame = () => {
    setGameState((prev) => ({ ...prev, currentScreen: "instructions" }));
  };

  // Start quiz after instructions
  const startQuiz = () => {
    setGameState((prev) => ({ ...prev, currentScreen: "quiz" }));
  };

  // Handle quiz answer
  const handleQuizAnswer = (isCorrect: boolean) => {
    setGameState((prev) => ({
      ...prev,
      score: prev.score + (isCorrect ? 10 : 0),
      correctAnswers: prev.correctAnswers + (isCorrect ? 1 : 0),
      currentScreen: "factCard",
    }));

    if (isCorrect) {
      toast({
        title: t("quiz.goodAnswer"),
        description: `+10 ${t("quiz.points")}`,
      });
      // 🎉 confettis pour bonne réponse
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 2500);
    } else {
      toast({
        title: t("quiz.wrongAnswer"),
        description: t("quiz.tryAgain"),
        variant: "destructive",
      });
    }
  };

  // Handle fact card continuation
  const handleFactContinue = () => {
    const nextQuestionIndex = gameState.currentQuestionIndex + 1;

    if (nextQuestionIndex < questions.length) {
      setGameState((prev) => ({
        ...prev,
        currentQuestionIndex: nextQuestionIndex,
        currentScreen: "quiz",
        factsRead: prev.factsRead + 1,
      }));
    } else if (!gameState.healerModeCompleted) {
      // Move to healer mode
      const randomAilmentIndex = Math.floor(Math.random() * ailments.length);
      setCurrentAilment(ailments[randomAilmentIndex]);
      setGameState((prev) => ({
        ...prev,
        currentScreen: "healerMode",
        factsRead: prev.factsRead + 1,
      }));
    } else {
      // End → results
      setGameState((prev) => ({
        ...prev,
        currentScreen: "results",
        factsRead: prev.factsRead + 1,
      }));
    }
  };

  // Handle healer mode
  const handleHealerSelection = (isCorrect: boolean, selectedDish: any) => {
    const healerBonus = isCorrect ? 20 : 0;

    setGameState((prev) => ({
      ...prev,
      score: prev.score + healerBonus,
      currentScreen: "results",
      healerModeCompleted: true,
    }));

    if (isCorrect) {
      toast({
        title: t("healer.wellDone"),
        description: `${selectedDish.name} ${t("healer.effective")} ${currentAilment.name}!`,
      });
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 2500);
    } else {
      toast({
        title: t("quiz.wrongAnswer"),
        description: `${selectedDish.name} ${t("healer.notBest")} ${currentAilment.name}.`,
        variant: "destructive",
      });
    }
  };

  // Handle share
  const handleShare = () => {
    toast({
      title: t("results.share"),
      description: t("results.shareToast"),
    });
  };

  // Screens
  const renderScreen = () => {
    switch (gameState.currentScreen) {
      case "splash":
        return <SplashScreen onStart={startGame} />;
      case "instructions":
        return <InstructionsScreen onStart={startQuiz} />;
      case "quiz":
        return (
          <QuizScreen
            question={questions[gameState.currentQuestionIndex]}
            onAnswer={handleQuizAnswer}
          />
        );
      case "factCard":
        return (
          <FactCardScreen
            factCard={factCards[gameState.currentQuestionIndex]}
            onContinue={handleFactContinue}
          />
        );
      case "healerMode":
        return (
          <HealerModeScreen
            ailment={currentAilment}
            dishes={availableDishes}
            onSelection={handleHealerSelection}
          />
        );
      case "results":
        return (
          <ResultScreen
            score={gameState.score}
            correctAnswers={gameState.correctAnswers}
            totalQuestions={questions.length}
            factsRead={gameState.factsRead}
            timeBonus={gameState.timeBonus}
            onReplay={resetGame}
            onShare={handleShare}
          />
        );
      default:
        return <SplashScreen onStart={startGame} />;
    }
  };

  return (
    <div className="min-h-screen w-full overflow-hidden relative">
      {renderScreen()}

      {/* 🎉 confettis avec palette africaine */}
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={200}
          recycle={false}
          gravity={0.25}
          colors={["#D4AF37", "#E2725B", "#2E5339"]} // Or, terracotta, vert foncé
        />
      )}
    </div>
  );
};

export default Game;
