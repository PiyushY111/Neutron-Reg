"use client";

import { useState, useEffect, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Terminal, ArrowRight, Zap, User, Mail, Hash, Calendar, Phone } from "lucide-react";
import type { FormData } from "@/app/page";

interface TerminalFormProps {
  formData: FormData;
  onFormDataChange: (formData: FormData) => void;
  onNext: () => void;
  onBack: () => void;
}

interface Message {
  type: "system" | "user" | "error" | "success" | "info" | "prompt";
  text: string;
}

const questions = [
  {
    id: "name",
    question: "What is your full name?",
    placeholder: "Enter your complete name",
    label: "Full Name",
    icon: User,
    validate: (value: string) => {
      if (!value.trim()) return "Name is required";
      return null;
    },
  },
  {
    id: "email",
    question: "What is your Rishihood University email?",
    placeholder: "your.name@rishihood.edu.in",
    label: "University Email",
    icon: Mail,
    validate: (value: string) => {
      if (!value.trim()) return "University email is required";
      if (!value.includes("rishihood.edu.in")) return "Please use your Rishihood University email";
      return null;
    },
  },
  {
    id: "enrollmentId",
    question: "What is your enrollment ID?",
    placeholder: "Enter your enrollment ID",
    label: "Enrollment ID",
    icon: Hash,
    validate: (value: string) => {
      if (!value.trim()) return "Enrollment ID is required";
      return null;
    },
  },
  {
    id: "year",
    question: "Which year are you in?",
    placeholder: "1 / 2 / 3 / 4",
    label: "Academic Year",
    icon: Calendar,
    validate: (value: string) => {
      if (!value.trim()) return "Year is required";
      if (!["1", "2", "3", "4"].includes(value.trim())) return "Please enter 1, 2, 3, or 4";
      return null;
    },
  },
  {
    id: "whatsappNumber",
    question: "What is your WhatsApp number?",
    placeholder: "10-digit mobile number",
    label: "WhatsApp Number",
    icon: Phone,
    validate: (value: string) => {
      if (!value.trim()) return "WhatsApp number is required";
      if (!/^\d{10}$/.test(value.replace(/\D/g, ""))) return "Please enter a valid 10-digit phone number";
      return null;
    },
  },
];

