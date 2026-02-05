import { BaseQuestion } from "@/types/questions";
import questionsData from "./questions.json";
import { UniqueSelectionQuestion } from '../../types/questions/index';

export const questions = (questionsData as BaseQuestion[]).map((question) => {
  if(question.type === 'UNIQUE_SELECTION') {

    const uniqueSelectionQuestion = question as UniqueSelectionQuestion;
    return uniqueSelectionQuestion;

  }

});