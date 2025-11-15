import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Award, Users, Lightbulb, Heart } from "lucide-react";
const About = () => {
  const values = [{
    icon: Lightbulb,
    title: "Innovation",
    description: "We constantly explore cutting-edge technologies to deliver forward-thinking solutions."
  }, {
    icon: Users,
    title: "Collaboration",
    description: "We work closely with clients as partners, ensuring their vision becomes reality."
  }, {
    icon: Award,
    title: "Excellence",
    description: "We maintain the highest standards in every project, from concept to delivery."
  }, {
    icon: Heart,
    title: "Integrity",
    description: "We build lasting relationships through transparency, honesty, and accountability."
  }];
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">ABOUT JUDITH TECH  </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A pioneering force in digital innovation, dedicated to transforming businesses through technology.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-display font-bold mb-8 text-center">Our Story</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Founded with a vision to bridge the gap between technology and business success, Judith Technologies has grown from a small startup to a leading digital agency serving clients worldwide. Our journey began with a simple belief: that exceptional technology solutions should be accessible to businesses of all sizes.
              </p>
              <p>
                Over the years, we've assembled a team of passionate technologists, creative designers, and strategic thinkers who share our commitment to excellence. Together, we've delivered hundreds of successful projects, ranging from sleek web applications to complex enterprise solutions.
              </p>
              <p>
                Today, Judith Technologies stands as a trusted partner for businesses seeking to leverage technology for growth. Our diverse portfolio spans multiple industries, and our expertise covers the full spectrum of digital services—from web and mobile development to home automation and digital marketing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-2">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-lg gradient-primary flex items-center justify-center mb-6">
                  <Target className="text-primary-foreground" size={32} />
                </div>
                <h2 className="text-3xl font-display font-bold mb-4">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To empower businesses with innovative digital solutions that drive growth, enhance user experiences, and create lasting value. We are committed to delivering excellence through cutting-edge technology, creative design, and unwavering dedication to our clients' success.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-lg gradient-primary flex items-center justify-center mb-6">
                  <Eye className="text-primary-foreground" size={32} />
                </div>
                <h2 className="text-3xl font-display font-bold mb-4">Our Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be the global leader in digital innovation, recognized for transforming industries through technology. We envision a future where every business, regardless of size, has access to world-class digital solutions that enable them to compete and thrive in the digital age.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-center">Our Core Values</h2>
            <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              The principles that guide every decision we make and every solution we create
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => <Card key={index} className="border-2 hover:shadow-medium transition-smooth">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-14 h-14 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                        <value.icon className="text-primary-foreground" size={28} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-display font-semibold mb-3">{value.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Our Team</h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Each team member brings unique skills and perspectives, enabling us to tackle complex challenges and deliver comprehensive solutions. Together, we form a cohesive unit committed to excellence and client success.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default About;