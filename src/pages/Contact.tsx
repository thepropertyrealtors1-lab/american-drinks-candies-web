import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { RequestPricingForm } from "@/components/RequestPricingForm";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background font-sans flex flex-col">
      <Navbar />

    
      <main className="flex-grow py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
       <RequestPricingForm/>
      </main>

      <Footer />
    </div>
  );
}
