import reactImage from "@/assets/react.jpg";
import typescriptImage from "@/assets/ts.jpg";
import tailwindImage from "@/assets/tail.jpg";
import htmlImage from "@/assets/html.jpg";
import cssImage from "@/assets/css.jpg";
import javascriptImage from "@/assets/js.jpg";
import nodeImage from "@/assets/node.jpg";
import pythonImage from "@/assets/python.jpg";
import mongodbImage from "@/assets/mdb.jpg";
import gitImage from "@/assets/git.jpg";
import githubImage from "@/assets/hub.jpg";
import figmaImage from "@/assets/figma.jpg";
import dockerImage from "@/assets/docker.jpg";
import restImage from "@/assets/rest.jpg";
import flutterImage from "@/assets/flutter.jpg";

const Skills = () => {
  const skillGroups: {
    title: string;
    skills: string[];
  }[] = [
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Tailwind CSS"],
    },
    {
      title: "Backend & Database",
      skills: ["Node.js", "REST APIs", "Python", "MongoDB"],
    },
    {
      title: "Tools",
      skills: ["GitHub", "Figma"],
    },
    {
      title: "Frameworks",
      skills: ["Flutter"],
    },
    {
      title: "Programming Languages",
      skills: ["C", "Java"],
    },
  ];

  const getSkillIcon = (skillName: string) => {
    const iconClass = "h-12 w-12 rounded object-cover";
    switch (skillName) {
      case "React": return <img src={reactImage} alt="React" className={iconClass} />;
      case "TypeScript": return <img src={typescriptImage} alt="TypeScript" className={iconClass} />;
      case "Tailwind CSS": return <img src={tailwindImage} alt="Tailwind CSS" className={iconClass} />;
      case "HTML": return <img src={htmlImage} alt="HTML" className={iconClass} />;
      case "CSS": return <img src={cssImage} alt="CSS" className={iconClass} />;
      case "JavaScript": return <img src={javascriptImage} alt="JavaScript" className={iconClass} />;
      case "Node.js": return <img src={nodeImage} alt="Node.js" className={iconClass} />;
      case "Python": return <img src={pythonImage} alt="Python" className={iconClass} />;
      case "Java": return <img src="/java.jpg" alt="Java" className={iconClass} />;
      case "MongoDB": return <img src={mongodbImage} alt="MongoDB" className={iconClass} />;
      case "REST APIs": return <img src={restImage} alt="REST APIs" className={iconClass} />;
      case "Git": return <img src={gitImage} alt="Git" className={iconClass} />;
      case "GitHub": return <img src={githubImage} alt="GitHub" className={iconClass} />;
      case "Figma": return <img src={figmaImage} alt="Figma" className={iconClass} />;
      case "Docker": return <img src={dockerImage} alt="Docker" className={iconClass} />;
      case "Flutter": return <img src={flutterImage} alt="Flutter" className={iconClass} />;
      case "C": return <img src="/C.jpg" alt="C" className={iconClass} />;
      default: return (
        <span className="text-primary-foreground font-bold text-lg">
          {skillName.charAt(0)}
        </span>
      );
    }
  };

  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Skills & Technologies</h2>
          </div>
          
          <div className="space-y-4">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-xl border border-primary/30 bg-card/60 overflow-hidden"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Left label column */}
                  <div className="md:w-1/5 border-b md:border-b-0 md:border-r border-primary/30 flex items-center justify-center px-3 py-3 bg-background/40">
                    <h3 className="text-lg md:text-xl font-semibold text-foreground">
                      {group.title}
                    </h3>
                  </div>

                  {/* Right skills area */}
                  <div className="flex-1 px-3 md:px-5 py-3">
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 md:gap-5">
                      {group.skills.map((skill) => (
                        <div
                          key={skill}
                          className="flex flex-col items-center gap-2 group"
                        >
                          <div className="h-10 w-10 flex items-center justify-center">
                            {getSkillIcon(skill)}
                          </div>
                          <p className="text-xs md:text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                            {skill}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
