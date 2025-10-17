'use client';

import { useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { Button } from "./ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-gradient-chaos flex items-center justify-center">
              <span className="font-mono text-white font-bold text-sm">ELB</span>
            </div>
            <span className="font-mono font-bold text-lg hidden sm:block">Eco Love Bubble</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
              About
            </a>
            <a href="#bags" className="text-foreground hover:text-primary transition-colors font-medium">
              The Bags
            </a>
            <a href="#story" className="text-foreground hover:text-primary transition-colors font-medium">
              Story
            </a>
            <Button size="sm" style={{ backgroundColor: 'hsl(328, 100%, 54%)' }} className="hover:opacity-90 text-white">
              <ShoppingBag className="w-4 h-4 mr-2" />
              Shop
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <a
              href="#about"
              className="block text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#bags"
              className="block text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              The Bags
            </a>
            <a
              href="#story"
              className="block text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Story
            </a>
            <Button className="w-full text-white hover:opacity-90" style={{ backgroundColor: 'hsl(328, 100%, 54%)' }}>
              <ShoppingBag className="w-4 h-4 mr-2" />
              Shop Now
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
