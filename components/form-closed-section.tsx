"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, X, Heart, Sparkles, CheckCircle, Users, Calendar } from "lucide-react";
import { Instagram } from "lucide-react";

interface FormClosedSectionProps {
  closingTime: string;
}

export default function FormClosedSection({ closingTime }: FormClosedSectionProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main floating elements */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-red-100/40 to-orange-100/30 rounded-full blur-3xl float-animation"></div>
        <div
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tl from-orange-100/30 to-red-100/20 rounded-full blur-3xl float-animation"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-br from-amber-100/20 to-red-100/15 rounded-full blur-2xl float-animation"
          style={{ animationDelay: "4s" }}
        ></div>
        <div
          className="absolute bottom-1/3 left-1/2 w-72 h-72 bg-gradient-to-tl from-red-200/15 to-orange-100/10 rounded-full blur-3xl float-animation"
          style={{ animationDelay: "1s" }}
        ></div>

        {/* Additional ambient elements */}
        <div
          className="absolute top-1/4 left-1/4 w-48 h-48 bg-gradient-to-r from-red-100/20 to-orange-100/15 rounded-full blur-2xl float-animation"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-gradient-to-l from-amber-100/25 to-red-100/20 rounded-full blur-2xl float-animation"
          style={{ animationDelay: "5s" }}
        ></div>
      </div>

      {/* Refined floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-gradient-to-r from-red-400/40 to-orange-400/40 rounded-full animate-pulse"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-gradient-to-r from-orange-400/30 to-red-400/30 rounded-full animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-2.5 h-2.5 bg-gradient-to-r from-amber-400/35 to-red-400/35 rounded-full animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-gradient-to-r from-red-500/40 to-orange-500/40 rounded-full animate-pulse"
          style={{ animationDelay: "4.5s" }}
        ></div>
        <div
          className="absolute top-2/3 left-1/5 w-1.5 h-1.5 bg-gradient-to-r from-orange-400/25 to-amber-400/25 rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen p-4 sm:p-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Enhanced header with logo and animated icon */}
          <div className="relative mb-8 sm:mb-12">
            <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-red-500 via-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto pulse-glow shadow-2xl">
              <X className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-white animate-pulse" />
            </div>
          </div>

          {/* Enhanced title with gradient text */}
          <div className="mb-8 sm:mb-12 px-4 sm:px-0">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 gradient-text slide-in-animation font-kamal" style={{ fontFamily: "Kamal" }}>
              Registration Closed
            </h2>
            <div className="flex items-center justify-center gap-2 sm:gap-3 text-gray-600 mb-6 slide-in-animation" style={{ animationDelay: "0.2s" }}>
              <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-lg sm:text-xl lg:text-2xl font-medium">Closed at {closingTime}</span>
            </div>
            <div className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-red-100 to-orange-100 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-full border-2 border-red-200 slide-in-animation max-w-full" style={{ animationDelay: "0.4s" }}>
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-red-500 animate-pulse flex-shrink-0" />
              <span className="text-sm sm:text-lg lg:text-xl font-semibold text-gray-900 text-center">Thank you for your interest!</span>
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-orange-500 animate-pulse flex-shrink-0" style={{ animationDelay: "0.3s" }} />
            </div>
          </div>

          {/* Enhanced main content card */}
          <Card className="mb-8 sm:mb-12 shadow-2xl border-2 border-red-200 bg-white/90 backdrop-blur-sm slide-in-animation mx-2 sm:mx-0" style={{ animationDelay: "0.6s" }}>
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl sm:text-3xl font-bold text-red-600 mb-4">
                Registration Period Has Ended
              </CardTitle>
            </CardHeader>
            
            <CardContent className="text-center space-y-6 px-4 sm:px-6 lg:px-8 pb-6 sm:pb-8 lg:pb-10">
              <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 rounded-2xl p-6 lg:p-8">
                <p className="text-red-700 leading-relaxed text-base sm:text-lg lg:text-xl font-medium">
                  Thank you for your interest in Damru Festival! The registration period has officially closed. 
                  We will be reviewing applications now and moving forward with the selection process accordingly.
                </p>
              </div>
              
            </CardContent>
          </Card>
          
          {/* Enhanced stay connected section */}
          <Card className="mb-8 sm:mb-12 shadow-2xl border-2 border-orange-200 bg-gradient-to-br from-orange-50/80 to-amber-50/80 backdrop-blur-sm slide-in-animation mx-2 sm:mx-0" style={{ animationDelay: "0.8s" }}>
            <CardContent className="p-6 sm:p-8 lg:p-10 text-center">
              <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4">
                <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-orange-500 animate-pulse flex-shrink-0" />
                <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-orange-800 text-center">Stay Connected</h4>
                <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-orange-500 animate-pulse flex-shrink-0" style={{ animationDelay: "0.3s" }} />
              </div>
              <p className="text-orange-700 text-base sm:text-lg lg:text-xl font-medium leading-relaxed">
                Follow our official channels for updates and announcements about DAMRU Festival 2025!
              </p>
            </CardContent>
          </Card>
          
          {/* Social media buttons */}
          <div className="slide-in-animation flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center" style={{ animationDelay: "1s" }}>
            <Button 
              onClick={() => window.open('https://instagram.com/damru_fest', '_blank')} 
              variant="outline"
              className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white border-0 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-base sm:text-lg lg:text-xl font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              <Instagram className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
              Follow on Instagram
            </Button>
            
            <Button 
              onClick={() => window.open('https://twitter.com/damru_fest', '_blank')} 
              variant="outline"
              className="bg-gradient-to-r from-blue-500 to-black hover:from-blue-600 hover:to-gray-800 text-white border-0 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-base sm:text-lg lg:text-xl font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              <span className="w-5 h-5 sm:w-6 sm:h-6 mr-2 flex items-center justify-center font-bold text-lg sm:text-xl">𝕏</span>
              Follow on X
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
