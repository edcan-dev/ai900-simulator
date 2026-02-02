'use server';

import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function logoutAction() {

  const cookiesInstance = await cookies();

  cookiesInstance.delete("access_token");

  redirect("/auth/login");
}