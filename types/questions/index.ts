import { QuestionType } from '@/enums/questions';

export type Question = {
  id: number;
  title: string;
  section_id: number;
  type: QuestionType;  
}

export type UniqueSelectionQuestion = Question & {
  options: string[];
  answer: string;
};

export type AnyQuestion = Question | UniqueSelectionQuestion;