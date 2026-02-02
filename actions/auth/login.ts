'use server';

import { redirect } from "next/dist/client/components/navigation";
import { cookies } from "next/headers";

export async function loginAction(formData: FormData) {

  const cookiesInstance = await cookies();

  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  // NOTE: For dev purposes only.
  if (username !== process.env.LOGIN_USERNAME || password !== process.env.LOGIN_PASSWORD) {
    redirect("/auth/login");
  }
  
  cookiesInstance.set("access_token", "EXAMPLE_TOKEN", {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24
  });

  redirect("/dashboard");
}