'use client';

import { Button } from "@/components/ui/button";
import { Field, FieldContent, FieldDescription, FieldLabel, FieldTitle } from "@/components/ui/field";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { saveQuestionResult } from "@/services/simulation";
import { Question, QuestionAnswer, UniqueSelectionQuestion } from "@/types/questions";
import { useState } from "react";

interface Props {
  question: UniqueSelectionQuestion;
  moveToNextQuestion: () => void;
}

export const UniqueSelectionQuestionBody = ({ question, moveToNextQuestion }: Props) => {

  const { body, options, answer } = question;
  const [selectedOption, setSelectedOption] = useState<string>('');

  function validateAnswer(value: string) {
    const questionResult: QuestionAnswer = {
      questionId: question.id,
      selectedOption: value
    };
    saveQuestionResult(questionResult);
    moveToNextQuestion();
  }

  return (
    <div className="p-4">
      {body.map((paragraph, index) => (
        <p key={index} className="mb-4 font-text">{paragraph}</p>
      ))}

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
          <Button
            type="submit"
            size={'lg'}
            disabled={!selectedOption}
            className={`bg-gradient-primary-to-accent text-foreground-secondary font-text py-6 transition-all ${
            selectedOption ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'
            }`}
            onClick={() => {
              validateAnswer(selectedOption)
            }}
          >
          Siguente
          </Button>
        </FieldLabel>
      </RadioGroup>

    </div>
  )
}