export default function TerminalForm({
  formData,
  onFormDataChange,
  onNext,
  onBack,
}: TerminalFormProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [messages, setMessages] = useState<Message[]>([
    { type: "system", text: "$ ssh registration@neutron3.tech" },
    { type: "system", text: "Connection established." },
    { type: "system", text: "" },
    { type: "info", text: "Last login: Tue Jan 28 09:15:42 2026 from 192.168.1.1" },
    { type: "system", text: "" },
    { type: "system", text: "Welcome to Neutron 3.0 Registration System" },
    { type: "info", text: "System load: 0.42      Users: 127      Uptime: 3 days" },
    { type: "system", text: "" },
    { type: "system", text: "→ Loading member profile..." },
    { type: "system", text: "→ Verifying registration eligibility..." },
    { type: "system", text: "→ Initializing secure form module..." },
    { type: "system", text: "" },
    { type: "success", text: "→ ~/registration [] main ✓" },
    { type: "system", text: "" },
    { type: "system", text: "We'll collect your basic information for the registration process." },
    { type: "system", text: "Please provide accurate details as they will be used for verification." },
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
  }, [currentQuestionIndex]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (messages.length === 17) {
        const firstQuestion = questions[0];
        const Icon = firstQuestion.icon;
        setMessages((prev) => [
          ...prev,
          { type: "prompt", text: `[Question ${1}/${questions.length}] ${firstQuestion.label}` },
          { type: "system", text: `> ${firstQuestion.question}` },
        ]);
      }
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentInput.trim() || isTyping) return;

    const currentQuestion = questions[currentQuestionIndex];
    const error = currentQuestion.validate(currentInput);

    if (error) {
      setMessages((prev) => [
        ...prev,
        { type: "user", text: `$ ${currentInput}` },
        { type: "error", text: `✗ Error: ${error}` },
        { type: "system", text: `> ${currentQuestion.question}` },
      ]);
      setCurrentInput("");
      return;
    }

    const updatedFormData = {
      ...formData,
      [currentQuestion.id]: currentInput,
    };
    onFormDataChange(updatedFormData);

    const dots = ".".repeat(Math.max(0, 35 - currentQuestion.label.length));
    setMessages((prev) => [
      ...prev,
      { type: "user", text: `$ ${currentInput}` },
      { type: "success", text: `[SAVED] ${currentQuestion.label} ${dots} ✓` },
      { type: "system", text: "" },
    ]);

    setCurrentInput("");
    setIsTyping(true);

    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        const nextQuestion = questions[currentQuestionIndex + 1];
        setMessages((prev) => [
          ...prev,
          { type: "prompt", text: `[Question ${currentQuestionIndex + 2}/${questions.length}] ${nextQuestion.label}` },
          { type: "system", text: `> ${nextQuestion.question}` },
        ]);
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setIsTyping(false);
      } else {
        setMessages((prev) => [
          ...prev,
          { type: "system", text: "→ Processing registration data..." },
          { type: "system", text: "→ Validating information..." },
          { type: "system", text: "" },
          { type: "success", text: "[RESULT] Profile validation ........... PASSED" },
          { type: "success", text: "[RESULT] Email verification ........... VERIFIED" },
          { type: "success", text: "[RESULT] Data integrity check ......... OK" },
          { type: "system", text: "" },
          { type: "system", text: "Congratulations! Your basic profile has been saved." },
          { type: "system", text: "" },
          { type: "system", text: "Next required step:" },
          { type: "system", text: "Complete the department selection process." },
          { type: "system", text: "" },
        ]);
        setIsTyping(false);
      }
    }, 600);
  };

  const allQuestionsAnswered = currentQuestionIndex === questions.length - 1 && 
    formData.name && formData.email && formData.enrollmentId && 
    formData.year && formData.whatsappNumber;

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
                  neutron@registration:~
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge className="border-cyan-500/20 bg-cyan-500/10 text-cyan-200 hover:bg-cyan-500/10 font-mono text-xs">
                STEP 3/4
              </Badge>
              <Badge className="border-white/10 bg-white/5 text-white/80 hover:bg-white/5 font-mono text-xs">
                {currentQuestionIndex + 1}/{questions.length}
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
                        : "text-white/90"
                    }
                  >
                    {msg.text}
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Line or Action Buttons */}
              {!allQuestionsAnswered ? (
                <form onSubmit={handleSubmit} className="flex items-start gap-3 border-t border-white/10 pt-4">
                  <span className="text-cyan-400 mt-0.5">$</span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={currentInput}
                    onChange={(e) => setCurrentInput(e.target.value)}
                    disabled={isTyping}
                    placeholder={questions[currentQuestionIndex]?.placeholder}
                    className="flex-1 bg-transparent text-cyan-400 placeholder:text-cyan-400/40 outline-none disabled:opacity-50 caret-cyan-400"
                    autoComplete="off"
                  />
                  <span className="animate-pulse text-cyan-400">_</span>
                </form>
              ) : (
                <div className="border-t border-white/10 pt-6">
                  <div className="flex items-center justify-between">
                    <button
                      onClick={onBack}
                      className="group flex items-center gap-2 text-white/60 hover:text-white transition-colors font-mono text-sm"
                    >
                      <span className="group-hover:-translate-x-1 transition-transform">←</span>
                      <span>Back</span>
                    </button>
                    <button
                      onClick={onNext}
                      className="group neutron-panel rounded-2xl border border-cyan-500/30 bg-cyan-500/10 px-8 py-3.5 text-cyan-200 hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all font-mono shadow-lg shadow-cyan-500/10"
                    >
                      <span className="flex items-center gap-2">
                        <span>Continue to Departments</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </span>
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
