"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, CheckCircle, Heart, Sparkles, Target, Users, Zap } from "lucide-react"
import { FormData } from "./form-page-1"

interface ThankYouSectionProps {
  onRegisterAnother: () => void
}

export default function ThankYouSection({ onRegisterAnother }: ThankYouSectionProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-red-100 rounded-full blur-xl float-animation"></div>
        <div
          className="absolute bottom-10 right-10 w-32 h-32 bg-orange-100 rounded-full blur-xl float-animation"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/4 w-16 h-16 bg-amber-100 rounded-full blur-xl float-animation"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-pink-100 rounded-full blur-xl float-animation"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/3 w-12 h-12 bg-red-200 rounded-full blur-xl float-animation"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/3 w-28 h-28 bg-orange-200 rounded-full blur-xl float-animation"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative mb-12">
            <div className="w-40 h-40 bg-gradient-to-br from-red-500 via-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto pulse-glow shadow-2xl">
              <CheckCircle className="w-20 h-20 text-white animate-bounce" />
            </div>
            <div className="absolute -bottom-3 -left-3 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
              <Heart className="w-5 h-5 text-white animate-pulse" style={{ animationDelay: "0.5s" }} />
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 gradient-text animate-fadeIn">
              Thank You!
            </h2>
            <p className="text-2xl md:text-3xl text-gray-700 mb-8 leading-relaxed font-medium animate-fadeIn" style={{ animationDelay: "0.2s" }}>
              Your registration has been submitted successfully.
            </p>
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-red-100 to-orange-100 px-8 py-4 rounded-full border-2 border-red-200 animate-fadeIn" style={{ animationDelay: "0.4s" }}>
              <Sparkles className="w-6 h-6 text-red-500 animate-pulse" />
              <span className="text-xl font-semibold text-gray-900">Welcome to the Damru family!</span>
              <Sparkles className="w-6 h-6 text-orange-500 animate-pulse" style={{ animationDelay: "0.3s" }} />
            </div>
          </div>

          <Card className="mb-12 shadow-2xl border-2 border-red-200 bg-white backdrop-blur-sm animate-fadeIn" style={{ animationDelay: "0.6s" }}>
            <CardContent className="pt-10 pb-10 px-8">
              <div className="flex items-center justify-center gap-3 mb-8">
                <Target className="w-8 h-8 text-red-500" />
                <h3 className="text-3xl font-bold text-red-600">What happens next?</h3>
                <Target className="w-8 h-8 text-red-500" />
              </div>
              
              <div className="grid md:grid-cols-1 gap-6">
                <div className="flex items-start gap-6 p-6 rounded-2xl bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-100">
                  <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Email Confirmation</h4>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Check your email for a confirmation message with detailed next steps and important information about your registration.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 p-6 rounded-2xl bg-gradient-to-r from-orange-50 to-amber-50 border-2 border-orange-100">
                  <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Committee Contact</h4>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Committee coordinators will contact you within 2-3 days to welcome you and share department-specific details.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 p-6 rounded-2xl bg-gradient-to-r from-amber-50 to-red-50 border-2 border-amber-100">
                  <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Orientation Session</h4>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Attend the orientation session where you'll meet your team and learn about your exciting journey ahead. Details will be shared soon!
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-6 bg-gradient-to-r from-red-100 to-orange-100 rounded-2xl border-2 border-red-200">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Zap className="w-6 h-6 text-red-500" />
                  <p className="text-lg font-semibold text-gray-900">Get ready for an amazing experience!</p>
                  <Zap className="w-6 h-6 text-orange-500" />
                </div>
                <p className="text-gray-700 leading-relaxed">
                  You're now part of something special. Damru 2025 is going to be unforgettable, and you'll play a key role in making it happen!
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="mt-12 animate-fadeIn" style={{ animationDelay: "1s" }}>
            <div className="flex items-center justify-center gap-4 text-gray-600">
              <span className="text-lg font-medium">Follow us on social media for updates</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
