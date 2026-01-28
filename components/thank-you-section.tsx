"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, CheckCircle, Heart, Sparkles, Target, Users, Zap, Instagram, Linkedin, Youtube } from "lucide-react"
import { FormData } from "./form-page-1"

interface ThankYouSectionProps {
  onRegisterAnother: () => void
}

export default function ThankYouSection({ onRegisterAnother }: ThankYouSectionProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-black relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-cyan-400/20 rounded-full blur-xl float-animation"></div>
        <div
          className="absolute bottom-10 right-10 w-32 h-32 bg-gray-700/20 rounded-full blur-xl float-animation"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/4 w-16 h-16 bg-gray-800/20 rounded-full blur-xl float-animation"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-gray-900/20 rounded-full blur-xl float-animation"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/3 w-12 h-12 bg-cyan-400/30 rounded-full blur-xl float-animation"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/3 w-28 h-28 bg-gray-700/30 rounded-full blur-xl float-animation"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen p-4 sm:p-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative mb-8 sm:mb-12">
            <div className="flex justify-center mb-8">
              <div className="relative inline-block">
                <img
                  src="/logo.jpeg"
                  alt="Neutron3.0 Fest Logo"
                  className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full shadow-2xl shadow-cyan-400/50 object-cover hover:scale-110 transition-all duration-500 relative z-10 border-2 border-white/40"
                />
                {/* Multi-layer glow */}
                <div className="absolute inset-0 bg-white/20 rounded-full blur-xl scale-125 animate-pulse"></div>
                <div className="absolute inset-0 bg-cyan-400/30 rounded-full blur-2xl scale-150 animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl scale-[2] cosmic-glow"></div>
              </div>
            </div>
          </div>

          <div className="mb-8 sm:mb-12 px-4 sm:px-0">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 gradient-text animate-fadeIn">
              Thank You!
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white mb-6 sm:mb-8 leading-relaxed font-medium animate-fadeIn px-2 sm:px-0" style={{ animationDelay: "0.2s" }}>
              Your registration has been submitted successfully.
            </p>
            <div className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-white/10 to-cyan-400/10 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-full border-2 border-white/30 animate-fadeIn max-w-full" style={{ animationDelay: "0.4s" }}>
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-cyan-300 animate-pulse flex-shrink-0" />
              <span className="text-sm sm:text-lg lg:text-xl font-semibold text-white text-center">Welcome to the Neutron family!</span>
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-cyan-300 animate-pulse flex-shrink-0" style={{ animationDelay: "0.3s" }} />
            </div>
          </div>

          <Card className="mb-8 sm:mb-12 shadow-2xl border-2 border-white/30 bg-black/80 backdrop-blur-sm animate-fadeIn mx-2 sm:mx-0" style={{ animationDelay: "0.6s" }}>
            <CardContent className="pt-6 sm:pt-8 lg:pt-10 pb-6 sm:pb-8 lg:pb-10 px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                <Target className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-cyan-300 flex-shrink-0" />
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-cyan-400 text-center">What happens next?</h3>
                <Target className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-cyan-300 flex-shrink-0" />
              </div>
              
              <div className="grid gap-4 sm:gap-6">
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-gray-900/50 to-gray-800/50 border-2 border-white/20">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-cyan-400 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg mx-auto sm:mx-0">
                    <span className="text-white text-lg sm:text-xl lg:text-2xl font-bold">1</span>
                  </div>
                  <div className="text-center sm:text-left">
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-2">Email Confirmation</h4>
                    <p className="text-white text-sm sm:text-base lg:text-lg leading-relaxed">
                      Check your email for a confirmation message with detailed next steps and important information about your registration.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-gray-900/50 to-gray-800/50 border-2 border-white/20">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg mx-auto sm:mx-0">
                    <span className="text-black text-lg sm:text-xl lg:text-2xl font-bold">2</span>
                  </div>
                  <div className="text-center sm:text-left">
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-2">Shortlisting</h4>
                    <p className="text-white text-sm sm:text-base lg:text-lg leading-relaxed">
                      Our team will review all applications carefully. Shortlisted candidates will be notified via email within a few days.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-gray-900/50 to-gray-800/50 border-2 border-white/20">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg mx-auto sm:mx-0">
                    <span className="text-black text-lg sm:text-xl lg:text-2xl font-bold">3</span>
                  </div>
                  <div className="text-center sm:text-left">
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-2">Interview Round</h4>
                    <p className="text-white text-sm sm:text-base lg:text-lg leading-relaxed">
                      Shortlisted candidates will be invited for an interview where you'll get to share your passion and ideas for Neutron3.0.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-gray-900/50 to-gray-800/50 border-2 border-white/20">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg mx-auto sm:mx-0">
                    <span className="text-black text-lg sm:text-xl lg:text-2xl font-bold">4</span>
                  </div>
                  <div className="text-center sm:text-left">
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-2">Orientation Session</h4>
                    <p className="text-white text-sm sm:text-base lg:text-lg leading-relaxed">
                      Selected candidates will attend an orientation session to meet the team and kickstart your exciting journey with Neutron3.0!
                    </p>
                  </div>
                </div>
              </div>

            </CardContent>
          </Card>

          <div className="mt-8 sm:mt-12 animate-fadeIn px-4 sm:px-0" style={{ animationDelay: "1s" }}>
            <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 text-gray-600">
              <span className="text-base sm:text-lg font-medium text-center text-white">Follow us on social media for updates</span>
              <div className="flex items-center justify-center gap-4 sm:gap-6 flex-wrap">
                <a
                  href="https://www.instagram.com/neutronfest/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
                >
                  <Instagram className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a
                  href="https://x.com/neutronfest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-gray-800 to-black hover:from-gray-900 hover:to-gray-800 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
                >
                  <svg 
                    className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:scale-110 transition-transform duration-300" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@neutronfest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
                >
                  <Youtube className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a
                  href="https://www.linkedin.com/company/neutronfest/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
                >
                  <Linkedin className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:scale-110 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
