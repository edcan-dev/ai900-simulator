import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Iniciar Sesión",
  description: "Por favor ingresa tus credenciales para iniciar sesión.",
};

export default async function LoginPage() {

  return (
    <main>

      <section className="bg-sky-200 flex h-dvh items-center justify-center">
        <h1 className="font-bold font-title text-center p-8">Por favor, inicia sesión</h1>
      </section>
    </main>
  );
}