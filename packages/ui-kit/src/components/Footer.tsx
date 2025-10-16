'use client';

import { Heart, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-chaos flex items-center justify-center">
                  <span className="font-mono text-white font-bold text-sm">ELB</span>
                </div>
                <span className="font-mono font-bold text-lg">Eco Love Bubble</span>
              </div>
              <p className="text-background/80 text-sm leading-relaxed">
                Turning waste into wearable art. Bags made from salvaged materials with attitude.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-mono font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-background/80 hover:text-background transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#bags" className="text-background/80 hover:text-background transition-colors">
                    The Bags
                  </a>
                </li>
                <li>
                  <a href="#story" className="text-background/80 hover:text-background transition-colors">
                    Story
                  </a>
                </li>
                <li>
                  <a href="#" className="text-background/80 hover:text-background transition-colors">
                    Shop
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact & Social */}
            <div>
              <h3 className="font-mono font-bold mb-4">Connect</h3>
              <div className="space-y-3">
                <a
                  href="mailto:hello@ecolovebubble.com"
                  className="flex items-center space-x-2 text-background/80 hover:text-background transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">hello@ecolovebubble.com</span>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-2 text-background/80 hover:text-background transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  <span className="text-sm">@ecolovebubble</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-background/20 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm text-center sm:text-left">
              © {new Date().getFullYear()} Eco Love Bubble. Made with chaos and love in Bristol.
            </p>
            <div className="flex items-center space-x-2 text-background/60 text-sm">
              <span>Crafted with</span>
              <Heart className="w-4 h-4 text-hot-pink fill-hot-pink" />
              <span>and salvaged materials</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
