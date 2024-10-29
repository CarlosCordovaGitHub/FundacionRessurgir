import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Progress } from './ui/progress';

const PsychologicalTest = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      text: "¿Con qué frecuencia te sientes ansioso/a en situaciones sociales?",
      options: [
        "Nunca",
        "Raramente",
        "Ocasionalmente",
        "Frecuentemente",
        "Siempre"
      ]
    },
    {
      text: "¿Cómo manejas situaciones de estrés?",
      options: [
        "Me bloqueo completamente",
        "Me cuesta pero lo intento",
        "Lo manejo adecuadamente",
        "Lo manejo bien",
        "Lo manejo excelentemente"
      ]
    },
    {
      text: "¿Te resulta fácil tomar decisiones?",
      options: [
        "Muy difícil",
        "Difícil",
        "Neutral",
        "Fácil",
        "Muy fácil"
      ]
    }
  ];

  const handleAnswer = (optionIndex) => {
    const newAnswers = [...answers, optionIndex];
    setAnswers(newAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateResults = () => {
    const total = answers.reduce((sum, answer) => sum + answer, 0);
    const average = total / answers.length;
    
    if (average < 1.5) return "Nivel de adaptación bajo";
    if (average < 3) return "Nivel de adaptación medio";
    return "Nivel de adaptación alto";
  };

  const restart = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <Card>
        <CardHeader className="text-2xl font-sans font-bold text-center text-primary">
          Test Psicológico
        </CardHeader>
        <CardContent>
          {!showResults ? (
            <div className="space-y-6">
              <Progress value={progress} className="w-full" />
              <div className="text-lg font-sans font-medium mt-4">
                {questions[currentQuestion].text}
              </div>
              <div className="space-y-2">
                {questions[currentQuestion].options.map((option, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full text-left justify-start h-auto py-3 hover:bg-primary hover:text-white transition-colors"
                    onClick={() => handleAnswer(index)}
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="text-xl font-sans font-medium text-center text-primary">
                Resultados del Test
              </div>
              <div className="p-4 bg-gray-100 rounded-lg">
                <p className="text-lg font-sans">{calculateResults()}</p>
              </div>
              <Button 
                className="w-full bg-secondary hover:bg-secondary/80"
                onClick={restart}
              >
                Realizar el test nuevamente
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default PsychologicalTest;