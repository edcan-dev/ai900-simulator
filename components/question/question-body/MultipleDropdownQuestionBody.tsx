import { MultipleDropdownQuestion as MultipleDropdownQuestionType } from "@/types/questions";
import { QuestionBody } from "./QuestionBody";

interface Props {
  question: MultipleDropdownQuestionType;
  moveToNextQuestion: () => void;
}

export const MultipleDropdownQuestion = ({ question, moveToNextQuestion }: Props) => {
  return (
    <div className="p-4">

      <QuestionBody
        body={question.body}
      />
      
    </div>
  )
}
