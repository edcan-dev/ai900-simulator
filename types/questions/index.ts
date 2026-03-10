import { QuestionType } from '@/enums/questions';

export type QuestionAnswer = {
  questionId: number;
  selectedOption: string | string[];
  questionType: QuestionType;
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

export type QuestionBodyItem = {
  type: string;
  content: string;
}

export type UniqueSelectionQuestion = BaseQuestion & {
  body:QuestionBodyItem[];
  options: QuestionOptions;
  answer: string;
};

export type MultipleDropdownQuestion = BaseQuestion & {
  body:QuestionBodyItem[];
  options: QuestionOptions[];
  answer: string[];
};

export type QuestionOptions = {
  key: string;
  value: string;
}

export type Question = BaseQuestion | UniqueSelectionQuestion | MultipleDropdownQuestion;