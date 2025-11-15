import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Code, Smartphone, Home, Database, Users, TrendingUp, CheckCircle, Zap, Shield } from "lucide-react";
import heroImage from "@/assets/hero-background.jpg";

const Index = () => {
  const services = [
    {
      icon: Code,
      title: "Web Design & Development",
      description: "Custom, responsive websites that captivate and convert your audience.",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile solutions for iOS and Android.",
    },
    {
      icon: Home,
      title: "IoT Applications",
      description: "Connected IoT solutions that bridge the physical and digital worlds.",
    },
    {
      icon: Database,
      title: "Big Data",
      description: "Transform massive datasets into actionable business intelligence.",
    },
    {
      icon: TrendingUp,
      title: "Social Media Marketing",
      description: "Strategic campaigns that amplify your brand presence and engagement.",
    },
    {
      icon: Users,
      title: "Recruitment",
      description: "Find and hire top talent with comprehensive recruitment solutions.",
    },
  ];

  const stats = [
    { value: "65+", label: "Projects Completed" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "30+", label: "Team Members" },
    { value: "15+", label: "Years Experience" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-32 overflow-hidden min-h-[90vh] flex items-center">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-6xl">
            <h1 className="mb-8 leading-none">
              WE CREATE
              <br />
              <span className="text-primary">DIGITAL</span>
              <br />
              EXPERIENCES
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground mb-12 max-w-3xl font-medium">
              FOR AMBITIOUS BRANDS
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base uppercase tracking-wider font-bold px-10 py-7">
                <Link to="/contact">
                  Start Project <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base uppercase tracking-wider font-bold px-10 py-7 border-2 border-foreground hover:bg-foreground hover:text-background">
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-32 max-w-6xl">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-5xl md:text-6xl font-black mb-2 text-primary">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium uppercase tracking-wider text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-32 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="mb-20">
            <h2 className="mb-6">
              OUR
              <br />
              <span className="text-primary">SERVICES</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl font-medium">
              COMPREHENSIVE SOLUTIONS FOR YOUR DIGITAL SUCCESS
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-2 border-border hover:border-primary transition-smooth group bg-background">
                <CardContent className="p-8">
                  <service.icon className="w-16 h-16 mb-6 text-primary" strokeWidth={1.5} />
                  <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Link to="/services" className="inline-flex items-center text-primary font-bold uppercase text-sm tracking-wider hover:gap-3 transition-all">
                    Learn More <ArrowRight size={16} className="ml-2" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Preview */}
      <section className="py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="mb-20">
              <h2 className="mb-6">
                WHY CHOOSE
                <br />
                <span className="text-primary">JUDITH</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="border-l-4 border-primary pl-8 py-4">
                  <Zap className="w-12 h-12 text-primary mb-4" strokeWidth={1.5} />
                  <h3 className="text-2xl font-black mb-3 uppercase tracking-tight">Cutting-Edge Technology</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We leverage the latest technologies to build future-proof solutions.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-8 py-4">
                  <Shield className="w-12 h-12 text-primary mb-4" strokeWidth={1.5} />
                  <h3 className="text-2xl font-black mb-3 uppercase tracking-tight">Proven Track Record</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    500+ successful projects with 98% client satisfaction rate.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="border-l-4 border-primary pl-8 py-4">
                  <Users className="w-12 h-12 text-primary mb-4" strokeWidth={1.5} />
                  <h3 className="text-2xl font-black mb-3 uppercase tracking-tight">Expert Team</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    50+ talented professionals dedicated to your success.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-8 py-4">
                  <CheckCircle className="w-12 h-12 text-primary mb-4" strokeWidth={1.5} />
                  <h3 className="text-2xl font-black mb-3 uppercase tracking-tight">End-to-End Support</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    From concept to launch and beyond, we're with you every step.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl">
            <h2 className="mb-8 text-primary-foreground">
              READY TO
              <br />
              START YOUR
              <br />
              PROJECT?
            </h2>
            <p className="text-2xl md:text-3xl mb-12 font-medium opacity-90">
              LET'S CREATE SOMETHING EXTRAORDINARY TOGETHER
            </p>
            <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90 text-base uppercase tracking-wider font-bold px-10 py-7">
              <Link to="/contact">
                Get in Touch <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
