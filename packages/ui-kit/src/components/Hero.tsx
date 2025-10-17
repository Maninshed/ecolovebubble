'use client';

import { Button } from "./ui/button";
import { Heart, ShoppingBag } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-balloons.jpg"
          alt="Colorful hot air balloons"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-white/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-mono font-bold text-white leading-tight drop-shadow-lg">
            Take A Piece of Adventure With You Wherever You Go
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl md:text-3xl text-white font-medium max-w-2xl mx-auto drop-shadow-md">
            Bags made from clingfilm. Yes, really.
          </p>

          {/* Taglines */}
          <div className="space-y-2 text-white text-sm sm:text-base drop-shadow-md">
            <p className="italic">Saved from landfill, reborn as art.</p>
            <p className="font-mono">Colour theory? Impeccable. Chaos? Also impeccable.</p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              style={{ backgroundColor: 'hsl(328, 100%, 54%)', color: '#ffffff' }} 
              className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.border = '2px solid white';
                e.currentTarget.style.color = '#000000';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'hsl(328, 100%, 54%)';
                e.currentTarget.style.border = 'none';
                e.currentTarget.style.color = '#ffffff';
              }}
            >
              <Heart className="w-5 h-5 mr-2" />
              Shop Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-lg px-8 py-6 rounded-full backdrop-blur-sm transition-all"
              style={{ backgroundColor: 'transparent', color: '#000000' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'hsl(328, 100%, 54%)';
                e.currentTarget.style.borderColor = 'hsl(328, 100%, 54%)';
                e.currentTarget.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.borderColor = 'white';
                e.currentTarget.style.color = '#000000';
              }}
            >
              <ShoppingBag className="w-5 h-5 mr-2" />
              Discover the Story
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
