import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import healthcareImage from "@/assets/healthcare.jpg";
import translatorImage from "@/assets/translater.jpg";
import figmaImage from "@/assets/figma.jpg";
import foodImage from "@/assets/food.jpg";
import travelImage from "@/assets/travel.jpg";
import musicImage from "@/assets/music.jpg";
import marketImage from "@/assets/market.jpg";
import market1Image from "@/assets/market1.jpg";
import recipeImage from "@/assets/recipe.jpg";

const Projects = () => {
  const Projects = [
    {
      title: "Hospital Management System (Web Designing)",
      description: "A healthcare web app for finding doctors, browsing hospitals, and booking appointments online.",
      image: healthcareImage,
      tags: ["React 18", "TypeScript", "Vite", "Tailwind CSS"],
      github: "https://github.com/bhavyasrideva22/hospitalmanagement",
      demo: "https://hospitalmanagement-m4gk.vercel.app/"
    },
    {
      title: "Food Delivery App (UI/UX Designing)",
      description: "A modern and user-friendly food delivery application designed to connect users with nearby restaurants and deliver their favorite meals at their doorstep. The app features an intuitive interface for browsing restaurants, viewing menus, adding items to cart, and tracking orders in real-time.",
      image: foodImage,
      tags: ["Figma", "UI/UX Design", "Mobile Design", "User Research"],
      github: "https://www.figma.com/design/KAaWJOdtjk00jWrZcalU15/Untitled?node-id=7-38&t=JgacpVgNWID8qRgf-1",
      demo: "https://www.figma.com/proto/KAaWJOdtjk00jWrZcalU15/Untitled?node-id=7-39&t=h3Fp1VFYYVwoEGY8-1&scaling=scale-down&content-scaling=fixed&page-id=7%3A38&starting-point-node-id=31%3A6176"
    },
    {
      title: "Agro-Marketing Platform (Full stack Development)",
      description: "An Agro Marketing Platform connects farmers directly with buyers, helping them sell their produce at fair prices while reducing middlemen and improving market access.",
      image: market1Image,
      tags: ["Full Stack Development", "React", "Node.js", "MongoDB"],
      github: "https://github.com/bhavyasrideva22/produce-portal-hub",
      demo: "https://produce-portal-hub.vercel.app/"
    },
    {
      title: "Translator App (Flutter Development)",
      description: "A simple web-based translator app built with Flutter and hosted on Vercel, featuring text input, source and target language selection, translation output, and basic UI",
      image: translatorImage,
      tags: ["Flutter", "Web", "Vercel"],
      github: "https://github.com/bhavyasrideva22/translator",
      demo: "https://translator-3u94.vercel.app/"
    },
    {
      title: "Quiz App (Flutter Development)",
      description: "An interactive Flutter-based quiz app designed to test and enhance your knowledge anytime, anywhere. Features multiple question categories, score tracking, and a user-friendly interface.",
      image: project2,
      tags: ["Flutter", "Mobile Development", "Dart"],
      github: "https://github.com/bhavyasrideva22/quiz",
      demo: "https://quizapp-two-self.vercel.app/"
    },
    {
      title: "Travel Booking Website (Frontend Development)",
      description: "Travel booking platform with real-time flight, hotel, and tour reservations, secure user authentication, and integrated payment gateway.",
      image: travelImage,
      tags: ["React", "TypeScript", "Tailwind CSS", "Frontend"],
      github: "https://github.com/bhavyasrideva22/travel",
      demo: "https://travel-website-one-flame.vercel.app/"
    },
    {
      title: "Music Player App (UI/UX Designing)",
      description: "The app features a modern, intuitive interface for easily discovering and enjoying music on any device.",
      image: musicImage,
      tags: ["Figma", "UI/UX Design", "Mobile Design", "User Research"],
      github: "https://www.figma.com/design/a2DwRe5aLf0ASvaD6cnO5w/Untitled?node-id=0-1&t=n0oEDsEObkJm16sA-1",
      demo: "https://www.figma.com/proto/a2DwRe5aLf0ASvaD6cnO5w/Untitled?node-id=8-59&p=f&t=l6QCusP8r7ffnUkH-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=15%3A79"
    },
    {
      title: "Recipe Finder (Frontend Development)",
      description: "Recipe discovery app with ingredient search, nutritional information, and meal planning",
      image: recipeImage,
      tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Frontend"],
      github: "https://github.com/bhavyasrideva22/herb-eats-explorer/",
      demo: "https://recipe-pink-seven.vercel.app/"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Projects</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Projects.map((skill, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={skill.image}
                    alt={skill.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-2">
                    <Button size="sm" variant="outline" className="bg-background/50 backdrop-blur-sm" asChild>
                      <a href={skill.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" className="bg-gradient-to-r from-primary to-secondary" asChild>
                      <a href={skill.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl md:text-3xl font-semibold">{skill.title}</h3>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                    {skill.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {skill.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-4 py-2 text-sm md:text-base rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
