import { BaseQuestion, MultipleDropdownQuestion, MultipleStatementQuestion } from "@/types/questions";
import questionsData from "./questions.json";
import { UniqueSelectionQuestion } from '../../types/questions/index';

export const questions = (questionsData as BaseQuestion[]).map((question) => {
  if(question.type === 'UNIQUE_SELECTION') {

    const uniqueSelectionQuestion = question as UniqueSelectionQuestion;
    return uniqueSelectionQuestion;

  }

  if(question.type === 'MULTIPLE_DROPDOWN') {

    const multipleDropdownQuestion = question as MultipleDropdownQuestion;
    return multipleDropdownQuestion;
  }

  if(question.type === 'MULTIPLE_STATEMENT') {
    const multipleStatementQuestion = question as MultipleStatementQuestion;
    return multipleStatementQuestion;
  }
  
});