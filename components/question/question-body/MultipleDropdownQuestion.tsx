'use client';

import { MultipleDropdownQuestion as MultipleDropdownQuestionType, QuestionAnswer } from "@/types/questions";
import { QuestionBody } from "./QuestionBody";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Field, FieldContent, FieldLabel, FieldTitle } from "@/components/ui/field";
import { NextQuestionButton } from "../NextQuestionButton";
import { useState } from "react";
import { QuestionType } from "@/enums/questions";
import { saveQuestionResult } from "@/services/simulation";

interface Props {
  question: MultipleDropdownQuestionType;
  moveToNextQuestion: () => void;
}

export const MultipleDropdownQuestion = ({ question, moveToNextQuestion }: Props) => {

  const [selectedOption, setSelectedOption] = useState<MultipleDropdownQuestionType['answer']>([]);
  
  function saveQuestionAnswer(value: string[]) {
    const questionResult: QuestionAnswer = {
      questionId: question.id,
      selectedOption: value,
      questionType: QuestionType.MULTIPLE_DROPDOWN
    };
    saveQuestionResult(questionResult);
    moveToNextQuestion();
  }

  const { options } = question;

  return (
    <div className="p-4">

      <QuestionBody
        body={question.body}
      />
      
      <div className="grid grid-cols-2 gap-4 mb-4">

        {
          options.map((option, index) => (
              <Select key={`select-${index}`}
                onValueChange={(v) => {
                  const newOptions = [...selectedOption];
                  newOptions[index] = v;
                  setSelectedOption(newOptions);
                }}

              >
                <SelectTrigger className="w-full p-8 text-foreground">
                  <SelectValue placeholder="Opciones" className="font-text text-foreground"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Opciones</SelectLabel>
                    {
                      Object.entries(option).map(([key, value]) => (
                        <SelectItem key={`select-${index}-item-${key}`} value={key}>
                          <Field>
                            <FieldContent>
                              <FieldTitle className="font-text">
                                <p className="font-text">{value}</p>  
                              </FieldTitle>  
                            </FieldContent>
                          </Field>
                        </SelectItem>
                      ))
                    }
                    
                  </SelectGroup>
                </SelectContent>
              </Select>
          ))
        }

      </div>
        
      <FieldLabel className="w-full justify-end">
          <NextQuestionButton
            selectedOption={selectedOption}
            onClick={() => saveQuestionAnswer(selectedOption)}
          />
        </FieldLabel>
    </div>
  )
}
