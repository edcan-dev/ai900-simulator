'use client';

import Link from "next/link";
import { Button } from "../ui/button";
import { useState } from "react";

export const SelectSimulationType = () => {

  const [simulationType, setSimulationType] = useState<string>('SECTIONED');

  return (
    <section className="flex h-dvh items-center justify-center flex-col">
        <h1 className="font-bold font-title text-center mb-16">Elige el tipo de simulación</h1>
        <div className="w-full max-w-200 grid grid-cols-1 gap-8"
        >
          <Link href="/simulation?type=FULL">
              <Button className="bg-gradient-primary-to-accent text-foreground-secondary py-8 rounded-lg cursor-pointer w-full">
              <p className="font-subtitle font-bold">Simulación completa</p>
            </Button>
          </Link>

          <Button 
            onClick={() => setSimulationType('SECTIONED')}
            className="bg-gradient-primary-to-accent text-foreground-secondary py-8 rounded-lg cursor-pointer w-full"
          >
            <p className="font-subtitle font-bold">Simulación por secciones</p>
          </Button>

          {
            simulationType === 'SECTIONED' && (
              <Link href="/simulation?type=SECTIONED" className="animate-fade-in">
                <Button className="max-w-200 outline-2 outline-solid outline-primary py-8 rounded-lg cursor-pointer w-full bg-secondary hover:bg-secondary">
                  <p className="font-subtitle text-primary">Sección 1</p>
                </Button>
              </Link>
            )
          }

        </div>
      </section>
  )
}
