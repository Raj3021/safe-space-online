import { useState } from "react";
import { X, ChevronRight, ChevronLeft, Shield, AlertTriangle, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";

const questions = [
  {
    question: "Do you accept follow requests from people you don't know?",
    options: [
      { text: "Always - I like having many followers", score: 3 },
      { text: "Sometimes - If their profile looks legit", score: 2 },
      { text: "Rarely - Only mutual connections", score: 1 },
      { text: "Never - My account is strictly private", score: 0 },
    ],
  },
  {
    question: "How often do you share your location on social media?",
    options: [
      { text: "Frequently - I tag locations in real-time", score: 3 },
      { text: "Sometimes - After I've left a place", score: 2 },
      { text: "Rarely - Only special occasions", score: 1 },
      { text: "Never - I keep location data private", score: 0 },
    ],
  },
  {
    question: "Do you respond to DMs from unknown accounts?",
    options: [
      { text: "Yes - I chat with anyone who messages me", score: 3 },
      { text: "Sometimes - If the message seems genuine", score: 2 },
      { text: "Rarely - Only if they're verified", score: 1 },
      { text: "Never - I ignore or delete them", score: 0 },
    ],
  },
  {
    question: "How much personal information is visible on your profile?",
    options: [
      { text: "Everything - Full bio, workplace, contact", score: 3 },
      { text: "Moderate - Name, city, interests", score: 2 },
      { text: "Limited - Just a nickname and bio", score: 1 },
      { text: "Minimal - Private account, no real info", score: 0 },
    ],
  },
  {
    question: "When did you last review your followers list?",
    options: [
      { text: "Never - I don't track my followers", score: 3 },
      { text: "Over a year ago", score: 2 },
      { text: "Within the last few months", score: 1 },
      { text: "Regularly - I audit monthly", score: 0 },
    ],
  },
];

interface RiskQuizProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RiskQuiz = ({ isOpen, onClose }: RiskQuizProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const goBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setAnswers(answers.slice(0, -1));
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
  };

  const totalScore = answers.reduce((a, b) => a + b, 0);
  const maxScore = questions.length * 3;
  const riskPercentage = (totalScore / maxScore) * 100;

  const getRiskLevel = () => {
    if (riskPercentage <= 25) return { level: "Low", color: "text-green-500", bg: "bg-green-500/10", icon: CheckCircle };
    if (riskPercentage <= 50) return { level: "Moderate", color: "text-secondary", bg: "bg-secondary/10", icon: Shield };
    if (riskPercentage <= 75) return { level: "High", color: "text-orange-500", bg: "bg-orange-500/10", icon: AlertTriangle };
    return { level: "Critical", color: "text-destructive", bg: "bg-destructive/10", icon: AlertTriangle };
  };

  if (!isOpen) return null;

  const riskInfo = getRiskLevel();
  const RiskIcon = riskInfo.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-card rounded-2xl shadow-2xl overflow-hidden animate-scale-in">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h2 className="text-lg font-semibold text-foreground">Risk Assessment Quiz</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Progress */}
        {!showResults && (
          <div className="px-4 pt-4">
            <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
              <span>Question {currentQuestion + 1} of {questions.length}</span>
              <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
            </div>
            <Progress value={((currentQuestion + 1) / questions.length) * 100} className="h-2" />
          </div>
        )}

        {/* Content */}
        <div className="p-6">
          {showResults ? (
            <div className="text-center">
              <div className={`inline-flex p-4 rounded-full ${riskInfo.bg} mb-4`}>
                <RiskIcon className={`h-12 w-12 ${riskInfo.color}`} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Your Risk Level: <span className={riskInfo.color}>{riskInfo.level}</span>
              </h3>
              <p className="text-muted-foreground mb-6">
                You scored {totalScore} out of {maxScore} points.
                {riskPercentage > 50
                  ? " Consider reviewing our protection guide to improve your digital safety."
                  : " You're doing well, but there's always room to improve!"}
              </p>
              <div className="flex gap-3 justify-center">
                <Button variant="outline" onClick={resetQuiz}>
                  Retake Quiz
                </Button>
                <Button onClick={onClose} className="bg-primary text-primary-foreground">
                  View Protection Guide
                </Button>
              </div>
            </div>
          ) : (
            <>
              <h3 className="text-xl font-semibold text-foreground mb-6">
                {questions[currentQuestion].question}
              </h3>
              <div className="space-y-3">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option.score)}
                    className="w-full p-4 text-left rounded-xl border border-border bg-background hover:border-primary hover:bg-primary/5 transition-all duration-200 group"
                  >
                    <span className="text-foreground group-hover:text-primary transition-colors">
                      {option.text}
                    </span>
                  </button>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Footer Navigation */}
        {!showResults && currentQuestion > 0 && (
          <div className="px-6 pb-6">
            <Button variant="ghost" onClick={goBack} className="text-muted-foreground">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Previous
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
