import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
const Footer = () => {
  return <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-xl">JT</span>
              </div>
              <span className="font-display font-bold text-lg">Judith Technologies    </span>
            </div>
            <p className="text-muted-foreground mb-4">
              Leading the future of digital innovation with cutting-edge web and mobile solutions.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 rounded-lg bg-background hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-smooth">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-background hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-smooth">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-background hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-smooth">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-background hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-smooth">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-smooth">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-smooth">
                  About 
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-smooth">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/why-choose-us" className="text-muted-foreground hover:text-primary transition-smooth">
                  Why Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-smooth">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">Web Design & Development</li>
              <li className="text-muted-foreground">Mobile App Development</li>
              <li className="text-muted-foreground">Home Automation</li>
              <li className="text-muted-foreground">Game Design & Development</li>
              <li className="text-muted-foreground">Social Media Marketing</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-muted-foreground">
                <MapPin size={20} className="mt-0.5 flex-shrink-0 text-primary" />
                <span>123 Tech Street, Innovation City, IC 12345</span>
              </li>
              <li className="flex items-center space-x-3 text-muted-foreground">
                <Phone size={20} className="flex-shrink-0 text-primary" />
                <span>+91 6300369782</span>
              </li>
              <li className="flex items-center space-x-3 text-muted-foreground">
                <Mail size={20} className="flex-shrink-0 text-primary" />
                <span>info@judithtech.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Judith Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;