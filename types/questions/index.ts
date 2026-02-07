import { QuestionType } from '@/enums/questions';

export type QuestionAnswer = {
  questionId: number;
  selectedOption: string;
}

export type BaseQuestion = {
  id: number;
  title: string;
  /*
    * snake case since this comes directly from json
  */
  section_id: number;
  type: QuestionType;  
}

export type UniqueSelectionQuestion = BaseQuestion & {
  body: string[];
  options: {
    [key: string]: string;
  };
  answer: string;
};

export type Question = BaseQuestion | UniqueSelectionQuestion;