"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  Target,
  Megaphone,
  Palette,
  Handshake,
  Calendar,
  Music,
  Code,
  Users,
  Calculator,
} from "lucide-react";

const preFestDepartments = [
  {
    id: "marketing-promotion",
    name: "Marketing & Promotion",
    description:
      "Create buzz and excitement for Damru! Design campaigns, manage social media, and spread the word across campus and beyond.",
    shortDesc: "Create campaigns and manage social media",
    icon: Megaphone,
    color: "text-red-600",
  },
  {
    id: "design-creative",
    name: "Design & Creative",
    description:
      "Bring visual magic to life! Design posters, banners, stage backdrops, and all creative elements that make Damru visually stunning.",
    shortDesc: "Design posters, banners, and visual elements",
    icon: Palette,
    color: "text-pink-600",
  },
  {
    id: "sponsorship-partnerships",
    name: "Sponsorship & Partnerships",
    description:
      "Build valuable connections! Reach out to sponsors, negotiate partnerships, and secure funding to make Damru bigger and better.",
    shortDesc: "Secure sponsors and build partnerships",
    icon: Handshake,
    color: "text-orange-600",
  },
  {
    id: "logistics-planning",
    name: "Logistics & Planning",
    description:
      "Master the details! Coordinate venues, manage equipment, plan timelines, and ensure everything runs like clockwork.",
    shortDesc: "Coordinate venues and manage equipment",
    icon: Calendar,
    color: "text-red-600",
  },
  {
    id: "content-programming",
    name: "Content & Programming",
    description:
      "Curate amazing experiences! Plan events, coordinate with performers, design competitions, and create the fest lineup.",
    shortDesc: "Plan events and create fest lineup",
    icon: Music,
    color: "text-indigo-600",
  },
  {
    id: "tech-digital",
    name: "Tech & Digital",
    description:
      "Power the digital experience! Manage websites, apps, online registrations, live streaming, and all tech infrastructure.",
    shortDesc: "Manage websites, apps, and tech infrastructure",
    icon: Code,
    color: "text-blue-600",
  },
  {
    id: "public-relations",
    name: "Public Relations",
    description:
      "Be the voice of Damru! Handle media relations, press releases, celebrity management, and external communications.",
    shortDesc: "Handle media relations and communications",
    icon: Users,
    color: "text-green-600",
  },
  {
    id: "finance-budget",
    name: "Finance & Budget",
    description:
      "Keep the numbers in check! Manage budgets, track expenses, handle financial planning, and ensure fiscal responsibility.",
    shortDesc: "Manage budgets and track expenses",
    icon: Calculator,
    color: "text-yellow-600",
  },
];

interface CommitteesSectionProps {
  onNext: () => void;
}

export default function CommitteesSection({ onNext }: CommitteesSectionProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-amber-50">
      <div className="max-w-7xl mx-auto py-16 px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Target className="w-4 h-4" />
            Step 2 of 4
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 gradient-text">
            Departments
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Explore our committees and departments. Each offers unique
            opportunities to contribute your skills and grow as a leader.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {preFestDepartments.map((dept, index) => (
            <Card
              key={dept.id}
              className="bg-white border-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-4">
                <div className="flex justify-start items-start gap-[0.8rem] h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl flex items-center justify-center /mx-auto /mb-4">
                    <dept.icon className={`w-8 h-8 ${dept.color}`} />
                  </div>
                  <div className="flex flex-col justify-center h-full">
                    <CardTitle
                      className="text-xl text-start text-gray-900  "
                      style={{ fontFamily: "inter" }}
                    >
                      {dept.name}
                    </CardTitle>
                    <CardDescription className="text-sm text-gray-500 mt-1">
                      {dept.shortDesc}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  {dept.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            onClick={onNext}
            className="px-12 py-8 text-xl rounded-2xl shadow-xl hover:shadow-red-300 transition-all duration-300 hover:scale-105 bg-gradient-to-r from-red-600 to-red-700"
          >
            <Target className="mr-3 w-6 h-6" />
            Continue to Registration
            <ArrowRight className="ml-3 w-6 h-6" />
          </Button>
        </div>
      </div>
    </div>
  );
}
