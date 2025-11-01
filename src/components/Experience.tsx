import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Calendar, MapPin, Building2, Briefcase, ExternalLink } from "lucide-react";
import drehillLogo from "@/assets/drehill.jpg";

const Experience = () => {
  const experiences = [
    {
      title: "Software Intern",
      company: "Drehill Private Limited",
      location: "Remote (Online)",
      duration: "May 2025 – September 2025",
      type: "Internship",
      description: "Assisted in developing and testing web applications as part of the software development team. Contributed to front-end and back-end integration using modern web technologies.",
      achievements: [
        "Collaborated with senior developers in debugging, optimizing code, and improving application performance",
        "Participated in daily stand-up meetings and project reviews, ensuring timely task delivery",
        "Gained hands-on experience in full-stack web development",
        "Contributed to both front-end and back-end integration projects"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "Git", "GitHub"],
      certificate: "https://drive.google.com/file/d/1lj1Ya8G1VYsj-QXfGBXObNyFKfLwbVF4/view?usp=sharing",
      logo: drehillLogo
    }
  ];

  // Converts a Google Drive share URL to an embeddable preview URL when possible
  const getEmbeddableUrl = (url: string) => {
    if (!url) return url;
    if (url.includes("drive.google.com") && url.includes("/view")) {
      return url.replace("/view", "/preview");
    }
    return url;
  };

  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Professional Experience</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Empowering innovation through hands-on experience and continuous learning.
            </p>
          </div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    {/* Left Column - Main Info */}
                    <div className="flex-1 space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                          {exp.logo ? (
                            <img 
                              src={exp.logo} 
                              alt={`${exp.company} logo`}
                              className="w-full h-full object-contain"
                            />
                          ) : (
                            <Briefcase className="h-6 w-6 text-primary" />
                          )}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl md:text-3xl font-semibold text-foreground">
                            {exp.title}
                          </h3>
                          <div className="flex items-center gap-2 text-lg text-muted-foreground mt-1">
                            <Building2 className="h-5 w-5" />
                            <span>{exp.company}</span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>
                      
                      {/* Achievements */}
                      <div className="space-y-2">
                        <h4 className="text-lg font-semibold text-foreground">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start gap-2">
                              <span className="text-primary mt-1">▸</span>
                              <span className="text-muted-foreground">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Technologies */}
                      <div className="space-y-2">
                        <h4 className="text-lg font-semibold text-foreground">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="secondary"
                              className="px-3 py-1 text-sm bg-primary/10 text-primary border-primary/20"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      {/* Certificate Modal */}
                      {exp.certificate && (
                        <div className="pt-4">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity flex items-center gap-2">
                                <ExternalLink className="h-4 w-4" />
                                View Certificate
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl w-[95vw]">
                              <DialogHeader>
                                <DialogTitle>Certificate</DialogTitle>
                              </DialogHeader>
                              <div className="w-full h-[70vh] rounded-md overflow-hidden border">
                                <iframe
                                  src={getEmbeddableUrl(exp.certificate)}
                                  title="Certificate Preview"
                                  className="w-full h-full"
                                  loading="lazy"
                                />
                              </div>
                              <div className="pt-3 text-right">
                                <a
                                  href={exp.certificate}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-sm text-primary underline"
                                >
                                  Open in new tab
                                </a>
                              </div>
                            </DialogContent>
                          </Dialog>
                        </div>
                      )}
                    </div>
                    
                    {/* Right Column - Meta Info */}
                    <div className="lg:w-64 space-y-4">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-5 w-5" />
                        <span className="font-medium">{exp.duration}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-5 w-5" />
                        <span>{exp.location}</span>
                      </div>
                      
                      <Badge 
                        variant="outline" 
                        className="w-fit bg-secondary/10 text-secondary border-secondary/20"
                      >
                        {exp.type}
                      </Badge>
                    </div>
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

export default Experience;
