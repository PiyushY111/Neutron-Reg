"use client";

import { useState, useEffect } from "react";
import IntroSection from "@/components/intro-section";
import CommitteesSection from "@/components/committees-section";
import FormPage1, { FormData } from "@/components/form-page-1";
import FormPage2 from "@/components/form-page-2";
import ThankYouSection from "@/components/thank-you-section";
import FormClosedSection from "@/components/form-closed-section";
import { submitFormToNotion } from "@/lib/api";
import { toast } from "@/hooks/use-toast";

type Step =
  | "intro"
  | "committees"
  | "form-page-1"
  | "form-page-2"
  | "thank-you";

export default function DamruLanding() {
  const [currentStep, setCurrentStep] = useState<Step>("intro");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFormClosed, setIsFormClosed] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    enrollmentId: "",
    year: "",
    whatsappNumber: "",
    preFestDepartments: [],
    festDayDepartment: "",
    motivation: "",
    workSample: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Check if form should be closed (9 PM on August 31, 2025)
  useEffect(() => {
    const checkFormClosure = () => {
      const now = new Date();
      const closingDateTime = new Date(2025, 7, 31, 21, 0, 0); // August 31, 2025, 9:00 PM (month is 0-indexed)
      
      if (now >= closingDateTime) {
        setIsFormClosed(true);
      }
    };

    checkFormClosure();
    // Check every minute to ensure real-time closure
    const interval = setInterval(checkFormClosure, 60000);
    
    return () => clearInterval(interval);
  }, []);

  const validateFormPage1 = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "University email is required";
    } else if (!formData.email.includes("rishihood.edu.in")) {
      newErrors.email = "Please use your Rishihood University email";
    }
    if (!formData.enrollmentId.trim())
      newErrors.enrollmentId = "Enrollment ID is required";
    if (!formData.year.trim()) newErrors.year = "Please select your year";
    if (!formData.whatsappNumber.trim()) {
      newErrors.whatsappNumber = "WhatsApp number is required";
    } else if (!/^\d{10}$/.test(formData.whatsappNumber.replace(/\D/g, ""))) {
      newErrors.whatsappNumber = "Please enter a valid 10-digit phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateFormPage2 = () => {
    const newErrors: Record<string, string> = {};

    if (formData.preFestDepartments.length === 0)
      newErrors.preFestDepartments =
        "Please select at least one pre-fest department (max 2)";
    if (formData.preFestDepartments.length > 2)
      newErrors.preFestDepartments =
        "You can select maximum 2 pre-fest departments";
    if (!formData.festDayDepartment)
      newErrors.festDayDepartment = "Please select a fest day department";
    if (!formData.motivation.trim())
      newErrors.motivation = "Please share why you want to work in Damru Fest";
    if (!formData.workSample.trim())
      newErrors.workSample =
        "Please show us your work - this field is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormPage1Next = () => {
    if (validateFormPage1()) {
      setCurrentStep("form-page-2");
    }
  };

  const handleSubmit = async () => {
    // Check if form is closed before allowing submission
    const now = new Date();
    const closingDateTime = new Date(2025, 7, 31, 21, 0, 0); // August 31, 2025, 9:00 PM
    
    if (now >= closingDateTime) {
      toast({
        title: "Registration Closed",
        description: "Sorry, the registration period has ended.",
        variant: "destructive",
      });
      setIsFormClosed(true);
      return;
    }

    if (validateFormPage2()) {
      setIsSubmitting(true);
      try {
        // Show loading toast
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
          setCurrentStep("thank-you");
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
    }
  };

  const handleRegisterAnother = () => {
    setCurrentStep("intro");
    setIsSubmitting(false);
    setFormData({
      name: "",
      email: "",
      enrollmentId: "",
      year: "",
      whatsappNumber: "",
      preFestDepartments: [],
      festDayDepartment: "",
      motivation: "",
      workSample: "",
    });
    setErrors({});
  };

  return (
    <div className="min-h-screen /font-sans">
      {isFormClosed ? (
        <FormClosedSection closingTime="9:00 PM, August 31, 2025" />
      ) : (
        <>
          {currentStep === "intro" && (
            <IntroSection onNext={() => setCurrentStep("committees")} />
          )}
          {currentStep === "committees" && (
            <CommitteesSection onNext={() => setCurrentStep("form-page-1")} />
          )}
          {currentStep === "form-page-1" && (
            <FormPage1
              formData={formData}
              errors={errors}
              onFormDataChange={setFormData}
              onNext={handleFormPage1Next}
              onBack={() => setCurrentStep("committees")}
            />
          )}
          {currentStep === "form-page-2" && (
            <FormPage2
              formData={formData}
              errors={errors}
              onFormDataChange={setFormData}
              onSubmit={handleSubmit}
              onBack={() => setCurrentStep("form-page-1")}
              isSubmitting={isSubmitting}
            />
          )}
          {currentStep === "thank-you" && (
            <ThankYouSection onRegisterAnother={handleRegisterAnother} />
          )}
        </>
      )}
    </div>
  );
}
