'use client'

import { SimulationType } from "@/enums/simulation";
import { Button } from "../ui/button";

interface Props {
  type: SimulationType;
  setSimulationActive: (started: boolean) => void;
}

export const ConfirmSimulationStart = ({ type, setSimulationActive: setSimulationStarted }: Props) => {
  return (
    <div className="w-full max-w-200 grid grid-cols-1 gap-12 bg-secondary animate-fade-in">
      <h1 className="font-bold font-title text-center mb-8">
        {type === SimulationType.FULL
          ? "Simulación completa"
          : type === SimulationType.SECTIONED
            ? "Simulación por secciones"
            : "Simulación"}
      </h1>
      <Button
        onClick={() => setSimulationStarted(true)}
        className="bg-gradient-primary-to-accent text-foreground-secondary py-8 rounded-lg cursor-pointer w-full"
      >
        <p className="font-subtitle font-bold">Comenzar simulación</p>
      </Button>
    </div>
  );
};
