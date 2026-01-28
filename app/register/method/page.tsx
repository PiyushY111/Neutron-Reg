"use client";

import RegistrationMethodSection from "@/components/registration-method-section";
import { useRouter } from "next/navigation";

export default function RegistrationMethodPage() {
  const router = useRouter();
  return (
    <RegistrationMethodSection
      onWebsite={() => router.push("/register/1")}
      onBack={() => router.push("/committees")}
    />
  );
}

