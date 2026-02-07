"use client";

import { SimulationType } from "@/enums/simulation";
import { Question, BaseQuestion } from "@/types/questions";
import { useState } from "react";
import { ConfirmSimulationStart } from "./ConfirmSimulationStart";
import { Simulation } from "./Simulation";
import { questions } from '../../data/questions/index';
import { clearQuestionResults } from "@/services/simulation";

interface Props {
  type: SimulationType;
  sectionId?: number;
  questions: Question[];
}

export const SimulationContainer = ({ type, questions }: Props) => {

  clearQuestionResults();

  const [isSimulationActive, setSimulationActive] = useState(false);

  return (
    <section className="flex h-dvh items-center justify-center flex-col">
      {!isSimulationActive ? (
        <ConfirmSimulationStart
          type={type}
          setSimulationActive={setSimulationActive}
        />
      ) : (
        <Simulation
          type={type}
          questions={questions}
        />
      )}
    </section>
  );
};
