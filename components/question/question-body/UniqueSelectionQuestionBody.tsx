'use client';

import { Button } from "@/components/ui/button";
import { Field, FieldContent, FieldDescription, FieldLabel, FieldTitle } from "@/components/ui/field";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Question, UniqueSelectionQuestion } from "@/types/questions";
import { useState } from "react";

interface Props {
  question: UniqueSelectionQuestion;
  moveToNextQuestion: () => void;
}

export const UniqueSelectionQuestionBody = ({ question, moveToNextQuestion }: Props) => {

  const { body, options } = question;
  const [isOptionSelected, setOptionSelected] = useState(false);

  function validateAnswer() {
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
          setOptionSelected(!!v);
      }}>
        {
          Object.entries(options).map(([key, value]) => (
          <FieldLabel htmlFor={`${key}-option`} key={key} className="cursor-pointer">
            <Field orientation="horizontal">
              <FieldContent>
                <FieldTitle
                  className="font-text"
                >{key}: {value}</FieldTitle>  
              </FieldContent>
              <RadioGroupItem hidden value={key} id={`${key}-option`} />
            </Field>
          </FieldLabel>
        ))}
      </RadioGroup>

      <FieldLabel className="w-full justify-end">
        <Button
          size={'lg'}
          disabled={!isOptionSelected}
          className={`bg-gradient-primary-to-accent text-foreground-secondary font-text py-6 transition-all ${
            isOptionSelected ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'
          }`}
          onClick={(v) => {
            validateAnswer();
          }}
        >
          Siguente
        </Button>
      </FieldLabel>

    </div>
  )
}
