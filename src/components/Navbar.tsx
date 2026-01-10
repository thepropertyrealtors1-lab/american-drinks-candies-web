import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "../assets/images/logo/logo.png";
import "../assets/scss/Navbar.css";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/products", label: "Products" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-black border-b border-primary/20 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 items-center h-20">
          {/* Logo */}
          <div>
            <Link href="/">
              <img
                src={logo}
                className="h-17 max-w-60 object-contain md:logo"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-center">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-sans font-bold text-sm uppercase tracking-widest transition-colors hover:text-primary",
                  location === link.href ? "text-primary" : "text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="hidden md:flex justify-end">
            <Link
              href="/contact"
              className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded font-bold uppercase tracking-wide text-sm shadow-lg transition-all"
            >
              (954) 604-2925
            </Link>
          </div>

          {/* Mobile Button */}
          <div className="flex items-center justify-end md:hidden col-start-3">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none right-1"
            >
              {isOpen ? (
                <X className="h-8 w-8" />
              ) : (
                <Menu className="h-8 w-8" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-zinc-900 border-t border-zinc-800 animate-in slide-in-from-top-5 duration-200">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "block px-3 py-3 rounded-md text-base font-medium uppercase tracking-wide",
                  location === link.href
                    ? "bg-primary/10 text-primary"
                    : "text-gray-300 hover:text-white hover:bg-zinc-800"
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block w-full text-center mt-4 bg-primary text-white px-4 py-3 rounded font-bold uppercase"
              onClick={() => setIsOpen(false)}
            >
              Get a Fast Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
