import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Code, Smartphone, Home, Users, TrendingUp, ArrowRight, CheckCircle } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Design & Development",
      description: "Create stunning, responsive websites that drive engagement and conversions.",
      features: [
        "Custom Website Design",
        "E-commerce Solutions",
        "Content Management Systems",
        "Progressive Web Applications",
        "Website Maintenance & Support",
        "Performance Optimization",
      ],
      technologies: ["React", "Next.js", "Vue.js", "Node.js", "WordPress", "Shopify"],
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Build powerful native and cross-platform mobile applications for iOS and Android.",
      features: [
        "Native iOS Development",
        "Native Android Development",
        "Cross-Platform Solutions",
        "App Store Optimization",
        "App Maintenance & Updates",
        "API Integration",
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "AWS"],
    },
    {
      icon: Home,
      title: "IoT Applications",
      description: "Build connected IoT solutions that bridge the physical and digital worlds.",
      features: [
        "IoT Device Integration",
        "Sensor Data Analytics",
        "Real-time Monitoring Systems",
        "Cloud IoT Platforms",
        "Edge Computing Solutions",
        "Industrial IoT Solutions",
      ],
      technologies: ["MQTT", "AWS IoT", "Azure IoT", "Arduino", "Raspberry Pi", "LoRaWAN"],
    },
    {
      icon: Users,
      title: "Recruitment",
      description: "Find and hire top talent with our comprehensive recruitment solutions.",
      features: [
        "Technical Talent Sourcing",
        "Candidate Screening & Assessment",
        "Interview Coordination",
        "Employer Branding",
        "Recruitment Process Optimization",
        "Talent Pool Management",
      ],
      technologies: ["LinkedIn", "Indeed", "Greenhouse", "Workday", "ATS Systems", "HireVue"],
    },
    {
      icon: TrendingUp,
      title: "Social Media Marketing",
      description: "Amplify your brand presence and engage your audience across all platforms.",
      features: [
        "Social Media Strategy",
        "Content Creation & Management",
        "Paid Advertising Campaigns",
        "Influencer Marketing",
        "Analytics & Reporting",
        "Community Management",
      ],
      technologies: ["Facebook Ads", "Instagram", "LinkedIn", "Twitter", "TikTok", "Google Analytics"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-40 pb-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl">
            <h1 className="mb-8 leading-none">
              OUR
              <br />
              <span className="text-primary">SERVICES</span>
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground max-w-4xl font-medium">
              COMPREHENSIVE DIGITAL SOLUTIONS TO TRANSFORM YOUR BUSINESS
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-7xl mx-auto space-y-20">
            {services.map((service, index) => (
              <div key={index} className="border-4 border-border hover:border-primary transition-smooth bg-background">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                  {/* Service Icon & Title */}
                  <div className="lg:col-span-2 p-12 lg:p-16 bg-primary text-primary-foreground flex flex-col justify-center">
                    <service.icon className="w-20 h-20 mb-8" strokeWidth={1.5} />
                    <h3 className="text-4xl font-black mb-6 uppercase tracking-tight leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-primary-foreground/90 text-lg leading-relaxed font-medium">
                      {service.description}
                    </p>
                  </div>

                  {/* Service Details */}
                  <div className="lg:col-span-3 p-12 lg:p-16">
                    <div className="mb-12">
                      <h4 className="text-xl font-black mb-6 uppercase tracking-wider flex items-center">
                        <CheckCircle className="mr-3 text-primary" size={28} strokeWidth={2} />
                        Key Features
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start">
                            <ArrowRight className="mr-3 text-primary mt-1 flex-shrink-0" size={20} strokeWidth={2} />
                            <span className="text-foreground font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-black mb-6 uppercase tracking-wider">Technologies</h4>
                      <div className="flex flex-wrap gap-3">
                        {service.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-5 py-3 border-2 border-border hover:border-primary text-foreground font-bold text-sm uppercase tracking-wider transition-smooth"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl">
            <h2 className="mb-8 text-primary-foreground">
              LET'S BUILD
              <br />
              SOMETHING
              <br />
              <span className="text-background">AMAZING</span>
            </h2>
            <p className="text-2xl md:text-3xl mb-12 font-medium opacity-90">
              TRANSFORM YOUR DIGITAL PRESENCE TODAY
            </p>
            <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90 text-base uppercase tracking-wider font-bold px-10 py-7">
              <Link to="/contact">
                Start Project <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
