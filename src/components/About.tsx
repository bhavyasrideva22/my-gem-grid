import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import personalImage from "@/assets/bhavya image - Copy.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold">About Me</h2>
          </div>
          
          {/* Personal Photo Section */}
          <div className="flex flex-col lg:flex-row items-center gap-6 mb-16">
            <div className="flex-shrink-0">
              <div className="relative group">
                <img
                  src={personalImage}
                  alt="Bhavya - Personal Photo"
                  className="w-80 h-80 rounded-2xl object-cover shadow-2xl border-4 border-primary/20 grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:shadow-3xl"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/20 to-transparent group-hover:from-primary/10 transition-all duration-500"></div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out"></div>
              </div>
            </div>
            <div className="flex-1 space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-center lg:text-left">Hello, I'm Bhavya Deva</h3>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-center lg:text-left">
              Passionate Full-Stack Developer dedicated to creating beautiful, functional, and user-friendly web applications.
              With a strong eye for design and a commitment to clean, maintainable code, I enjoy transforming complex problems
              into simple, elegant solutions that enhance user experience and make a real impact.
              </p>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-center lg:text-left">
              Skilled in writing efficient, scalable, and modern code following industry best practices.
              Constantly exploring new technologies, contributing to open-source projects, and staying 
              curious about innovation and design.
              </p>
              <div className="flex justify-center lg:justify-start pt-12">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity group"
                  onClick={() => window.open('https://drive.google.com/file/d/1EL4a8QF4ezSO8eN-65yD9W6zHF5ax6xu/view?usp=sharing', '_blank')}
                >
                  <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
