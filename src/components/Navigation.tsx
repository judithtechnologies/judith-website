import { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [{
    to: "/",
    label: "Home"
  }, {
    to: "/about",
    label: "About"
  }, {
    to: "/services",
    label: "Services"
  }, {
    to: "/why-choose-us",
    label: "Why Us"
  }, {
    to: "/contact",
    label: "Contact"
  }];
  return <nav className="fixed top-0 w-full bg-background z-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-24">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center border-2 border-primary">
              <span className="text-primary-foreground font-logo font-bold text-2xl">JT</span>
            </div>
            <span className="font-display font-black text-2xl tracking-tight">JUDITH TECH  </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map(link => <NavLink key={link.to} to={link.to} end={link.to === "/"} className="px-6 py-3 text-foreground hover:text-primary transition-smooth font-semibold text-sm uppercase tracking-wider border-b-2 border-transparent" activeClassName="text-primary border-primary">
                {link.label}
              </NavLink>)}
            <Button asChild className="ml-6 bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wider px-8 py-6">
              <Link to="/contact">Start Project</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 hover:text-primary transition-smooth" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden py-6 border-t border-border">
            <div className="flex flex-col space-y-3">
              {navLinks.map(link => <NavLink key={link.to} to={link.to} end={link.to === "/"} className="px-4 py-4 text-foreground hover:text-primary transition-smooth font-bold uppercase tracking-wider border-b-2 border-transparent" activeClassName="text-primary border-primary" onClick={() => setIsOpen(false)}>
                  {link.label}
                </NavLink>)}
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wider py-6 mt-4">
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Start Project
                </Link>
              </Button>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;