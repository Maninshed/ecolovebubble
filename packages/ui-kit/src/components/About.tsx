'use client';

import { Recycle, Scissors, Sparkles, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-5">
        <img src="/fabric-texture.jpg" alt="" className="w-full h-full object-cover" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-mono font-bold mb-6">
              <span className="text-gradient-chaos">What Even Is This?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              It's not just about bags. It's about everything that happens before the bag exists.
            </p>
          </div>

          {/* Main Story */}
          <div className="prose prose-lg max-w-none space-y-8 text-foreground">
            <div className="bg-card p-8 rounded-lg shadow-lg border border-border">
              <p className="text-lg leading-relaxed">
                Everything starts with waste. Sofas, airbeds, tents, parachutes, machine covers, even the odd hot air balloon. 
                If it's heading for the tip, it's fair game. The fabrics come straight out of Bristol — a city that's just as patchy, 
                colourful and unpredictable as the bags themselves. Designs stay simple because the materials don't need shouting over. 
                Brights, darks, patchworks and flat bits: they've already got enough attitude on their own.
              </p>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-lg border border-border">
              <p className="text-lg leading-relaxed">
                Each piece ends up with a personality. Some are black as midnight with a soul to match. Some look quiet until you 
                unzip them and get hit with a riot of colour inside. Others go full "here I am" from the start. It's art, it's salvage, 
                it's a little eccentric — but it's useful too. When you carry one, you're holding a scrap of adventure and a victory 
                against landfill, all stitched into something that won't follow the rules any more than the maker does.
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            <div className="text-center p-6 bg-card rounded-lg border border-border hover:shadow-lg transition-shadow">
              <Recycle className="w-12 h-12 mx-auto mb-4 text-neon-green" />
              <h3 className="font-mono font-bold text-lg mb-2">100% Salvaged</h3>
              <p className="text-sm text-muted-foreground">Every piece saved from landfill</p>
            </div>

            <div className="text-center p-6 bg-card rounded-lg border border-border hover:shadow-lg transition-shadow">
              <Scissors className="w-12 h-12 mx-auto mb-4 text-electric-blue" />
              <h3 className="font-mono font-bold text-lg mb-2">Handmade in Bristol</h3>
              <p className="text-sm text-muted-foreground">Cut, stitched, and crafted locally</p>
            </div>

            <div className="text-center p-6 bg-card rounded-lg border border-border hover:shadow-lg transition-shadow">
              <Sparkles className="w-12 h-12 mx-auto mb-4 text-vibrant-yellow" />
              <h3 className="font-mono font-bold text-lg mb-2">Unique Designs</h3>
              <p className="text-sm text-muted-foreground">No two bags are the same</p>
            </div>

            <div className="text-center p-6 bg-card rounded-lg border border-border hover:shadow-lg transition-shadow">
              <Heart className="w-12 h-12 mx-auto mb-4 text-hot-pink" />
              <h3 className="font-mono font-bold text-lg mb-2">Made with Love</h3>
              <p className="text-sm text-muted-foreground">Each piece has a story</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
