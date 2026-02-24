import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "bhavyadeva2329@gmail.com",
      href: "mailto:bhavyadeva2329@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7670929939",
      href: "tel:+91 7670929939"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Tanuku, AP, 534211",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Get In Touch</h2>
          </div>
          
          <div className="space-y-6 max-w-xl mx-auto">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.href}
                className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
              >
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <info.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{info.label}</h3>
                  <p className="text-base text-muted-foreground">{info.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
