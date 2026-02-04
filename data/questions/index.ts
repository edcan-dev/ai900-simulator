import { Question } from "@/types/questions";
import questionsData from "./questions.json";
import { UniqueSelectionQuestion } from '../../types/questions/index';

export const questions = (questionsData as Question[]).map((question) => {
  if(question.type === 'UNIQUE_SELECTION') {

    const uniqueSelectionQuestion = question as UniqueSelectionQuestion;
    console.log(uniqueSelectionQuestion);
    return uniqueSelectionQuestion;

  }

});