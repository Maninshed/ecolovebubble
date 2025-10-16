'use client';

import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const Story = () => {
  return (
    <section id="story" className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url(/fabric-texture.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-mono font-bold mb-6">
              The Studio <span className="text-gradient-chaos">IS</span> The Work
            </h2>
            <p className="text-xl text-muted-foreground">
              It's about vibe, energy, and the thrill of seeing waste turn into something people actually want to carry.
            </p>
          </div>

          {/* Story Content */}
          <div className="space-y-8">
            <div className="bg-card p-8 rounded-lg shadow-xl border-2 border-border">
              <p className="text-lg leading-relaxed mb-6">
                Eco Love Bubble isn't just about bags. It's about everything that happens before the bag exists. 
                The studio runs on instinct and salvage: bright scraps, dark patches, flat balloon bits, tents, clingfilm 
                and whatever else turns up. Designs stay simple because the materials already carry enough attitude of their own.
              </p>
              
              <p className="text-lg leading-relaxed">
                Each piece is a side effect of the bigger experiment — turning waste into something worth carrying without 
                overthinking it. Colours clash or flow depending on a mood. Some bags are dark and brooding, some hide a secret 
                brightness, some scream their colours across the street.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-hot-pink p-6 rounded-lg text-white text-center">
                <p className="font-mono font-bold text-3xl mb-2">100%</p>
                <p className="text-sm">Salvaged Materials</p>
              </div>
              <div className="bg-electric-blue p-6 rounded-lg text-white text-center">
                <p className="font-mono font-bold text-3xl mb-2">∞</p>
                <p className="text-sm">Unique Designs</p>
              </div>
              <div className="bg-vibrant-yellow p-6 rounded-lg text-foreground text-center">
                <p className="font-mono font-bold text-3xl mb-2">Bristol</p>
                <p className="text-sm">Handmade with Love</p>
              </div>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-xl border-2 border-border">
              <p className="text-lg leading-relaxed">
                It's art, it's salvage, it's eccentric, but it's useful too. The studio is as much the work as the bag: 
                vibe, energy, and the thrill of seeing rubbish reborn into something people actually want to carry. 
                When you sling one on your shoulder, you're carrying a scrap of adventure and a small victory against landfill, 
                stitched together without following the rules.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 rounded-full shadow-lg">
              Browse the Collection
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
