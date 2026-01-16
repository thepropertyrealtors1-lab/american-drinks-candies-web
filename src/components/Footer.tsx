import { Link } from "wouter";
import logo from "../assets/images/logo/logo.png";
import {
  FOOTER_CONTACTS,
  FOOTER_PRODUCTS,
  FOOTER_QUICKLINKS,
} from "../constants/footer.constants.ts";

export function Footer() {
  return (
    <footer className="bg-black text-white border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand & Contact */}
          <div className="md:col-span-3 space-y-6">
            <Link href="/">
              <img src={logo} alt="Logo" className="logo" />
            </Link>

            <div className="space-y-4">
              {FOOTER_CONTACTS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  <Icon className="h-4 w-4 text-primary" />
                  <span className="truncate">{label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quicklinks */}
          <div className="md:col-span-2 space-y-6">
            <h4 className="font-display text-lg font-bold uppercase tracking-wider">
              Quicklinks
            </h4>
            <ul className="space-y-3">
              {FOOTER_QUICKLINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products & Brands */}
          <div className="md:col-span-7 space-y-6">
            <h4 className="font-display text-lg font-bold uppercase tracking-wider">
              Products & Brands
            </h4>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3">
              {FOOTER_PRODUCTS.map((group, idx) => (
                <ul
                  key={idx}
                  className={`space-y-3 ${idx === 2 ? "hidden lg:block" : ""}`}
                >
                  {group.map((item) => (
                    <li key={item}>
                      <Link
                        href="/products"
                        className="text-gray-400 hover:text-primary transition-colors text-sm block"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-16 pt-8 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} American Drinks & Candies. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
