import { QuestionAnswer } from "@/types/questions";


export function saveQuestionResult(questionResult: QuestionAnswer) {

  if (typeof window === 'undefined') return;

  let questionResults: QuestionAnswer[] = getQuestionResults();

  questionResults.push(questionResult);
  localStorage.setItem('questionResults', JSON.stringify(questionResults));

}

export function getQuestionResults(): QuestionAnswer[] {

  if (typeof window === 'undefined') return [];

  const storedResults = localStorage.getItem('questionResults');
  return storedResults ? JSON.parse(storedResults) : [];
}

export function clearQuestionResults() {
  if (typeof window === 'undefined') return;  
  localStorage.removeItem('questionResults');
}