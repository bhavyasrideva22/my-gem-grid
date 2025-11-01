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
  const skills = [
    "React", "TypeScript", "Tailwind CSS", "HTML", "CSS", "JavaScript",
    "Node.js", "Python", "MongoDB", "REST APIs",
    "Git", "GitHub", "Figma", "Docker", "Flutter"
  ];

  const getSkillIcon = (skillName: string) => {
    const iconClass = "h-20 w-20 rounded object-cover";
    switch (skillName) {
      case "React": return <img src={reactImage} alt="React" className={iconClass} />;
      case "TypeScript": return <img src={typescriptImage} alt="TypeScript" className={iconClass} />;
      case "Tailwind CSS": return <img src={tailwindImage} alt="Tailwind CSS" className={iconClass} />;
      case "HTML": return <img src={htmlImage} alt="HTML" className={iconClass} />;
      case "CSS": return <img src={cssImage} alt="CSS" className={iconClass} />;
      case "JavaScript": return <img src={javascriptImage} alt="JavaScript" className={iconClass} />;
      case "Node.js": return <img src={nodeImage} alt="Node.js" className={iconClass} />;
      case "Python": return <img src={pythonImage} alt="Python" className={iconClass} />;
      case "MongoDB": return <img src={mongodbImage} alt="MongoDB" className={iconClass} />;
      case "REST APIs": return <img src={restImage} alt="REST APIs" className={iconClass} />;
      case "Git": return <img src={gitImage} alt="Git" className={iconClass} />;
      case "GitHub": return <img src={githubImage} alt="GitHub" className={iconClass} />;
      case "Figma": return <img src={figmaImage} alt="Figma" className={iconClass} />;
      case "Docker": return <img src={dockerImage} alt="Docker" className={iconClass} />;
      case "Flutter": return <img src={flutterImage} alt="Flutter" className={iconClass} />;
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
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Skills & Technologies</h2>
          </div>
          
          <div className="p-8 rounded-2xl border border-border bg-card backdrop-blur-sm">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="text-center group"
                >
                  <div className="h-24 w-24 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                    {getSkillIcon(skill)}
                  </div>
                  <h3 className="text-sm md:text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                    {skill}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
