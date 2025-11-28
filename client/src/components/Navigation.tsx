import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img src="/valox-logo.png" alt="ValoX" className="h-8" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#use-cases" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Use Cases
            </a>
            <a href="#api" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              API
            </a>
            <Button variant="default" className="gradient-purple-cyan text-white" asChild>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSc5qLIEDJtyRcRX5UzztChjb8u2nfvkM1Wh2-8HPHNifl3rAg/viewform?usp=publish-editor"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Started
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <a
                href="#features"
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#use-cases"
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Use Cases
              </a>
              <a
                href="#api"
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                API
              </a>
              <Button variant="default" className="gradient-purple-cyan text-white w-full" asChild>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSc5qLIEDJtyRcRX5UzztChjb8u2nfvkM1Wh2-8HPHNifl3rAg/viewform?usp=publish-editor"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Started
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
