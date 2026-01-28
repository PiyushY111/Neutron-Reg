"use client";

import { useState, useEffect, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap, Terminal } from "lucide-react";
import type { FormData } from "@/app/page";

interface TerminalForm2Props {
  formData: FormData;
  onFormDataChange: (formData: FormData) => void;
  onSubmit: () => void;
  onBack: () => void;
  isSubmitting?: boolean;
}

interface Message {
  type: "system" | "user" | "error" | "success" | "info" | "prompt" | "list";
  text: string;
}

const preFestDepartments = [
  { id: "sponsorship-partnerships", name: "Sponsorship" },
  { id: "outreach-community", name: "Outreach" },
  { id: "design-creative", name: "Design" },
  { id: "tech-digital", name: "Tech" },
  { id: "decor-experience", name: "Decor" },
  { id: "competitions-management", name: "Competitions" },
  { id: "events-programming", name: "Events" },
  { id: "marketing-promotion", name: "Marketing" },
  { id: "exhibition-workshops", name: "Exhibitions & Workshops" },
  { id: "vendor-management", name: "Vendor Management" },
  { id: "logistics-planning", name: "Logistics" },
];

const festDayDepartments = [
  { id: "competitions", name: "Competitions" },
  { id: "logistics", name: "Logistics" },
  { id: "events", name: "Events" },
  { id: "hospitality", name: "Hospitality" },
  { id: "transportation", name: "Transportation" },
  { id: "marketing", name: "Marketing" },
  { id: "qrt", name: "QRT" },
  { id: "regdesk", name: "Registration Desk" },
  { id: "vendor-management", name: "Vendor Management" },
];

type FormStage = "prefest1" | "prefest2" | "festday" | "motivation" | "worksample" | "complete";

