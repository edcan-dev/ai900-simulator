import { Question } from '@/types/questions';

const { questions } = await import('@/data/questions');

export async function getQuestions() {
  return questions ? questions as Question[] : [];
}

export async function getQuestionsBySection(sectionId: number) {
  return [] as Question[];
}