import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background font-sans flex flex-col">
      <Navbar />

      <div className="bg-secondary py-20 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">Contact Us</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Have a question or need support? We're here to help.
        </p>
      </div>

      <main className="flex-grow py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Cards */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <MapPin className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-display font-bold text-xl mb-2">Our Headquarters</h3>
              <p className="text-gray-600 mb-4">1234 Commerce Blvd<br/>Miami, FL 33178<br/>United States</p>
              <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="text-primary font-bold text-sm uppercase hover:underline">View on Map</a>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <Phone className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-display font-bold text-xl mb-2">Phone</h3>
              <p className="text-gray-600 mb-4">Main: +1 (305) 555-0123<br/>Fax: +1 (305) 555-0124</p>
              <p className="text-xs text-gray-400">Monday - Friday, 9am - 6pm EST</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <Mail className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-display font-bold text-xl mb-2">Email</h3>
              <p className="text-gray-600 mb-4">Sales: sales@americandrinks.com<br/>Support: help@americandrinks.com</p>
            </div>
          </div>

          {/* Map Area */}
          <div className="lg:col-span-2 h-full min-h-[400px] bg-gray-100 rounded-xl overflow-hidden relative shadow-inner">
            <div className="absolute inset-0 flex items-center justify-center text-gray-400 flex-col gap-4 bg-gray-200">
               <MapPin className="h-16 w-16" />
               <p className="font-bold">Google Maps Integration Placeholder</p>
            </div>
            {/* Embed actual map iframe here in production */}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
