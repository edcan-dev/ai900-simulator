'use client';

import { Field, FieldContent, FieldLabel, FieldTitle } from "@/components/ui/field";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { saveQuestionResult } from "@/services/simulation";
import { QuestionAnswer, UniqueSelectionQuestion as UniqueSelectionQuestionType } from "@/types/questions";
import { useState } from "react";
import { QuestionBody } from "./QuestionBody";
import { NextQuestionButton } from "../NextQuestionButton";
import { QuestionType } from "@/enums/questions";

interface Props {
  question: UniqueSelectionQuestionType;
  moveToNextQuestion: () => void;
}

export const UniqueSelectionQuestion = ({ question, moveToNextQuestion }: Props) => {

  const { body, options } = question;
  const [selectedOption, setSelectedOption] = useState<UniqueSelectionQuestionType['answer']>('');

  function saveQuestionAnswer(value: string) {
    const questionResult: QuestionAnswer = {
      questionId: question.id,
      selectedOption: value,
      questionType: QuestionType.UNIQUE_SELECTION
    };
    saveQuestionResult(questionResult);
    moveToNextQuestion();
  }

  return (
    <div className="p-4">
      
      <QuestionBody
        body={body}
      />

      <RadioGroup
        className="mb-4 gap-4"
        onValueChange={(v) => {
          setSelectedOption(v);
        }}
        value={selectedOption}
      >
        {
          Object.entries(options).map(([key, value]) => (
          <FieldLabel htmlFor={`${key}-option`} key={key} className="cursor-pointer">
            <Field>
              <FieldContent>
                <FieldTitle
                  className="font-text"
                >

                  <p className="font-text">{key}: {value}</p>  
                </FieldTitle>  
              </FieldContent>
              <RadioGroupItem hidden value={key} id={`${key}-option`} />
            </Field>
          </FieldLabel>
        ))}

        <FieldLabel className="w-full justify-end">
          <NextQuestionButton
            selectedOption={selectedOption}
            onClick={() => saveQuestionAnswer(selectedOption)}
          />
        </FieldLabel>
      </RadioGroup>

    </div>
  )
}
