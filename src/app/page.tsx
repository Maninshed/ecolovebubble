'use client';

import { Navigation, Hero, About, BagPersonalities, Story, Footer } from "ui-kit";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <BagPersonalities />
      <Story />
      <Footer />
    </div>
  );
}
