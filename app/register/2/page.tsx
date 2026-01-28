"use client";

import FormPage2 from "@/components/form-page-2";
import { useRegistrationFlow } from "@/components/registration-flow-provider";
import { submitFormToNotion } from "@/lib/api";
import { toast } from "@/hooks/use-toast";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage2() {
  const router = useRouter();
  const { formData, setFormData, errors, setErrors, reset } =
    useRegistrationFlow();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateFormPage2 = useCallback(() => {
    const newErrors: Record<string, string> = {};

    if (formData.preFestDepartments.length === 0)
      newErrors.preFestDepartments =
        "Please select at least one pre-fest department (max 2)";
    if (formData.preFestDepartments.length > 2)
      newErrors.preFestDepartments = "You can select maximum 2 pre-fest departments";
    if (!formData.festDayDepartment)
      newErrors.festDayDepartment = "Please select a fest day department";
    if (!formData.motivation.trim())
      newErrors.motivation = "Please share why you want to work in Neutron3.0 Fest";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData, setErrors]);

  const handleSubmit = useCallback(async () => {
    // Check if form is closed before allowing submission
    const now = new Date();
    const closingDateTime = new Date(2026, 3, 27, 23, 59, 59); // April 27, 2026, 11:59 PM

    if (now >= closingDateTime) {
      toast({
        title: "Registration Closed",
        description: "Sorry, the registration period has ended.",
        variant: "destructive",
      });
      return;
    }

    if (!validateFormPage2()) return;

    setIsSubmitting(true);
    try {
      toast({
        title: "Submitting registration...",
        description: "Please wait while we process your application.",
      });

      const result = await submitFormToNotion(formData);

      if (result.success) {
        toast({
          title: "Registration successful! 🎉",
          description: result.message,
        });
        reset();
        router.push("/thank-you");
      } else {
        toast({
          title: "Submission failed",
          description: result.error || "Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        title: "Submission failed",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, router, reset, validateFormPage2]);

  return (
    <FormPage2
      formData={formData}
      errors={errors}
      onFormDataChange={setFormData}
      onSubmit={handleSubmit}
      onBack={() => router.push("/register/1")}
      isSubmitting={isSubmitting}
    />
  );
}

