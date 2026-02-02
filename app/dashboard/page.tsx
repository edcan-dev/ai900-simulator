import { Header } from "@/components/shared/Header"
import { Button } from "@/components/ui/button";
import { getUserByCookiesUsername } from "@/services/users";
import { redirect } from 'next/navigation'
import Link from "next/link";

export default async function DashboardPage() {
  
  const user = await getUserByCookiesUsername();

  if (!user) {
    redirect("/auth/login");
  }

  return (
    <>
    <Header />
    <main>
      <section className="flex h-dvh items-center justify-center flex-col">

        <h1 className="font-bold font-title text-center mb-16">¡Hola, {user.firstName}! ¿Qué quieres hacer?</h1>

        <div className="w-full max-w-200 grid grid-cols-2 gap-8"
        >
          <Link href="/start-simulation">
            <Button className="bg-gradient-primary-to-accent text-foreground-secondary py-16 rounded-lg">
              <p className="font-subtitle font-bold">Comenzar simulación</p>
            </Button>
          </Link>    
          <Link href="/results-history">
            <Button className="bg-gradient-primary-to-accent text-foreground-secondary py-16 rounded-lg">
              <p className="font-subtitle font-bold">Consultar últimos resultados</p>
            </Button>      
          </Link>
        </div>

      </section>
    </main>
    </>
  );
}