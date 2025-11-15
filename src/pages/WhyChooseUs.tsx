import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Zap, Shield, Users, CheckCircle, Award, Clock, 
  TrendingUp, Lightbulb, HeadphonesIcon, Globe, 
  Target, Rocket, ArrowRight 
} from "lucide-react";

const WhyChooseUs = () => {
  const advantages = [
    {
      icon: Users,
      title: "Experienced Team",
      description: "Our team comprises seasoned professionals with 15+ years of combined experience in delivering world-class digital solutions. Each project benefits from diverse expertise across development, design, and strategy.",
    },
    {
      icon: Zap,
      title: "Fast Turnaround",
      description: "We understand the importance of time-to-market. Our agile methodology and efficient workflows ensure rapid delivery without compromising quality. Most projects are completed 30% faster than industry standards.",
    },
    {
      icon: Shield,
      title: "Security First",
      description: "Enterprise-grade security is built into every solution. We implement industry best practices, conduct regular security audits, and ensure compliance with international standards like GDPR and ISO 27001.",
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Rigorous testing protocols ensure bug-free, performant solutions. Every deliverable undergoes multiple quality checks, automated testing, and real-world scenario validation before deployment.",
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Our work has earned recognition from leading industry bodies and publications. We've received multiple awards for innovation, design excellence, and client satisfaction.",
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "98% of our projects are delivered on or before the deadline. We use sophisticated project management tools and maintain transparent communication to ensure timely completion.",
    },
    {
      icon: TrendingUp,
      title: "Scalable Solutions",
      description: "We build with the future in mind. Our solutions are designed to scale seamlessly as your business grows, handling increased traffic and functionality without major overhauls.",
    },
    {
      icon: Lightbulb,
      title: "Innovation Driven",
      description: "We stay ahead of technology trends, continuously exploring emerging technologies and methodologies. This ensures our clients benefit from cutting-edge solutions that provide competitive advantages.",
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      description: "Post-launch support is where many agencies fall short—not us. Our dedicated support team is available round-the-clock to address issues, implement updates, and ensure smooth operations.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "While based locally, we serve clients worldwide. Our experience spans multiple markets, cultures, and regulatory environments, enabling us to deliver solutions that work globally.",
    },
    {
      icon: Target,
      title: "Results Focused",
      description: "We don't just build products—we drive outcomes. Every solution is aligned with your business objectives, with clear KPIs and measurable results that demonstrate ROI.",
    },
    {
      icon: Rocket,
      title: "Future Ready",
      description: "We prepare your business for tomorrow's challenges today. Our forward-thinking approach incorporates flexibility and adaptability, ensuring longevity and relevance of your digital assets.",
    },
  ];

  const differentiators = [
    {
      title: "Client Partnership Approach",
      description: "Unlike agencies that treat clients as transactions, we build genuine partnerships. We invest in understanding your business deeply, becoming an extension of your team rather than just a vendor.",
    },
    {
      title: "Transparent Communication",
      description: "No black boxes or surprises. We maintain open communication channels, provide regular progress updates, and involve clients in key decisions. You always know exactly where your project stands.",
    },
    {
      title: "Custom Solutions, Not Templates",
      description: "While others rely on cookie-cutter templates, we create bespoke solutions tailored to your unique needs. Every line of code, every design element is crafted specifically for your business.",
    },
    {
      title: "Post-Launch Excellence",
      description: "Our commitment doesn't end at launch. We provide comprehensive training, documentation, and ongoing support to ensure your team can leverage the full potential of your new solution.",
    },
    {
      title: "Technology Agnostic",
      description: "We choose technologies based on what's best for your project, not what we prefer. This unbiased approach ensures optimal solutions rather than forcing square pegs into round holes.",
    },
    {
      title: "Competitive Pricing",
      description: "Premium quality doesn't have to mean premium prices. Our efficient processes and long-term client relationships allow us to offer exceptional value without sacrificing quality.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Why Choose Judith Technologies?</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Discover what sets us apart and makes us the preferred partner for businesses seeking digital excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Our Advantages */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Our Competitive Advantages</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                These are the qualities that make us stand out in a crowded marketplace
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advantages.map((advantage, index) => (
                <Card key={index} className="border-2 hover:shadow-medium transition-smooth group">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-lg gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                      <advantage.icon className="text-primary-foreground" size={28} />
                    </div>
                    <h3 className="text-xl font-display font-semibold mb-3">{advantage.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How We're Different */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">How We're Different</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                In a sea of digital agencies, here's what truly differentiates Judith Technologies
              </p>
            </div>

            <div className="space-y-6">
              {differentiators.map((item, index) => (
                <Card key={index} className="border-2">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-primary-foreground font-display font-bold text-xl">
                          {index + 1}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-display font-semibold mb-3">{item.title}</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-12 text-center">By The Numbers</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 rounded-lg bg-secondary/50">
                <div className="text-5xl font-display font-bold gradient-primary bg-clip-text text-transparent mb-2">
                  500+
                </div>
                <div className="text-muted-foreground font-medium">Successful Projects</div>
              </div>
              <div className="text-center p-6 rounded-lg bg-secondary/50">
                <div className="text-5xl font-display font-bold gradient-primary bg-clip-text text-transparent mb-2">
                  98%
                </div>
                <div className="text-muted-foreground font-medium">Client Satisfaction Rate</div>
              </div>
              <div className="text-center p-6 rounded-lg bg-secondary/50">
                <div className="text-5xl font-display font-bold gradient-primary bg-clip-text text-transparent mb-2">
                  15+
                </div>
                <div className="text-muted-foreground font-medium">Years of Experience</div>
              </div>
              <div className="text-center p-6 rounded-lg bg-secondary/50">
                <div className="text-5xl font-display font-bold gradient-primary bg-clip-text text-transparent mb-2">
                  50+
                </div>
                <div className="text-muted-foreground font-medium">Expert Team Members</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-6">
              Experience The Judith Technologies Difference
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Join hundreds of satisfied clients who chose excellence. Let's build something extraordinary together.
            </p>
            <Button asChild size="lg" variant="secondary" className="text-lg">
              <Link to="/contact">
                Start Your Project <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhyChooseUs;
