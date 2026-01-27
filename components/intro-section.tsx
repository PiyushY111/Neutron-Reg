"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, Zap } from "lucide-react";

interface IntroSectionProps {
  onNext: () => void;
}

export default function IntroSection({ onNext }: IntroSectionProps) {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Geometric pattern overlay */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)' }}></div>
      </div>

      {/* Geometric dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-2.5 h-2.5 bg-white/80 rounded-full animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
          style={{ animationDelay: "4.5s" }}
        ></div>
        <div
          className="absolute top-2/3 left-1/5 w-1.5 h-1.5 bg-white/90 rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/5 right-1/5 w-1 h-1 bg-cyan-400/80 rounded-full animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute bottom-1/5 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse"
          style={{ animationDelay: "2.5s" }}
        ></div>
        <div
          className="absolute top-3/4 right-2/3 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center px-8 py-[2.5rem]">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            {/* Left side - Enhanced content */}
            <div className="space-y-10 slide-in-animation text-center lg:text-left">
              <div className="space-y-8">
                {/* Enhanced logo with geometric glow effect - centered on left side */}
                <div className="mb-12 relative flex justify-center lg:justify-start">
                  <div className="relative inline-block">
                    <img
                      src="/logo.jpeg"
                      alt="Neutron3.0 Fest Logo"
                      className="w-28 h-28 rounded-full shadow-2xl shadow-cyan-400/50 object-cover hover:scale-110 transition-all duration-500 relative z-10 border-2 border-white/40"
                    />
                    {/* Multi-layer glow */}
                    <div className="absolute inset-0 bg-white/20 rounded-full blur-xl scale-125 animate-pulse"></div>
                    <div className="absolute inset-0 bg-cyan-400/30 rounded-full blur-2xl scale-150 animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl scale-[2] cosmic-glow"></div>
                  </div>
                </div>

                {/* Enhanced typography */}
                <div className="space-y-4" style={{ fontFamily: "Kamal" }}>
                  <h1 className="text-6xl lg:text-8xl font-extralight text-white leading-[0.9] tracking-tight font-kamal">
                    Welcome to
                  </h1>
                  <h2 className="text-6xl lg:text-8xl font-bold bg-gradient-to-r from-white via-cyan-400 to-white bg-clip-text text-transparent leading-[0.9] tracking-normal font-kamal">
                    Neutron 3.0 
                  </h2>
                </div>

                {/* Refined subtitle */}
                <div className="flex items-center justify-center lg:justify-start gap-3 pt-4">
                  <div className="h-px w-12 bg-gradient-to-r from-cyan-400 to-transparent"></div>
                  <span className="text-sm font-medium text-white uppercase tracking-[0.2em]">
                    Newton school of technology Tech Fest
                  </span>
                </div>
              </div>

              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-xl lg:max-w-none mx-auto lg:mx-0 font-light tracking-wide">
                Join the most exciting Tech fest at Newton school of Technology. Be
                part of creating unforgettable experiences that define our
                campus spirit.
              </p>

              {/* Enhanced CTA section */}
              <div className="pt-6 flex justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="text-lg px-12 py-7 rounded-full bg-white text-black hover:bg-cyan-400 hover:text-black shadow-2xl hover:shadow-cyan-400/50 transition-all duration-500 hover:scale-105 font-medium tracking-wide"
                  onClick={onNext}
                >
                  Join Neutron 2026 Team
                </Button>
              </div>
            </div>

            {/* Right side - Clean cards without hover effects */}
            <div className="space-y-6">
              <Card className="border-2 border-white/20 bg-black/60 backdrop-blur-xl shadow-xl shadow-white/5 rounded-2xl overflow-hidden slide-in-animation">
                <CardHeader className="pb-[0.5rem] relative z-10">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-white/10 border border-white/30 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-400/20">
                      <Users className="w-7 h-7 text-white" />
                    </div>
                    <div className="space-y-1">
                      <CardTitle className="text-2xl text-white font-semibold">
                        Team Collaboration
                      </CardTitle>
                      <div className="text-sm text-cyan-400 font-medium uppercase tracking-wide">
                        Build Connections
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-gray-300 leading-relaxed text-lg">
                    Work with passionate students across different departments
                    and build lasting friendships that extend beyond the fest.
                  </p>
                </CardContent>
              </Card>

              <Card
                className="border-2 border-white/20 bg-black/60 backdrop-blur-xl shadow-xl shadow-white/5 rounded-2xl overflow-hidden slide-in-animation"
                style={{ animationDelay: "0.2s" }}
              >
                <CardHeader className="pb-[0.5rem] relative z-10">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-cyan-400/10 border border-cyan-400/30 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-400/20">
                      <Zap className="w-7 h-7 text-cyan-400" />
                    </div>
                    <div className="space-y-1">
                      <CardTitle className="text-2xl text-white font-semibold">
                        Skill Development
                      </CardTitle>
                      <div className="text-sm text-cyan-400 font-medium uppercase tracking-wide">
                        Grow Your Abilities
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-gray-300 leading-relaxed text-lg">
                    Gain hands-on experience in event management, leadership,
                    and creative problem-solving through real challenges.
                  </p>
                </CardContent>
              </Card>

              <Card
                className="border-2 border-white/20 bg-black/60 backdrop-blur-xl shadow-xl shadow-white/5 rounded-2xl overflow-hidden slide-in-animation"
                style={{ animationDelay: "0.4s" }}
              >
                <CardHeader className="pb-[0.5rem] relative z-10">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-white/10 border border-white/30 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-400/20">
                      <Heart className="w-7 h-7 text-white" />
                    </div>
                    <div className="space-y-1">
                      <CardTitle className="text-2xl text-white font-semibold">
                        Create Magic
                      </CardTitle>
                      <div className="text-sm text-cyan-400 font-medium uppercase tracking-wide">
                        Memorable Moments
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-gray-300 leading-relaxed text-lg">
                    Be part of creating memorable experiences that will be
                    cherished by the entire campus and become university legacy.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
