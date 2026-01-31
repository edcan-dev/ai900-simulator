import { Header } from "@/components/shared/Header"
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DashboardPage() {
  return (
  
    
    <main>
      <section className="flex h-dvh items-center justify-center flex-col">

        <h1 className="font-bold font-title text-center mb-16">Hola, Yesenia! ¿Qué quieres hacer?</h1>

        <div className="w-full max-w-200 grid grid-cols-2 gap-8"
        >

          <Button
            className="bg-accent text-foreground-secondary py-16 rounded-lg"
          >
            <p className="font-subtitle font-bold">Comenzar simulación</p>
          </Button>
          <Button
            className="bg-accent text-foreground-secondary py-16 rounded-lg"
          >
            <p className="font-subtitle font-bold">Consultar últimos resultados</p>
          </Button>
        </div>

      </section>
    </main>
  );
}