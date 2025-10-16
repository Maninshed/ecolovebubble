'use client';

import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

const personalities = [
  {
    title: "The Midnight Soul",
    description: "Black as midnight with a soul to match. These bags are for those who appreciate the darker side of life but still need somewhere to put their stuff.",
    color: "bg-gradient-to-br from-gray-900 to-black",
    badge: "Dark & Brooding",
    textColor: "text-white",
  },
  {
    title: "The Secret Riot",
    description: "Looks quiet and discreet on the outside. Unzip it and BAM — a riot of colour that's been waiting to escape. For people who are loud inside but quiet outside.",
    color: "bg-gradient-to-br from-gray-800 to-gray-600",
    badge: "Hidden Brightness",
    textColor: "text-white",
  },
  {
    title: "The Show-Off",
    description: "Full 'here I am' from the start. Patchwork chaos, clashing colours, maximum attitude. These bags scream their personality across the street.",
    color: "bg-gradient-chaos",
    badge: "Full Volume",
    textColor: "text-white",
  },
  {
    title: "The Adventurer",
    description: "Made from tent fabric, parachute material, or hot air balloon scraps. Literally carrying a piece of someone else's adventure.",
    color: "bg-gradient-to-br from-blue-500 via-red-500 to-yellow-500",
    badge: "Adventure Ready",
    textColor: "text-white",
  },
];

const BagPersonalities = () => {
  return (
    <section id="bags" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-mono font-bold mb-6">
              The Personalities
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Some shout. Some whisper. Some are loud inside but quiet outside.
            </p>
          </div>

          {/* Personalities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {personalities.map((personality, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-2xl transition-shadow border-2 border-border group cursor-pointer"
              >
                <div className={`h-48 ${personality.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="backdrop-blur-sm">
                      {personality.badge}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-mono font-bold text-2xl mb-3">{personality.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{personality.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Taglines */}
          <div className="mt-16 text-center space-y-4">
            <p className="text-lg font-mono text-muted-foreground">
              "Flat bits of balloon → flat-out brilliant."
            </p>
            <p className="text-lg font-mono text-muted-foreground">
              "If it was once a sofa, tent, or caravan roof — it might now be your bag."
            </p>
            <p className="text-lg font-mono text-hot-pink font-bold">
              Carry adventure, carry rubbish-that's-not-rubbish.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BagPersonalities;
