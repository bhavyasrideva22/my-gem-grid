import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <footer className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Portfolio Info */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Bhavya's Portfolio</h3>
              <p className="text-gray-300 leading-relaxed">
                Thank you for visiting my personal portfolio website. Connect with me over socials.
              </p>
              <p className="text-gray-300">
                Keep Rising 🚀. Connect with me over live chat!
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Quick Links</h3>
              <ul className="space-y-2">
                {[
                  { name: "Home", href: "#home" },
                  { name: "About", href: "#about" },
                  { name: "Skills", href: "#skills" },
                  { name: "Education", href: "#education" },
                  { name: "Projects", href: "#projects" },
                  { name: "Experience", href: "#experience" }
                ].map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="flex items-center text-gray-300 hover:text-white transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById(link.href.substring(1))?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      <span className="mr-2 text-gray-500">▸</span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <Phone className="h-5 w-5 text-yellow-400 mr-3" />
                  <span>+91 7670929939</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Mail className="h-5 w-5 text-yellow-400 mr-3" />
                  <span>bhavyadeva2329@gmail.com</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="h-5 w-5 text-yellow-400 mr-3" />
                  <span>Tanuku, AP, 534211</span>
                </div>
              </div>
              
              {/* Social Media Icons */}
              <div className="flex gap-4 pt-4">
                <a 
                  href="https://www.linkedin.com/in/bhavyasrilakshmi-deva/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <Linkedin className="h-5 w-5 text-slate-900" />
                </a>
                <a 
                  href="https://github.com/bhavyasrideva22" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <Github className="h-5 w-5 text-slate-900" />
                </a>
                <a 
                  href="mailto:bhavyadeva2329@gmail.com"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <Mail className="h-5 w-5 text-slate-900" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-300">
              Designed With <span className="text-red-500">❤️</span> By{" "}
              <span className="text-orange-400 font-semibold">Bhavya Sri Lakshmi Deva</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
