import React, { useState, useEffect } from 'react';
import { Question } from '@/types';
import { useLanguage } from '@/contexts/LanguageContext';
import { incrementHerbal, incrementAnemia } from '../state/badges';

interface QuizScreenProps {
  question: Question;
  onAnswer: (isCorrect: boolean) => void;
  timeLimit?: number;
}

const QuizScreen: React.FC<QuizScreenProps> = ({
  question,
  onAnswer,
  timeLimit = 15,
}) => {
  const { t } = useLanguage();

  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<boolean | null>(null);
  const [timeLeft, setTimeLeft] = useState(timeLimit);
  const [timerActive, setTimerActive] = useState(true);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (timerActive && timeLeft > 0) {
      timer = setTimeout(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && timerActive) {
      setTimerActive(false);
      handleAnswer('');
    }

    return () => clearTimeout(timer);
  }, [timeLeft, timerActive]);

  useEffect(() => {
    // Reset state when question changes
    setSelectedOption(null);
    setFeedback(null);
    setTimeLeft(timeLimit);
    setTimerActive(true);
  }, [question, timeLimit]);

  const handleAnswer = (option: string) => {
    if (selectedOption !== null) return; // Prevent multiple selections

    setTimerActive(false);
    setSelectedOption(option);

    const isCorrect = option === question.correctAnswer;
    setFeedback(isCorrect);

    //  Compter la progression des badges sur bonne réponse (selon les tags de la question)
    if (isCorrect && Array.isArray(question.tags)) {
      if (question.tags.includes('herbal')) incrementHerbal(1);
      if (question.tags.includes('anemie')) incrementAnemia(1);
    }

    // Small delay before notifying parent
    setTimeout(() => {
      onAnswer(isCorrect);
    }, 1500);
  };

  const getOptionClass = (option: string) => {
    if (selectedOption === null) return 'quiz-option';
    if (option === question.correctAnswer) return 'quiz-option correct';
    if (option === selectedOption && option !== question.correctAnswer) return 'quiz-option incorrect';
    return 'quiz-option';
  };

  return (
    <div className="african-pattern-bg min-h-screen flex flex-col items-center justify-center p-6">
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full animate-fade-in">
        <div className="flex justify-between items-center mb-4">
          <div className="text-sm text-gray-500">
            {t('quiz.question')} {question.id}
          </div>
          <div className={`font-bold ${timeLeft < 5 ? 'text-red-500' : 'text-africa-earth'}`}>
            {timeLeft}s
          </div>
        </div>

        {question.image && (
          <div className="mb-6 flex justify-center">
            <img
              src={question.image}
              alt="Question"
              className="w-full max-w-xs rounded-lg shadow-md"
            />
          </div>
        )}

        <h2 className="text-xl font-semibold mb-6 text-center">
          {question.text}
        </h2>

        <div className="space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              className={getOptionClass(option)}
              onClick={() => handleAnswer(option)}
              disabled={selectedOption !== null}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizScreen;
