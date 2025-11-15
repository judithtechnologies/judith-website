import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Code, Smartphone, Home, Gamepad2, TrendingUp, CheckCircle, Zap, Shield, Users } from "lucide-react";
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
      title: "Home Automation",
      description: "Smart home solutions that bring convenience and efficiency to your lifestyle.",
    },
    {
      icon: Gamepad2,
      title: "Game Design & Development",
      description: "Immersive gaming experiences across multiple platforms.",
    },
    {
      icon: TrendingUp,
      title: "Social Media Marketing",
      description: "Strategic campaigns that amplify your brand presence and engagement.",
    },
  ];

  const stats = [
    { value: "500+", label: "Projects Completed" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "50+", label: "Team Members" },
    { value: "15+", label: "Years Experience" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-50"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
              Transforming Ideas Into
              <span className="gradient-primary bg-clip-text text-transparent"> Digital Excellence</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              We craft innovative web and mobile solutions that drive growth and exceed expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gradient-primary text-primary-foreground text-lg">
                <Link to="/contact">
                  Start Your Project <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg border-2">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-display font-bold gradient-primary bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions tailored to elevate your digital presence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-medium transition-smooth border-2 hover:border-primary/50">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-lg gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                    <service.icon className="text-primary-foreground" size={28} />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="border-2">
              <Link to="/services">
                View All Services <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Why Choose Judith Technologies?</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We combine expertise, innovation, and dedication to deliver exceptional results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Zap, title: "Fast Delivery", description: "Efficient timelines without compromising quality" },
                { icon: Shield, title: "Secure Solutions", description: "Enterprise-grade security in every project" },
                { icon: Users, title: "Expert Team", description: "Seasoned professionals with proven track records" },
                { icon: CheckCircle, title: "Quality Assured", description: "Rigorous testing and quality control" },
              ].map((item, index) => (
                <div key={index} className="text-center p-6 rounded-lg hover:bg-secondary/50 transition-smooth">
                  <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
                    <item.icon className="text-primary-foreground" size={32} />
                  </div>
                  <h3 className="text-lg font-display font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg" className="gradient-primary text-primary-foreground">
                <Link to="/why-choose-us">
                  Learn More About Us <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Let's bring your vision to life with cutting-edge technology and expert craftsmanship.
            </p>
            <Button asChild size="lg" variant="secondary" className="text-lg">
              <Link to="/contact">
                Get In Touch <ArrowRight className="ml-2" size={20} />
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
