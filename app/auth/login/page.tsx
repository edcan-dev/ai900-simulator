import { Button } from "@/components/ui/button";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Metadata } from "next";
import { loginAction } from '@/actions/auth/login';
import { logoutAction } from "@/actions/auth/logout";

export const metadata: Metadata = {
  title: "Iniciar Sesión",
  description: "Por favor ingresa tus credenciales para iniciar sesión.",
};

export default async function LoginPage() {

  return (
    <main>

      <section className="flex h-dvh items-center justify-center flex-col">
        <h1 className="font-bold font-title text-center mb-8">Por favor, inicia sesión</h1>

        <form
          className="w-full max-w-150 p-8 bg-gradient-primary-to-accent text-foreground rounded-lg"
          action={loginAction}
        >
          <Field className="mb-8">
            <FieldLabel htmlFor="input-field-username" className="text-foreground-secondary font-bold">Usuario</FieldLabel>
            <Input
              id="input-field-username"
              name="username"
              type="text"
              placeholder="Ingresa tu usuario"
              required
              className="bg-secondary text-foreground-primary"
            />
            <FieldDescription className="text-foreground-secondary">Este campo es obligatorio.</FieldDescription>
          </Field>
          <Field className="mb-8">
            <FieldLabel htmlFor="input-field-password" className="text-foreground-secondary font-bold">Contraseña</FieldLabel>
            <Input
              id="input-field-password"
              name="password"
              type="password"
              placeholder="Ingresa tu contraseña"
              required
              className="bg-secondary"
            />
            <FieldDescription className="text-foreground-secondary">Este campo es obligatorio.</FieldDescription>
          </Field>
          <Field>
            <Button
              type="submit"
              variant="secondary"
            >
              Entrar
            </Button>
          </Field>
        </form>
      </section>
    </main>
  );
}