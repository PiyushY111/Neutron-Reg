"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Heart, Trophy, Users, Zap } from "lucide-react"

interface IntroSectionProps {
  onNext: () => void
}

export default function IntroSection({ onNext }: IntroSectionProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-400/20 rounded-full blur-xl float-animation"></div>
        <div
          className="absolute bottom-20 right-10 w-40 h-40 bg-orange-400/20 rounded-full blur-xl float-animation"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-24 h-24 bg-amber-400/20 rounded-full blur-xl float-animation"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-12">
            <div className="mb-8 relative">
              <img
                src="/image.png"
                alt="Damru Fest Logo"
                className="mx-auto mb-8 rounded-full w-24 h-24 shadow-2xl pulse-glow object-cover"
              />
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-gray-900">Welcome to</span>{" "}
              <span className="gradient-text block mt-2">Damru 2025</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
              Join the most exciting cultural fest at Rishihood University! Be part of the team that brings creativity,
              energy, and unforgettable experiences to our campus community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-2 bg-white backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-red-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">Team Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Work with passionate students across different departments and build lasting friendships
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 bg-white backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-8 h-8 text-orange-500" />
                </div>
                <CardTitle className="text-xl text-gray-900">Skill Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Gain hands-on experience in event management, leadership, and creative problem-solving
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 bg-white backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-red-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">Create Magic</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Be part of creating memorable experiences that will be cherished by the entire campus
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="relative">
            <Button
              size="lg"
              className="text-xl px-12 py-8 rounded-2xl shadow-2xl hover:shadow-red-300/25 transition-all duration-300 hover:scale-105 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600"
              onClick={onNext}
            >
              <Zap className="mr-3 w-6 h-6" />
              Join Damru 2025 Team
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