export default function TerminalForm2({
  formData,
  onFormDataChange,
  onSubmit,
  onBack,
  isSubmitting = false,
}: TerminalForm2Props) {
  const [stage, setStage] = useState<FormStage>("prefest1");
  const [messages, setMessages] = useState<Message[]>([
    { type: "system", text: "$ cd ~/departments" },
    { type: "system", text: "$ ./select_preferences.sh" },
    { type: "system", text: "" },
    { type: "info", text: "Loading department selection module..." },
    { type: "system", text: "" },
    { type: "system", text: "Welcome back! Now let's configure your department preferences." },
    { type: "system", text: "" },
    { type: "info", text: "Process: Pre-fest (2 max) → Fest-day (1) → Motivation → Submit" },
    { type: "system", text: "" },
  ]);
  const [currentInput, setCurrentInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    inputRef.current?.focus();
  }, [stage]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (messages.length === 9) {
        showPreFest1Question();
      }
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const showPreFest1Question = () => {
    setMessages((prev) => [
      ...prev,
      { type: "prompt", text: "[Pre-Fest Department 1/2]" },
      { type: "system", text: "> Select your first pre-fest department preference" },
      { type: "info", text: "Type 'list' to see all options, or enter department number (1-11)" },
    ]);
  };

  const showDepartmentsList = (type: "prefest" | "festday") => {
    const departments = type === "prefest" ? preFestDepartments : festDayDepartments;
    const listMessages: Message[] = [
      { type: "system", text: "" },
      { type: "list", text: "Available departments:" },
      { type: "system", text: "" },
    ];

    departments.forEach((dept, idx) => {
      listMessages.push({
        type: "list",
        text: `  ${(idx + 1).toString().padStart(2, " ")}. ${dept.name}`,
      });
    });

    listMessages.push({ type: "system", text: "" });
    setMessages((prev) => [...prev, ...listMessages]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentInput.trim() || isTyping) return;

    const input = currentInput.trim().toLowerCase();

    if (input === "list") {
      setMessages((prev) => [...prev, { type: "user", text: `$ ${currentInput}` }]);
      if (stage === "prefest1" || stage === "prefest2") {
        showDepartmentsList("prefest");
      } else if (stage === "festday") {
        showDepartmentsList("festday");
      }
      setCurrentInput("");
      return;
    }

    if (stage === "prefest1") {
      handlePreFest1(input);
    } else if (stage === "prefest2") {
      handlePreFest2(input);
    } else if (stage === "festday") {
      handleFestDay(input);
    } else if (stage === "motivation") {
      handleMotivation();
    } else if (stage === "worksample") {
      handleWorkSample();
    }
  };

  const handlePreFest1 = (input: string) => {
    const num = parseInt(input);
    if (isNaN(num) || num < 1 || num > preFestDepartments.length) {
      setMessages((prev) => [
        ...prev,
        { type: "user", text: `$ ${currentInput}` },
        { type: "error", text: `✗ Error: Invalid selection. Please enter 1-${preFestDepartments.length} or 'list'` },
        { type: "system", text: "> Select your first pre-fest department preference" },
      ]);
      setCurrentInput("");
      return;
    }

    const selected = preFestDepartments[num - 1];
    const updatedFormData = {
      ...formData,
      preFestDepartments: [selected.id],
    };
    onFormDataChange(updatedFormData);

    const dots = ".".repeat(Math.max(0, 35 - selected.name.length));
    setMessages((prev) => [
      ...prev,
      { type: "user", text: `$ ${currentInput}` },
      { type: "success", text: `[SAVED] Pre-fest preference 1 ${dots} ${selected.name}` },
      { type: "system", text: "" },
    ]);

    setCurrentInput("");
    setIsTyping(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { type: "prompt", text: "[Pre-Fest Department 2/2] (Optional)" },
        { type: "system", text: "> Select second preference, or type 'skip' to continue" },
        { type: "info", text: "Type 'list' to see options, number (1-11), or 'skip'" },
      ]);
      setStage("prefest2");
      setIsTyping(false);
    }, 600);
  };

  const handlePreFest2 = (input: string) => {
    if (input === "skip") {
      setMessages((prev) => [
        ...prev,
        { type: "user", text: `$ ${currentInput}` },
        { type: "info", text: "→ Skipped second preference" },
        { type: "system", text: "" },
      ]);
      setCurrentInput("");
      setIsTyping(true);
      setTimeout(() => {
        showFestDayQuestion();
      }, 600);
      return;
    }

    const num = parseInt(input);
    if (isNaN(num) || num < 1 || num > preFestDepartments.length) {
      setMessages((prev) => [
        ...prev,
        { type: "user", text: `$ ${currentInput}` },
        { type: "error", text: `✗ Error: Invalid selection. Enter 1-${preFestDepartments.length}, or 'skip'` },
        { type: "system", text: "> Select second preference, or type 'skip' to continue" },
      ]);
      setCurrentInput("");
      return;
    }

    const selected = preFestDepartments[num - 1];
    
    if (selected.id === formData.preFestDepartments[0]) {
      setMessages((prev) => [
        ...prev,
        { type: "user", text: `$ ${currentInput}` },
        { type: "error", text: "✗ Error: Cannot select the same department twice" },
        { type: "system", text: "> Select second preference, or type 'skip' to continue" },
      ]);
      setCurrentInput("");
      return;
    }

    const updatedFormData = {
      ...formData,
      preFestDepartments: [...formData.preFestDepartments, selected.id],
    };
    onFormDataChange(updatedFormData);

    const dots = ".".repeat(Math.max(0, 35 - selected.name.length));
    setMessages((prev) => [
      ...prev,
      { type: "user", text: `$ ${currentInput}` },
      { type: "success", text: `[SAVED] Pre-fest preference 2 ${dots} ${selected.name}` },
      { type: "system", text: "" },
    ]);

    setCurrentInput("");
    setIsTyping(true);

    setTimeout(() => {
      showFestDayQuestion();
    }, 600);
  };

  const showFestDayQuestion = () => {
    setMessages((prev) => [
      ...prev,
      { type: "prompt", text: "[Fest-Day Department]" },
      { type: "system", text: "> Select your fest-day department (required)" },
      { type: "info", text: "Type 'list' to see all options, or enter department number (1-9)" },
    ]);
    setStage("festday");
    setIsTyping(false);
  };

  const handleFestDay = (input: string) => {
    const num = parseInt(input);
    if (isNaN(num) || num < 1 || num > festDayDepartments.length) {
      setMessages((prev) => [
        ...prev,
        { type: "user", text: `$ ${currentInput}` },
        { type: "error", text: `✗ Error: Invalid selection. Please enter 1-${festDayDepartments.length} or 'list'` },
        { type: "system", text: "> Select your fest-day department (required)" },
      ]);
      setCurrentInput("");
      return;
    }

    const selected = festDayDepartments[num - 1];
    const updatedFormData = {
      ...formData,
      festDayDepartment: selected.id,
    };
    onFormDataChange(updatedFormData);

    const dots = ".".repeat(Math.max(0, 35 - selected.name.length));
    setMessages((prev) => [
      ...prev,
      { type: "user", text: `$ ${currentInput}` },
      { type: "success", text: `[SAVED] Fest-day department ${dots} ${selected.name}` },
      { type: "system", text: "" },
    ]);

    setCurrentInput("");
    setIsTyping(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { type: "system", text: "→ Department selection complete" },
        { type: "system", text: "" },
        { type: "prompt", text: "[Motivation Statement]" },
        { type: "system", text: "> Why do you want to join Neutron3.0?" },
        { type: "info", text: "Type your answer below and press Enter when done" },
      ]);
      setStage("motivation");
      setIsTyping(false);
    }, 600);
  };

  const handleMotivation = () => {
    if (!currentInput.trim()) {
      setMessages((prev) => [
        ...prev,
        { type: "user", text: `$ ${currentInput}` },
        { type: "error", text: "✗ Error: Motivation statement is required" },
        { type: "system", text: "> Why do you want to join Neutron3.0?" },
      ]);
      setCurrentInput("");
      return;
    }

    const updatedFormData = {
      ...formData,
      motivation: currentInput,
    };
    onFormDataChange(updatedFormData);

    setMessages((prev) => [
      ...prev,
      { type: "user", text: `$ ${currentInput}` },
      { type: "success", text: "[SAVED] Motivation statement ........... ✓" },
      { type: "system", text: "" },
    ]);

    setCurrentInput("");
    setIsTyping(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { type: "prompt", text: "[Work Samples] (Optional)" },
        { type: "system", text: "> Share portfolio links, projects, or experience" },
        { type: "info", text: "Type your answer or 'skip' to continue" },
      ]);
      setStage("worksample");
      setIsTyping(false);
    }, 600);
  };

  const handleWorkSample = () => {
    if (currentInput.trim().toLowerCase() === "skip") {
      setMessages((prev) => [
        ...prev,
        { type: "user", text: `$ ${currentInput}` },
        { type: "info", text: "→ Skipped work samples" },
        { type: "system", text: "" },
      ]);
    } else {
      const updatedFormData = {
        ...formData,
        workSample: currentInput,
      };
      onFormDataChange(updatedFormData);

      setMessages((prev) => [
        ...prev,
        { type: "user", text: `$ ${currentInput}` },
        { type: "success", text: "[SAVED] Work samples ................... ✓" },
        { type: "system", text: "" },
      ]);
    }

    setCurrentInput("");
    setIsTyping(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { type: "system", text: "→ Processing registration data..." },
        { type: "system", text: "→ Validating department selections..." },
        { type: "system", text: "→ Checking eligibility criteria..." },
        { type: "system", text: "" },
        { type: "success", text: "[RESULT] Department validation ........ PASSED" },
        { type: "success", text: "[RESULT] Profile completeness ......... OK" },
        { type: "success", text: "[RESULT] All requirements met ......... VERIFIED" },
        { type: "system", text: "" },
        { type: "system", text: "Registration package ready for submission." },
        { type: "system", text: "" },
        { type: "info", text: "Review your selections below and click Submit when ready." },
        { type: "system", text: "" },
      ]);
      setStage("complete");
      setIsTyping(false);
    }, 600);
  };

  const isComplete = stage === "complete";

  return (
    <section className="relative bg-black min-h-[100svh] flex flex-col">
      {/* Neutron Background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black" />
        <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:56px_56px]" />
        <div className="absolute -top-28 left-1/2 h-72 w-[90vw] sm:w-[46rem] max-w-[46rem] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-[-7rem] right-[-7rem] h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute inset-0 neutron-scanlines" />
        <div className="absolute inset-0 neutron-noise" />
      </div>

      {/* Terminal Header */}
      <div className="relative border-b border-cyan-500/20 bg-black/80 backdrop-blur-xl neutron-panel">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500 shadow-lg shadow-red-500/50" />
                <div className="h-3 w-3 rounded-full bg-yellow-500 shadow-lg shadow-yellow-500/50" />
                <div className="h-3 w-3 rounded-full bg-green-500 shadow-lg shadow-green-500/50" />
              </div>
              <div className="flex items-center gap-2.5">
                <Terminal className="h-4 w-4 text-cyan-400" />
                <span className="font-mono text-sm text-cyan-400">
                  departments@selection:~
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge className="border-cyan-500/20 bg-cyan-500/10 text-cyan-200 hover:bg-cyan-500/10 font-mono text-xs">
                STEP 4/4
              </Badge>
              <Badge className="border-white/10 bg-white/5 text-white/80 hover:bg-white/5 font-mono text-xs">
                {formData.preFestDepartments.length}/2 + {formData.festDayDepartment ? "1/1" : "0/1"}
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Terminal Body */}
      <div className="relative flex-1 overflow-hidden">
        <div className="mx-auto h-full max-w-6xl px-6 py-8">
          <div className="neutron-panel neutron-hud h-full rounded-3xl border border-white/10 bg-black/40 p-8 font-mono text-sm backdrop-blur-xl">
            <div className="flex h-full flex-col">
              {/* Messages */}
              <div className="flex-1 overflow-y-auto space-y-1 pb-6">
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={
                      msg.type === "system"
                        ? "text-white/90"
                        : msg.type === "user"
                        ? "text-cyan-400 font-semibold"
                        : msg.type === "error"
                        ? "text-red-400 font-semibold"
                        : msg.type === "success"
                        ? "text-white/90"
                        : msg.type === "info"
                        ? "text-white/70"
                        : msg.type === "list"
                        ? "text-white/80 font-mono"
                        : "text-white/90"
                    }
                  >
                    {msg.text}
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Line or Summary */}
              {!isComplete ? (
                <form onSubmit={handleSubmit} className="flex items-start gap-3 border-t border-white/10 pt-4">
                  <span className="text-cyan-400 mt-0.5">$</span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={currentInput}
                    onChange={(e) => setCurrentInput(e.target.value)}
                    disabled={isTyping}
                    placeholder={
                      stage === "prefest1" || stage === "prefest2" || stage === "festday"
                        ? "Type 'list' or enter number..."
                        : stage === "motivation"
                        ? "Type your motivation..."
                        : "Type answer or 'skip'..."
                    }
                    className="flex-1 bg-transparent text-cyan-400 placeholder:text-cyan-400/40 outline-none disabled:opacity-50 caret-cyan-400"
                    autoComplete="off"
                  />
                  <span className="animate-pulse text-cyan-400">_</span>
                </form>
              ) : (
                <div className="border-t border-white/10 pt-6">
                  {/* Complete Summary */}
                  <div className="neutron-panel rounded-2xl border border-white/10 bg-black/20 p-6 mb-6 space-y-4">
                    <div className="text-cyan-400 font-semibold text-sm border-b border-white/10 pb-2">
                      Registration Summary
                    </div>
                    
                    {/* Personal Information */}
                    <div className="space-y-2">
                      <div className="text-white/50 text-xs uppercase tracking-wide">Personal Details</div>
                      <div className="space-y-1 text-sm">
                        <div className="flex">
                          <span className="text-white/60 w-32">Name:</span>
                          <span className="text-white/90">{formData.name}</span>
                        </div>
                        <div className="flex">
                          <span className="text-white/60 w-32">Email:</span>
                          <span className="text-cyan-400">{formData.email}</span>
                        </div>
                        <div className="flex">
                          <span className="text-white/60 w-32">Enrollment:</span>
                          <span className="text-white/90">{formData.enrollmentId}</span>
                        </div>
                        <div className="flex">
                          <span className="text-white/60 w-32">Year:</span>
                          <span className="text-white/90">{formData.year}</span>
                        </div>
                        <div className="flex">
                          <span className="text-white/60 w-32">WhatsApp:</span>
                          <span className="text-white/90">{formData.whatsappNumber}</span>
                        </div>
                      </div>
                    </div>

                    {/* Department Preferences */}
                    <div className="space-y-2 pt-2 border-t border-white/10">
                      <div className="text-white/50 text-xs uppercase tracking-wide">Department Preferences</div>
                      <div className="space-y-1 text-sm">
                        <div className="text-white/60">Pre-fest:</div>
                        {formData.preFestDepartments.map((id, idx) => {
                          const dept = preFestDepartments.find((d) => d.id === id);
                          return (
                            <div key={id} className="text-white/90 ml-4">
                              {idx + 1}. {dept?.name}
                            </div>
                          );
                        })}
                        <div className="text-white/60 mt-2">Fest-day:</div>
                        <div className="text-white/90 ml-4">
                          {festDayDepartments.find((d) => d.id === formData.festDayDepartment)?.name}
                        </div>
                      </div>
                    </div>

                    {/* Motivation */}
                    <div className="space-y-2 pt-2 border-t border-white/10">
                      <div className="text-white/50 text-xs uppercase tracking-wide">Motivation</div>
                      <div className="text-white/80 text-sm leading-relaxed max-h-24 overflow-y-auto">
                        {formData.motivation}
                      </div>
                    </div>

                    {/* Work Samples */}
                    {formData.workSample && (
                      <div className="space-y-2 pt-2 border-t border-white/10">
                        <div className="text-white/50 text-xs uppercase tracking-wide">Work Samples</div>
                        <div className="text-white/80 text-sm leading-relaxed max-h-20 overflow-y-auto">
                          {formData.workSample}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <button
                      onClick={onBack}
                      disabled={isSubmitting}
                      className="group flex items-center gap-2 text-white/60 hover:text-white transition-colors font-mono text-sm disabled:opacity-50"
                    >
                      <span className="group-hover:-translate-x-1 transition-transform">←</span>
                      <span>Back</span>
                    </button>
                    <button
                      onClick={onSubmit}
                      disabled={isSubmitting}
                      className="group neutron-panel rounded-2xl border border-cyan-500/30 bg-cyan-500/10 px-8 py-3.5 text-cyan-200 hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all font-mono shadow-lg shadow-cyan-500/10 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <div className="h-4 w-4 border-2 border-cyan-400/40 border-t-transparent rounded-full animate-spin" />
                          <span>Submitting...</span>
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <span>Submit Registration</span>
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Terminal Footer */}
      <div className="relative border-t border-cyan-500/20 bg-black/80 backdrop-blur-xl neutron-panel">
        <div className="mx-auto max-w-6xl px-6 py-3">
          <div className="flex items-center justify-between text-xs font-mono text-cyan-400/70">
            <div>NEUTRON 3.0 REGISTRATION TERMINAL</div>
            <div className="flex items-center gap-6">
              <span>SECURE CONNECTION</span>
              <span className="flex items-center gap-1.5">
                <Zap className="h-3 w-3 animate-pulse text-cyan-400" />
                <span>LIVE</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
