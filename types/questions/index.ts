import { QuestionType } from '@/enums/questions';
import { QuestionBody } from '../../components/question/question-body/QuestionBody';

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

export type QuestionBodyItem = {
  type: string;
  content: string;
}

export type UniqueSelectionQuestion = BaseQuestion & {
  body:QuestionBodyItem[];
  options: {
    [key: string]: string;
  };
  answer: string;
};

export type MultipleDropdownQuestion = BaseQuestion & {
  body:QuestionBodyItem[];
  
};

export type Question = BaseQuestion | UniqueSelectionQuestion | MultipleDropdownQuestion;