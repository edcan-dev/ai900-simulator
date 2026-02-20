'use client'
import { QuestionType } from '@/enums/questions';
import { MultipleDropdownQuestion as MultipleDropdownQuestionType, Question, UniqueSelectionQuestion as UniqueSelectionQuestionType } from '../../types/questions/index';
import { UniqueSelectionQuestion } from './question-body/UniqueSelectionQuestion';
import { MultipleDropdownQuestion } from './question-body/MultipleDropdownQuestionBody';

interface Props {
  question: Question;
  moveToNextQuestion: () => void;
}

export const QuestionContainer = ({ question, moveToNextQuestion }: Props) => {
  console.log(question)
  return (
    <>

      <div className='flex justify-between bg-gradient-primary-to-accent text-foreground-secondary p-4 rounded-t-lg'>
        <h2>{question.title}</h2>
        <h3>Sección {question.section_id}</h3>
      </div>
      {
        question.type === QuestionType.UNIQUE_SELECTION && (
          <UniqueSelectionQuestion
            question={question as UniqueSelectionQuestionType} 
            moveToNextQuestion={moveToNextQuestion}
          />
        )
      }
      {
        question.type === QuestionType.MULTIPLE_DROPDOWN && (
          <MultipleDropdownQuestion
            question={question as MultipleDropdownQuestionType} 
            moveToNextQuestion={moveToNextQuestion}
          />
        )
      }
    </>
  )
}
