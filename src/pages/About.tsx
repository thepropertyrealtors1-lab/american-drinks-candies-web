import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Award, Globe, Heart, ShieldCheck } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background font-sans flex flex-col">
      <Navbar />

      <div className="bg-secondary py-20 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">About Us</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Connecting the world with authentic American flavors since 2010.
        </p>
      </div>

      <main className="flex-grow">
        {/* Story Section */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold text-secondary mb-6">Our Mission</h2>
              <div className="h-1 w-20 bg-primary mb-8"></div>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  At American Drinks & Candies, we believe that taste knows no borders. Founded in Miami, a global gateway for trade, we started with a simple mission: to make America's most beloved snacks and beverages accessible to everyone, everywhere.
                </p>
                <p>
                  What began as a small distribution operation has grown into a premier export company, serving wholesalers, retailers, and distributors in over 50 countries. We bridge the gap between top American manufacturers and international markets.
                </p>
                <p>
                  We pride ourselves on efficiency, reliability, and competitive pricing. Whether you are a small boutique shop in Europe or a large supermarket chain in Asia, we treat every order with the same level of care and professionalism.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-primary/10 z-10"></div>
              <img 
                src="https://pixabay.com/get/gb0e24b098d95a5e7336fc236cae4e7ea29473933b0e8116223bb2b1015d9cc0d4213594cf90e6574fb1a7b76a0b90fe0e8a517886ae977642846ac9f2da8f7f7_1280.jpg" 
                alt="Logistics warehouse" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-display font-bold text-secondary mb-4">Why Choose Us?</h2>
              <div className="h-1 w-20 bg-primary mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: ShieldCheck, title: "Reliability", desc: "We deliver on time, every time. Our logistics network is optimized for global efficiency." },
                { icon: Award, title: "Quality", desc: "100% authentic products sourced directly from manufacturers." },
                { icon: Heart, title: "Service", desc: "Dedicated account managers who understand your market needs." },
                { icon: Globe, title: "Reach", desc: "Experience in navigating complex international customs and regulations." },
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow border-t-4 border-primary">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                    <item.icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-display font-bold text-xl mb-3">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
