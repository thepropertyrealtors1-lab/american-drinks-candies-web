import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Package, Globe, Award, Truck, ChevronLeft, ChevronRight } from "lucide-react";
import { useProducts } from "@/hooks/use-products";
import { useCategories } from "@/hooks/use-categories";
import { ProductCard } from "@/components/ProductCard";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useState } from "react";

export default function Home() {
  const { data: products, isLoading: productsLoading } = useProducts();
  const { data: categories, isLoading: categoriesLoading } = useCategories();
  const [sliderIndex, setSliderIndex] = useState(0);

  const featuredProducts = products?.filter(p => p.isFeatured).slice(0, 4) || [];
  const allProductsForSlider = products || [];
  
  const handleSliderNext = () => {
    setSliderIndex((prev) => (prev + 1) % Math.max(allProductsForSlider.length - 4, 1));
  };

  const handleSliderPrev = () => {
    setSliderIndex((prev) => (prev - 1 + Math.max(allProductsForSlider.length - 4, 1)) % Math.max(allProductsForSlider.length - 4, 1));
  };

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* HERO SECTION - REPLICA OF SIPNSNACK */}
        <section className="relative min-h-[600px] flex items-center bg-[#002B49] overflow-hidden py-20">
          <div className="absolute inset-0 z-0 opacity-20">
            <img 
              src="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2070" 
              alt="Background" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="relative z-20 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-white"
            >
              <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
                Global Beverage & <br />
                <span className="text-[#00A9E0]">Snack Exporter</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8 max-w-xl">
                SipNSnack is your trusted partner for exporting US snack and beverage brands from our shores to your stores!
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/quote" className="bg-[#E87722] hover:bg-[#D66A1F] text-white px-8 py-4 rounded font-bold uppercase tracking-widest transition-all">
                  Request Pricing
                </Link>
              </div>
              <p className="mt-4 text-sm text-gray-400 italic">We Typically Respond Within 24 Hours</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative hidden lg:block"
            >
              <div className="grid grid-cols-3 gap-4">
                <img src="https://sipnsnackinternational.com/wp-content/uploads/2024/06/ghost-energy.png" alt="Ghost" className="animate-bounce" style={{ animationDuration: '3s' }} />
                <img src="https://sipnsnackinternational.com/wp-content/uploads/2024/06/takis.png" alt="Takis" className="animate-bounce" style={{ animationDuration: '4s' }} />
                <img src="https://sipnsnackinternational.com/wp-content/uploads/2024/06/monster-energy.png" alt="Monster" className="animate-bounce" style={{ animationDuration: '5s' }} />
              </div>
            </motion.div>
          </div>
        </section>

        {/* REFRESHING SECTION */}
        <section className="py-20 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 relative">
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-9xl font-bold text-gray-100 uppercase select-none z-0">Refreshment</span>
              <h2 className="relative z-10 text-4xl md:text-5xl font-display font-bold">
                <span className="text-[#002B49]">REFRESHING</span> <span className="text-[#00A9E0]">DRINKS WE DELIVER</span>
              </h2>
            </div>
            
            <div className="flex overflow-hidden relative group">
              <motion.div 
                animate={{ x: [0, -1000] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="flex gap-12 items-center"
              >
                {[...allProductsForSlider, ...allProductsForSlider].map((product, i) => (
                  <div key={i} className="min-w-[200px] text-center group/item cursor-pointer">
                    <motion.img 
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      src={product.imageUrl} 
                      className="h-48 mx-auto object-contain mb-4"
                    />
                    <h3 className="font-bold text-[#002B49] group-hover/item:text-[#00A9E0] transition-colors">{product.name}</h3>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* POWER UP SECTION */}
        <section className="grid grid-cols-1 md:grid-cols-4 min-h-[400px]">
          <div className="bg-[#8DC63F] p-10 flex flex-col justify-center items-center group cursor-pointer overflow-hidden">
            <motion.img whileHover={{ scale: 1.1 }} src="https://sipnsnackinternational.com/wp-content/uploads/2024/06/monster-energy.png" className="h-64 mb-6" />
            <Link href="/quote" className="border-2 border-white text-white px-6 py-2 uppercase font-bold opacity-0 group-hover:opacity-100 transition-opacity">Get Monster</Link>
          </div>
          <div className="bg-[#002B49] p-10 flex flex-col justify-center items-center group cursor-pointer overflow-hidden">
            <motion.img whileHover={{ scale: 1.1 }} src="https://sipnsnackinternational.com/wp-content/uploads/2024/06/beverage-and-snacks-distributor-021.webp" className="h-64 mb-6" />
            <Link href="/quote" className="border-2 border-white text-white px-6 py-2 uppercase font-bold opacity-0 group-hover:opacity-100 transition-opacity">Get RedBull</Link>
          </div>
          <div className="bg-[#9E1B32] p-10 flex flex-col justify-center items-center group cursor-pointer overflow-hidden">
            <motion.img whileHover={{ scale: 1.1 }} src="https://sipnsnackinternational.com/wp-content/uploads/2024/06/ghost-energy.png" className="h-64 mb-6" />
            <Link href="/quote" className="border-2 border-white text-white px-6 py-2 uppercase font-bold opacity-0 group-hover:opacity-100 transition-opacity">Get Ghost</Link>
          </div>
          <div className="bg-[#FFCD00] p-10 flex flex-col justify-center items-center group cursor-pointer overflow-hidden">
            <motion.img whileHover={{ scale: 1.1 }} src="https://sipnsnackinternational.com/wp-content/uploads/2024/06/celsius.png" className="h-64 mb-6" />
            <Link href="/quote" className="border-2 border-white text-white px-6 py-2 uppercase font-bold opacity-0 group-hover:opacity-100 transition-opacity">Get Celsius</Link>
          </div>
        </section>

        {/* INFO SECTION */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h4 className="text-[#00A9E0] font-bold uppercase tracking-widest mb-4">Convenient Beverage and Snack Exporter</h4>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-[#002B49] mb-8 uppercase leading-tight">Work With an All Inclusive Exporter</h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                SipNSnack International is a bulk beverage and snack distributor for countries outside of the US. We are headquartered in Miami and have many warehouses that are ready to ship globally. We sell Coke, Fanta, Gatorade, Monster, Pepsi, and hundreds of other brands.
              </p>
              <div className="flex flex-wrap gap-6 items-center">
                <Link href="/quote" className="bg-[#E87722] text-white px-10 py-4 rounded font-bold uppercase tracking-widest">Request Pricing</Link>
                <a href="tel:19546042925" className="text-2xl font-bold text-[#002B49] border-2 border-[#002B49]/10 px-6 py-3 rounded">(954) 604-2925</a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://sipnsnackinternational.com/wp-content/uploads/2025/08/Global-Beverage-Snack-Exporter-service-near-me-3.jpg" className="rounded shadow-lg" />
              <img src="https://sipnsnackinternational.com/wp-content/uploads/2025/08/Global-Beverage-Snack-Exporter-service-near-me-4.jpg" className="rounded shadow-lg" />
              <img src="https://sipnsnackinternational.com/wp-content/uploads/2025/08/Global-Beverage-Snack-Exporter-service-near-me-1.webp" className="rounded shadow-lg" />
              <img src="https://sipnsnackinternational.com/wp-content/uploads/2025/08/Global-Beverage-Snack-Exporter-service-near-me-2.webp" className="rounded shadow-lg" />
            </div>
          </div>
        </section>

        {/* STATS SECTION */}
        <section className="bg-[#002B49] py-20">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-5xl font-bold text-[#00A9E0] mb-2">25+</div>
              <div className="text-white uppercase tracking-widest font-bold">Years in Service</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#00A9E0] mb-2">200+</div>
              <div className="text-white uppercase tracking-widest font-bold">Brands & Products</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#00A9E0] mb-2">500+</div>
              <div className="text-white uppercase tracking-widest font-bold">Loyal Partners</div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
