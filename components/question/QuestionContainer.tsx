'use client'
import { QuestionType } from '@/enums/questions';
import { Question, UniqueSelectionQuestion } from '../../types/questions/index';
import { UniqueSelectionQuestionBody } from './question-body/UniqueSelectionQuestionBody';

interface Props {
  question: Question;
  moveToNextQuestion: () => void;
}

export const QuestionContainer = ({ question, moveToNextQuestion }: Props) => {
  return (
    <>

      <div className='flex justify-between bg-gradient-primary-to-accent text-foreground-secondary p-4 rounded-t-lg'>
        <h2>{question.title}</h2>
        <h3>Sección {question.section_id}</h3>
      </div>
      {
        question.type === QuestionType.UNIQUE_SELECTION && (
          <UniqueSelectionQuestionBody
            question={question as UniqueSelectionQuestion} 
            moveToNextQuestion={moveToNextQuestion}
          />
        )
      }
      
    </>
  )
}
