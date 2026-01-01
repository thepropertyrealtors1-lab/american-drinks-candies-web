import { Link } from "wouter";
import { Mail, MapPin, Phone, Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-display font-bold text-white tracking-tighter uppercase">
              AMERICAN<span className="text-primary"> DRINKS</span> & CANDIES
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your premier partner for exporting top-rated American beverages and confectionery worldwide. Bulk wholesale distribution made simple.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-bold uppercase tracking-wider text-primary">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-300 text-sm">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span>Miami, FL, USA</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300 text-sm">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span>(954) 604-2925</span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-bold uppercase tracking-wider text-primary">Need a Quote?</h4>
            <p className="text-gray-300 text-sm">We typically respond within 24 hours.</p>
            <Link href="/quote" className="inline-block bg-primary text-white px-6 py-2 rounded font-bold uppercase text-sm">Request Pricing</Link>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 text-center">
          <p className="text-gray-400 text-xs">© 2026 AMERICAN DRINKS & CANDIES. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
