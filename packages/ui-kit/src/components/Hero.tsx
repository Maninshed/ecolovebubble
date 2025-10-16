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
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-background/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-mono font-bold text-white leading-tight">
            Take A Piece of Adventure With You Wherever You Go
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl md:text-3xl text-white/90 font-medium max-w-2xl mx-auto">
            Bags made from clingfilm. Yes, really.
          </p>

          {/* Taglines */}
          <div className="space-y-2 text-white/80 text-sm sm:text-base">
            <p className="italic">Saved from landfill, reborn as art.</p>
            <p className="font-mono">Colour theory? Impeccable. Chaos? Also impeccable.</p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all">
              <Heart className="w-5 h-5 mr-2" />
              Shop Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-foreground text-lg px-8 py-6 rounded-full backdrop-blur-sm"
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
