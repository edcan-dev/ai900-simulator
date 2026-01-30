import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Iniciar Sesión",
  description: "Por favor ingresa tus credenciales para iniciar sesión.",
};

export default async function LoginPage() {

  return (
    <main>

      <section className="flex h-dvh items-center justify-center flex-col">
        <h1 className="font-bold font-title text-center mb-8">Por favor, inicia sesión</h1>

        <div className="w-full max-w-250 p-8 bg-background-secondary text-foreground">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias beatae quo repudiandae veritatis et similique repellendus ipsum sint repellat id. Qui consequatur laudantium molestiae repellat neque aut animi laborum quam!
        </div>
      </section>
    </main>
  );
}