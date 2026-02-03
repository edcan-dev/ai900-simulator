import { Header } from "@/components/shared/Header";
import { SelectSimulationType } from "@/components/simulation/SelectSimulationType";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function StartSimulationPage() {
  return (
    <>
    <Header />
    <main>
      <SelectSimulationType />
    </main>
    </>
  );
}