import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Code, Smartphone, Home, Gamepad2, TrendingUp, ArrowRight, CheckCircle } from "lucide-react";

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
      title: "Home Automation",
      description: "Transform your living space with intelligent automation solutions.",
      features: [
        "Smart Home Integration",
        "IoT Device Setup",
        "Voice Control Systems",
        "Security & Surveillance",
        "Energy Management",
        "Custom Automation Scenarios",
      ],
      technologies: ["HomeKit", "Alexa", "Google Home", "Zigbee", "Z-Wave", "MQTT"],
    },
    {
      icon: Gamepad2,
      title: "Game Design & Development",
      description: "Craft immersive gaming experiences across multiple platforms.",
      features: [
        "2D & 3D Game Development",
        "Mobile Game Creation",
        "PC & Console Games",
        "Game Art & Animation",
        "Multiplayer Integration",
        "Monetization Strategies",
      ],
      technologies: ["Unity", "Unreal Engine", "Godot", "Blender", "Photon", "PlayFab"],
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
      <section className="pt-32 pb-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive digital solutions designed to transform your business and drive measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto space-y-16">
            {services.map((service, index) => (
              <Card key={index} className="border-2 hover:shadow-medium transition-smooth overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                    {/* Service Icon & Title */}
                    <div className="lg:col-span-2 gradient-primary p-8 lg:p-12 flex flex-col justify-center">
                      <div className="w-20 h-20 rounded-lg bg-white/20 flex items-center justify-center mb-6">
                        <service.icon className="text-primary-foreground" size={40} />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
                        {service.title}
                      </h2>
                      <p className="text-primary-foreground/90 text-lg leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Service Details */}
                    <div className="lg:col-span-3 p-8 lg:p-12">
                      <div className="mb-8">
                        <h3 className="text-xl font-display font-semibold mb-4">What We Offer</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start space-x-2">
                              <CheckCircle className="text-primary flex-shrink-0 mt-0.5" size={20} />
                              <span className="text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-display font-semibold mb-4">Technologies We Use</h3>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-4 py-2 rounded-full bg-secondary text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how our services can help achieve your business goals.
            </p>
            <Button asChild size="lg" className="gradient-primary text-primary-foreground text-lg">
              <Link to="/contact">
                Contact Us Today <ArrowRight className="ml-2" size={20} />
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
