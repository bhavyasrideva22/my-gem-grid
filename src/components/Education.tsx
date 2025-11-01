import { GraduationCap, Calendar, MapPin } from "lucide-react";
import educationImage from "@/assets/education-image.jpg";
import sksdImage from "@/assets/sksd.jpg";
import sfsImage from "@/assets/sfs.jpg";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology & Engineering",
      institution: "Sasi Institute of Technology & Engineering",
      location: "Tadepalligudem, AP, India",
      duration: "2022-2026 | Pursuing",
      gpa: "8.4/10",
      description: "In stream of computer science and technology",
      image: educationImage
    },
    {
      degree: "Board of Intermediate Education",
      institution: "SKSD Mahila Kalasala",
      location: "Tanuku, AP", 
      duration: "2020-2022",
      gpa: "76.3%",
      description: "Completed with focus on Mathematics, Physics, and Chemistry",
      image: sksdImage
    },
    {
      degree: "Board of Secondary Education",
      institution: "SFS EM High School",
      location: "Tanuku, AP",
      duration: "2020",
      gpa: "86.3%",
      description: "Completed secondary education with excellent academic performance",
      image: sfsImage
    }
  ];

  return (
    <section id="education" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">Education</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Building a strong foundation through quality education and continuous learning
            </p>
          </div>
          
          {/* Education Cards */}
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={index} className="bg-white rounded-xl p-4 shadow-md border border-gray-200">
                <div className="flex flex-col lg:flex-row gap-4 items-center">
                  {/* Institution Image */}
                  <div className="flex-shrink-0">
                    <img
                      src={edu.image}
                      alt={edu.institution}
                      className="w-48 h-32 rounded-lg object-cover"
                    />
                  </div>
                  
                  {/* Education Details */}
                  <div className="flex-1 space-y-2">
                    <h3 className="text-lg md:text-xl font-bold text-blue-600">
                      {edu.degree}
                    </h3>
                    <h4 className="text-base md:text-lg font-semibold text-gray-800">
                      {edu.institution}
                    </h4>
                    <p className="text-sm md:text-base font-medium text-green-600">
                      {edu.duration}
                    </p>
                    <p className="text-sm md:text-base text-gray-600">
                      {edu.description}
                    </p>
                    <p className="text-sm md:text-base font-semibold text-blue-600">
                      {index === 0 ? 'CGPA' : 'Percentage'}: {edu.gpa}
                    </p>
                    <p className="text-sm md:text-base text-gray-600">
                      📍 {edu.location}
                    </p>
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

export default Education;
