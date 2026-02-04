import { Header } from "@/components/shared/Header";
import { SimulationContainer } from "@/components/simulation/SimulationContainer";
import { SimulationType } from "@/enums/simulation";
import { getQuestions, getQuestionsBySection } from "@/services/questions";

export default async function SimulationPage(
  { searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }
) {

  const type = (await searchParams).type as SimulationType | SimulationType.FULL;
  const sectionId = (await searchParams).sectionId ? parseInt((await searchParams).section as string) : undefined;

  console.log(type)
  console.log(sectionId)

  const questions = type === SimulationType.FULL
      ? await getQuestions() // Load all questions for FULL simulation
      : await getQuestionsBySection(sectionId || 0);

  return (
    <>
      <Header />
      <main>
        <SimulationContainer
          type={type}
          sectionId={sectionId}
          questions={questions}
        />
      </main>
    </>
  );
}