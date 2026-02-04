"use client";

import { SimulationType } from "@/enums/simulation";
import { AnyQuestion, Question } from "@/types/questions";
import { useState } from "react";
import { ConfirmSimulationStart } from "./ConfirmSimulationStart";

interface Props {
  type: SimulationType;
  sectionId?: number;
  questions: AnyQuestion[];
}

export const SimulationContainer = ({ type, questions }: Props) => {
  const [isSimulationStarted, setSimulationStarted] = useState(false);

  return (
    <section className="flex h-dvh items-center justify-center flex-col animate-fade-in">
      {!isSimulationStarted ? (
        <ConfirmSimulationStart
          type={type}
          setSimulationStarted={setSimulationStarted}
        />
      ) : (
        <div className="w-full max-w-200 grid grid-cols-1 gap-12 shadow-lg p-8 rounded-lg">
          Simulación {type} en progreso...
        </div>
      )}
    </section>
  );
};
