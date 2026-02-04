'use client';

import Link from "next/link";
import { Button } from "../ui/button";
import { useState } from "react";
import { SimulationType } from "@/enums/simulation";

export const SelectSimulationType = () => {

  const [simulationType, setSimulationType] = useState<SimulationType>(SimulationType.FULL);

  return (
    <section className="flex h-dvh items-center justify-center flex-col animate-fade-in">
        <h1 className="font-bold font-title text-center mb-16">Elige el tipo de simulación</h1>
        <div className="w-full max-w-200 grid grid-cols-1 gap-12"
        >
          <Link href="/simulation?type=FULL">
              <Button className="bg-gradient-primary-to-accent text-foreground-secondary py-8 rounded-lg cursor-pointer w-full">
              <p className="font-subtitle font-bold">Simulación completa</p>
            </Button>
          </Link>

          <Button 
            onClick={() => setSimulationType(SimulationType.SECTIONED)}
            className="bg-gradient-primary-to-accent text-foreground-secondary py-8 rounded-lg cursor-pointer w-full"
          >
            <p className="font-subtitle font-bold">Simulación por secciones</p>
          </Button>

          {
            simulationType === SimulationType.SECTIONED && (
              <div className="animate-fade-in grid grid-cols-2 gap-8">
                <Link href="/simulation?type=SECTIONED&section=1" >
                  <Button className="max-w-200 outline-2 outline-solid outline-primary py-4 rounded-lg cursor-pointer w-full bg-secondary hover:bg-secondary">
                    <p className="font-subtitle text-primary">Sección 1</p>
                  </Button>
                </Link>
                <Link href="/simulation?type=SECTIONED&section=2">
                  <Button className="max-w-200 outline-2 outline-solid outline-primary py-4 rounded-lg cursor-pointer w-full bg-secondary hover:bg-secondary">
                    <p className="font-subtitle text-primary">Sección 2</p>
                  </Button>
                </Link>
                <Link href="/simulation?type=SECTIONED&section=3">
                  <Button className="max-w-200 outline-2 outline-solid outline-primary py-4 rounded-lg cursor-pointer w-full bg-secondary hover:bg-secondary">
                    <p className="font-subtitle text-primary">Sección 3</p>
                  </Button>
                </Link>
                <Link href="/simulation?type=SECTIONED&section=4">
                  <Button className="max-w-200 outline-2 outline-solid outline-primary py-4 rounded-lg cursor-pointer w-full bg-secondary hover:bg-secondary">
                    <p className="font-subtitle text-primary">Sección 4</p>
                  </Button>
                </Link>
              </div>
              
            )
          }

        </div>
      </section>
  )
}
