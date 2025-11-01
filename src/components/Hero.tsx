import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import personalImage from "@/assets/bhavya image - Copy.jpg";
import { useState, useEffect } from "react";

const Hero = () => {
  const specializations = [
    "Full Stack Development",
    "Web Designing", 
    "Frontend Development",
    "Flutter App Development",
    "UI/UX Designing"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentSpecialization = specializations[currentIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing effect
        if (currentText.length < currentSpecialization.length) {
          setCurrentText(currentSpecialization.slice(0, currentText.length + 1));
        } else {
          // Start deleting after a pause
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting effect
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          // Move to next specialization
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % specializations.length);
        }
      }
    }, isDeleting ? 50 : 100); // Faster deleting, slower typing

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, specializations]);

  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to bottom, hsl(var(--background) / 0.9), hsl(var(--background))), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 items-center min-h-[80vh]">
            {/* Left Side - Text Content */}
            <div className="space-y-8 animate-in fade-in slide-in-from-left-4 duration-1000">
              <div className="inline-block">
                <span className="inline-block px-6 py-3 rounded-full border border-primary/30 bg-primary/10 text-lg text-primary animate-in fade-in slide-in-from-top-2 duration-700">
                  👋 Welcome to my portfolio
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-left">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-[gradient_8s_linear_infinite]">
                  Hi There,<br />
                  I'm Bhavya Sri Lakshmi Deva
                </span>
              </h1>
              
              <div className="text-xl md:text-2xl lg:text-3xl text-muted-foreground leading-relaxed text-left">
                <span className="inline-block">I Am into</span>
                <span className="inline-block ml-3 text-primary font-semibold">
                  {currentText}
                  <span className="animate-pulse">|</span>
                </span>
              </div>
              
              <div className="flex flex-wrap gap-4 items-center pt-4">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity group"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-primary/30 hover:bg-primary/10"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get In Touch
                </Button>
              </div>
              
              <div className="flex gap-6 pt-8">
                <a href="https://github.com/bhavyasrideva22" target="_blank" rel="noopener noreferrer" 
                   className="text-muted-foreground hover:text-primary transition-colors">
                  <Github className="h-8 w-8" />
                </a>
                <a href="https://www.linkedin.com/in/bhavyasrilakshmi-deva/" target="_blank" rel="noopener noreferrer"
                   className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="h-8 w-8" />
                </a>
                <a href="mailto:bhavyadeva2329@gmail.com"
                   className="text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="h-8 w-8" />
                </a>
              </div>
            </div>

            {/* Right Side - Personal Image */}
            <div className="flex justify-center lg:justify-end animate-in fade-in slide-in-from-right-4 duration-1000">
              <div className="relative">
                <img
                  src={personalImage}
                  alt="Bhavya - Personal Photo"
                  className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl object-cover shadow-2xl border-4 border-primary/20"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/20 to-transparent"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full opacity-20 blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />
    </section>
  );
};

export default Hero;
