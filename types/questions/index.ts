import { QuestionType } from '@/enums/questions';

export type BaseQuestion = {
  id: number;
  title: string;
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