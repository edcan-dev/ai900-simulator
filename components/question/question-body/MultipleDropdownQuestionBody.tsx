import { MultipleDropdownQuestion as MultipleDropdownQuestionType } from "@/types/questions";
import { QuestionBody } from "./QuestionBody";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Field, FieldContent, FieldTitle } from "@/components/ui/field";

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
      
      <div className="grid grid-cols-2 gap-4">

        {
          question.options.map((option, index) => (
              <Select key={`select-${index}`}>
                <SelectTrigger className="w-full p-8">
                  <SelectValue placeholder="Opciones" className="font-text"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Opciones</SelectLabel>
                    {
                      Object.entries(option).map(([key, value]) => (
                        <SelectItem key={`select-${index}-item-${key}`} value={key}>
                          <Field>
                            <FieldContent>
                              <FieldTitle className="font-text">
                                <p className="font-text">{key}: {value}</p>  
                              </FieldTitle>  
                            </FieldContent>
                          </Field>
                        </SelectItem>
                      ))
                    }
                    
                  </SelectGroup>
                </SelectContent>
              </Select>
          ))
        }

      </div>

    </div>
  )
}
