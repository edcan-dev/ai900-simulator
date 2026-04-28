import { MultipleStatementQuestion as MultipleStatementQuestionType, QuestionAnswer  } from "@/types/questions";
import { QuestionBody } from "./QuestionBody";
import { FieldLabel } from "@/components/ui/field";
import { NextQuestionButton } from "../NextQuestionButton";
import { useState } from "react";
import { QuestionType } from "@/enums/questions";
import { saveQuestionResult } from "@/services/simulation";

interface Props {
  question: MultipleStatementQuestionType;
  moveToNextQuestion: () => void;
}

export const MultipleStatementQuestion = ({ question, moveToNextQuestion }: Props) => {
  
  const [selectedOption, setSelectedOption] = useState<MultipleStatementQuestionType['answer']>({});

  function saveQuestionAnswer(value: string[] | { [key: string]: boolean }) {
      const questionResult: QuestionAnswer = {
        questionId: question.id,
        selectedOption: value,
        questionType: QuestionType.MULTIPLE_STATEMENT
      };
      saveQuestionResult(questionResult);
      moveToNextQuestion();
  }
  
  return (
    <div className='p-4'>

      <QuestionBody
        body={question.body}
      />

      <div className="grid grid-cols-6 gap-4 mb-4">

        <div className="col-start-1 col-end-5 font-bold">
          Enunciado
        </div>

        <div className="text-center font-bold">
          Si
        </div>
        <div className="text-center font-bold">
          No
        </div>

      </div>

        {
          Object.entries(question.options).map(([optionIndex, value], index) => (
            <div className="grid grid-cols-6 gap-4 mb-4" key={index}>

              <div key={`statement-${index}`} className="col-start-1 col-end-5">
                <p className="font-text">{value}</p>
              </div>
              <div className="flex justify-center items-center">
                <input type="radio" className="scale-150" name={`statement-${index}`} value="yes" 
                  onClick={(ev) => {{
                    setSelectedOption((prev) => ({
                      ...prev,
                      [optionIndex]: true
                    }));
                  }}}
                />
              </div>
              <div className="flex justify-center items-center">
                <input type="radio" className="scale-150" name={`statement-${index}`} value="no" 
                  onClick={(ev) => {{
                    setSelectedOption((prev) => ({
                      ...prev,
                      [optionIndex]: false
                    }));
                  }}}
                />
              </div>
            </div>
          ))
        }
      
      <FieldLabel className="w-full justify-end">
        <NextQuestionButton
          selectedOption={selectedOption}
          onClick={() => saveQuestionAnswer(selectedOption)}
        />
      </FieldLabel>

    </div>
  )
}
