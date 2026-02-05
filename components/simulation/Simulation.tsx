'use client'

import { QuestionType } from "@/enums/questions";
import { SimulationType } from "@/enums/simulation";
import { Question } from "@/types/questions";
import { useEffect, useState } from "react";
import { questions } from '../../data/questions/index';
import { QuestionContainer } from "../question/QuestionContainer";

interface Props {
  type: SimulationType;
  questions: Question[];
}

export const Simulation = ({ type, questions }: Props) => {

  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(1);

  const currentQuestion = questions[currentQuestionNumber - 1];
  
  return (
    <div key={currentQuestionNumber} className="w-full max-w-200 shadow-lg rounded-lg  animate-fade-in">
      {
        <QuestionContainer 
          question={currentQuestion}
          moveToNextQuestion={() => setCurrentQuestionNumber(c => c + 1)}
        />
      }
    </div>
  );
};
