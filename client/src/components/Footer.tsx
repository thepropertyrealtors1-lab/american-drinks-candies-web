import { Link } from "wouter";
import { Mail, MapPin, Phone, Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-zinc-950 text-white border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-display font-bold text-primary tracking-tighter">
              AMERICAN DRINKS & CANDIES
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Your premier partner for exporting top-rated American beverages and confectionery worldwide. Bulk wholesale distribution made simple.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-zinc-400 hover:text-primary transition-colors"><Facebook className="h-5 w-5"/></a>
              <a href="#" className="text-zinc-400 hover:text-primary transition-colors"><Instagram className="h-5 w-5"/></a>
              <a href="#" className="text-zinc-400 hover:text-primary transition-colors"><Twitter className="h-5 w-5"/></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-bold uppercase tracking-wider">Explore</h4>
            <ul className="space-y-2">
              <li><Link href="/products" className="text-zinc-400 hover:text-primary text-sm transition-colors">All Products</Link></li>
              <li><Link href="/about" className="text-zinc-400 hover:text-primary text-sm transition-colors">About Us</Link></li>
              <li><Link href="/quote" className="text-zinc-400 hover:text-primary text-sm transition-colors">Request Quote</Link></li>
              <li><Link href="/contact" className="text-zinc-400 hover:text-primary text-sm transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-bold uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-zinc-400 text-sm">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span>1234 Commerce Blvd, Miami, FL 33178, USA</span>
              </li>
              <li className="flex items-center gap-3 text-zinc-400 text-sm">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span>+1 (305) 555-0123</span>
              </li>
              <li className="flex items-center gap-3 text-zinc-400 text-sm">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span>sales@americandrinks.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter (Visual only) */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-bold uppercase tracking-wider">Newsletter</h4>
            <p className="text-zinc-400 text-sm">Subscribe for wholesale updates and new product alerts.</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter email" 
                className="bg-zinc-900 border border-zinc-800 text-white text-sm px-4 py-2 w-full rounded focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              />
              <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded font-bold uppercase text-xs">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-zinc-900 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-xs">© 2024 American Drinks & Candies. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-zinc-500 hover:text-white text-xs">Privacy Policy</a>
            <a href="#" className="text-zinc-500 hover:text-white text-xs">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
