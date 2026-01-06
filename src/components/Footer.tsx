import { Link } from "wouter";
import { Mail, Phone } from "lucide-react";
import logo from "../assets/images/logo/logo.png";

export function Footer() {
  return (
    <footer className="bg-black text-white border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand & Contact */}
          <div className="md:col-span-3 space-y-6">
            <div>
              <Link href="/">
                <img src={logo} className="logo" />
              </Link>
            </div>
            <div className="space-y-4">
              <a
                href="mailto:sales@americandrinks.com"
                className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors group text-sm"
              >
                <Mail className="h-4 w-4 text-primary" />
                <span>sales@americandrinks.com</span>
              </a>
              <a
                href="tel:19546042925"
                className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors group text-sm"
              >
                <Phone className="h-4 w-4 text-primary" />
                <span>(954) 604-2925</span>
              </a>
            </div>
          </div>

          {/* Quicklinks */}
          <div className="md:col-span-2 space-y-6">
            <h4 className="font-display text-lg font-bold uppercase tracking-wider text-white">
              Quicklinks
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products & Brands */}
          <div className="md:col-span-7 space-y-6">
            <h4 className="font-display text-lg font-bold uppercase tracking-wider text-white">
              Products & Brands
            </h4>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3">
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/products"
                    className="text-gray-400 hover:text-primary transition-colors text-sm block"
                  >
                    Coke
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products"
                    className="text-gray-400 hover:text-primary transition-colors text-sm block"
                  >
                    Fanta
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products"
                    className="text-gray-400 hover:text-primary transition-colors text-sm block"
                  >
                    Minute Maid
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products"
                    className="text-gray-400 hover:text-primary transition-colors text-sm block"
                  >
                    Pepsi
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products"
                    className="text-gray-400 hover:text-primary transition-colors text-sm block"
                  >
                    Dr. Pepper
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products"
                    className="text-gray-400 hover:text-primary transition-colors text-sm block"
                  >
                    7up
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products"
                    className="text-gray-400 hover:text-primary transition-colors text-sm block"
                  >
                    Gatorade
                  </Link>
                </li>
              </ul>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/products"
                    className="text-gray-400 hover:text-primary transition-colors text-sm block"
                  >
                    Celsius Energy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products"
                    className="text-gray-400 hover:text-primary transition-colors text-sm block"
                  >
                    Monster Energy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products"
                    className="text-gray-400 hover:text-primary transition-colors text-sm block"
                  >
                    Redbull Energy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products"
                    className="text-gray-400 hover:text-primary transition-colors text-sm block"
                  >
                    Ghost Energy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products"
                    className="text-gray-400 hover:text-primary transition-colors text-sm block"
                  >
                    Prime Hydration
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products"
                    className="text-gray-400 hover:text-primary transition-colors text-sm block"
                  >
                    Fiji Water
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products"
                    className="text-gray-400 hover:text-primary transition-colors text-sm block"
                  >
                    Essentia Water
                  </Link>
                </li>
              </ul>
              <ul className="space-y-3 hidden lg:block">
                <li>
                  <Link
                    href="/products"
                    className="text-gray-400 hover:text-primary transition-colors text-sm block"
                  >
                    Dasani Water
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products"
                    className="text-gray-400 hover:text-primary transition-colors text-sm block"
                  >
                    Aquafina Water
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products"
                    className="text-gray-400 hover:text-primary transition-colors text-sm block"
                  >
                    V8
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products"
                    className="text-gray-400 hover:text-primary transition-colors text-sm block"
                  >
                    Yohoo Glass
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products"
                    className="text-gray-400 hover:text-primary transition-colors text-sm block"
                  >
                    Mistic
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products"
                    className="text-gray-400 hover:text-primary transition-colors text-sm block"
                  >
                    Takis
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products"
                    className="text-gray-400 hover:text-primary transition-colors text-sm block"
                  >
                    Pringles
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col lg:flex-row justify-between items-center gap-6 text-xs text-gray-500">
          <p>All Rights Reserved. American Drinks & Candies</p>
          <p className="text-center">
            This site is protected by reCAPTCHA and the Google
            <a
              href="#"
              className="text-white hover:text-primary transition-colors mx-1"
            >
              Privacy Policy
            </a>{" "}
            and
            <a
              href="#"
              className="text-white hover:text-primary transition-colors mx-1"
            >
              Terms of Service
            </a>{" "}
            apply
          </p>
          <p>
            American Drinks & Candies Design By:{" "}
            <span className="text-primary font-bold uppercase">
              Replit Agent
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
