"use client";

import Link from "next/link"
import { IoExit, IoHome } from "react-icons/io5"
import { Button } from "../ui/button"
import { logoutAction } from "@/actions/auth/logout"
import { LogoutButton } from "./LogoutButton";

export const Header = () => {
  return (
    <header className="flex w-full p-8 justify-between items-center bg-gradient-primary-to-accent">
      <Link href="/dashboard">
        <IoHome size={50} className="text-foreground-secondary mr-auto"/>
      </Link>
      <LogoutButton />
    </header>
    
  )
}
