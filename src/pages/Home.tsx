import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Package,
  Globe,
  Award,
  Truck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import ProductSwiper from "@/components/productSwiper/productSwiper";
import ProductSlider from "@/components/productSlider/productSlider";
import BrandsSection from "@/components/BrandSection";
const sliderProducts = [
  {
    id: 1,
    name: "Coca-Cola",
    imageUrl:
      "https://sipnsnackinternational.com/wp-content/uploads/2024/06/coca-cola.png",
  },
  {
    id: 2,
    name: "Fanta",
    imageUrl:
      "https://sipnsnackinternational.com/wp-content/uploads/2024/06/fanta.png",
  },
  {
    id: 3,
    name: "Pepsi",
    imageUrl:
      "https://sipnsnackinternational.com/wp-content/uploads/2024/06/pepsi.png",
  },
  {
    id: 4,
    name: "Dr Pepper",
    imageUrl:
      "https://sipnsnackinternational.com/wp-content/uploads/2024/06/dr-pepper.png",
  },
  {
    id: 5,
    name: "Celsius",
    imageUrl:
      "https://sipnsnackinternational.com/wp-content/uploads/2024/06/celsius.png",
  },
  {
    id: 6,
    name: "Dr Pepper",
    imageUrl:
      "https://sipnsnackinternational.com/wp-content/uploads/2024/06/dr-pepper.png",
  },
];
const energyProducts2 = [
  {
    id: 1,
    name: "Monster",
    imageUrl:
      "https://sipnsnackinternational.com/wp-content/uploads/2024/06/monster-energy.png",
    bgColor: "#8DC63F",
  },
  {
    id: 2,
    name: "Red Bull",
    imageUrl:
      "https://sipnsnackinternational.com/wp-content/uploads/2024/06/redbull.png",
    bgColor: "#1F2A44",
  },
];
const energyProducts4 = [
  {
    id: 1,
    name: "Monster",
    imageUrl:
      "https://sipnsnackinternational.com/wp-content/uploads/2024/06/monster-energy.png",
    bgColor: "#8DC63F",
  },
  {
    id: 2,
    name: "Red Bull",
    imageUrl:
      "https://sipnsnackinternational.com/wp-content/uploads/2024/06/redbull.png",
    bgColor: "#1F2A44",
  },
  {
    id: 3,
    name: "Ghost",
    imageUrl:
      "https://sipnsnackinternational.com/wp-content/uploads/2024/06/ghost-energy.png",
    bgColor: "#9E1B32",
  },
  {
    id: 4,
    name: "Celsius",
    imageUrl:
      "https://sipnsnackinternational.com/wp-content/uploads/2024/06/celsius.png",
    bgColor: "#FFD200",
  },
];
const energyProducts3 = [
  {
    id: 1,
    name: "Monster",
    imageUrl:
      "https://sipnsnackinternational.com/wp-content/uploads/2024/06/monster-energy.png",
    bgColor: "#8DC63F",
  },
  {
    id: 2,
    name: "Red Bull",
    imageUrl:
      "https://sipnsnackinternational.com/wp-content/uploads/2024/06/redbull.png",
    bgColor: "#1F2A44",
  },
  {
    id: 3,
    name: "Ghost",
    imageUrl:
      "https://sipnsnackinternational.com/wp-content/uploads/2024/06/ghost-energy.png",
    bgColor: "#9E1B32",
  },
];

export default function Home() {
  const [sliderIndex, setSliderIndex] = useState(0);
  const [products, setProducts] = useState([]);

  const featuredProducts =
    products?.filter((p) => p.isFeatured).slice(0, 4) || [];
  const allProductsForSlider = products || [];

  const handleSliderNext = () => {
    setSliderIndex(
      (prev) => (prev + 1) % Math.max(allProductsForSlider.length - 4, 1)
    );
  };

  const handleSliderPrev = () => {
    setSliderIndex(
      (prev) =>
        (prev - 1 + Math.max(allProductsForSlider.length - 4, 1)) %
        Math.max(allProductsForSlider.length - 4, 1)
    );
  };

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* HERO SECTION - REPLICA OF SIPNSNACK */}
        <section className="relative min-h-[600px] flex items-center bg-black overflow-hidden py-20">
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
              <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight uppercase">
                American <br />
                <span className="text-primary">Drinks & Candies</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8 max-w-xl leading-relaxed">
                Your trusted partner for exporting top-rated American beverage
                and snack brands from our shores to your stores!
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded font-bold uppercase tracking-widest transition-all"
                >
                  Request Pricing
                </Link>
              </div>
              <p className="mt-4 text-sm text-gray-400 italic">
                We Typically Respond Within 24 Hours
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative hidden lg:block"
            >
              <div className="grid grid-cols-3 gap-4">
                <img
                  src="https://sipnsnackinternational.com/wp-content/uploads/2024/06/ghost-energy.png"
                  alt="Ghost"
                  className="animate-bounce"
                  style={{ animationDuration: "3s" }}
                />
                <img
                  src="https://sipnsnackinternational.com/wp-content/uploads/2024/06/takis.png"
                  alt="Takis"
                  className="animate-bounce"
                  style={{ animationDuration: "4s" }}
                />
                <img
                  src="https://sipnsnackinternational.com/wp-content/uploads/2024/06/monster-energy.png"
                  alt="Monster"
                  className="animate-bounce"
                  style={{ animationDuration: "5s" }}
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* REFRESHING SECTION */}
        <section className="relative w-full bg-white overflow-hidden flex flex-col pb-32">
          <div className="relative flex items-center justify-center py-24">
            <span
              className="
                        absolute inset-0 flex items-center justify-center
                        text-[10rem] md:text-[180px]
                        font-extrabold uppercase
                        text-gray-100
                        select-none pointer-events-none
                        whitespace-nowrap
                      "
            >
              Refreshment
            </span>

            <h2
              className="
                          relative z-10
                          text-5xl md:text-6xl lg:text-7xl
                          font-display font-bold uppercase
                          text-center
                        "
            >
              <span className="text-black">Refreshing</span>{" "}
              <span className="text-primary">Drinks We Deliver</span>
            </h2>
          </div>

          <div className="relative w-full">
            <ProductSwiper products={sliderProducts} />
          </div>
        </section>

        {/* POWER UP SECTION back*/}
        <div className="relative w-full bg-white overflow-hidden flex flex-col ">
          <div className="relative flex items-center justify-center py-10 mb-10">
            <span
              className="
                        absolute inset-0 flex items-center justify-center
                        md:text-[150px]
                        font-extrabold uppercase
                        text-gray-100
                        select-none pointer-events-none
                        whitespace-nowrap
                      "
            >
              Energy Drinks
            </span>

            <h2
              className="
                          relative z-10
                          text-5xl md:text-6xl lg:text-7xl
                          font-display font-bold uppercase
                          text-center
                        "
            >
              <span className="text-black">PowerUp with</span>{" "}
              <span className="text-primary">Energy Drinks</span>
            </h2>
          </div>
          <ProductSlider items={energyProducts4} hoverEffect="back" />
          <ProductSlider items={energyProducts3} hoverEffect="back" />
        </div>
        {/* REFRESHING SECTION 2*/}
        <section className="relative w-full bg-white overflow-hidden flex flex-col pb-32">
          <div className="relative flex items-center justify-center py-24">
            <span
              className="
                        absolute inset-0 flex items-center justify-center
                        text-[10rem] md:text-[180px]
                        font-extrabold uppercase
                        text-gray-100
                        select-none pointer-events-none
                        whitespace-nowrap
                      "
            >
              Water
            </span>

            <h2
              className="
                          relative z-10
                          text-5xl md:text-6xl lg:text-7xl
                          font-display font-bold uppercase
                          text-center
                        "
            >
              <span className="text-black">Water Brands</span>{" "}
              <span className="text-primary">We Deliver</span>
            </h2>
          </div>

          <div className="relative w-full">
            <ProductSwiper products={sliderProducts} />
          </div>
        </section>
        {/* POWER UP SECTION front*/}
        <div className="relative w-full bg-white overflow-hidden flex flex-col ">
          <div className="relative flex items-center justify-center py-10 mb-10">
            <span
              className="
                        absolute inset-0 flex items-center justify-center
                        md:text-[150px]
                        font-extrabold uppercase
                        text-gray-100
                        select-none pointer-events-none
                        whitespace-nowrap
                      "
            >
              Snacks
            </span>

            <h2
              className="
                          relative z-10
                          text-5xl md:text-6xl lg:text-7xl
                          font-display font-bold uppercase
                          text-center
                        "
            >
              <span className="text-black">Crunchy</span>{" "}
              <span className="text-primary">Bites</span>
            </h2>
          </div>
          <ProductSlider items={energyProducts2} hoverEffect="front" />
        </div>
        {/* INFO SECTION */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h4 className="text-primary font-bold uppercase tracking-widest mb-4">
                Convenient Beverage and Snack Exporter
              </h4>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-black mb-8 uppercase leading-tight">
                Work With an All Inclusive Exporter
              </h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                American Drinks & Candies is a bulk beverage and snack
                distributor for countries outside of the US. We are
                headquartered in Miami and have many warehouses that are ready
                to ship globally. We sell Coke, Fanta, Gatorade, Monster, Pepsi,
                and hundreds of other brands.
              </p>
              <div className="flex flex-wrap gap-6 items-center">
                <Link
                  href="/contact"
                  className="bg-primary text-white px-10 py-4 rounded font-bold uppercase tracking-widest shadow-lg shadow-primary/20 transition-all"
                >
                  Request Pricing
                </Link>
                <a
                  href="tel:19546042925"
                  className="text-2xl font-bold text-black border-2 border-black/10 px-6 py-3 rounded"
                >
                  (954) 604-2925
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://sipnsnackinternational.com/wp-content/uploads/2025/08/Global-Beverage-Snack-Exporter-service-near-me-3.jpg"
                className="rounded shadow-lg"
              />
              <img
                src="https://sipnsnackinternational.com/wp-content/uploads/2025/08/Global-Beverage-Snack-Exporter-service-near-me-4.jpg"
                className="rounded shadow-lg"
              />
              <img
                src="https://sipnsnackinternational.com/wp-content/uploads/2025/08/Global-Beverage-Snack-Exporter-service-near-me-1.webp"
                className="rounded shadow-lg"
              />
              <img
                src="https://sipnsnackinternational.com/wp-content/uploads/2025/08/Global-Beverage-Snack-Exporter-service-near-me-2.webp"
                className="rounded shadow-lg"
              />
            </div>
          </div>
        </section>
        {/* Brand SECTION */}
        <BrandsSection />
        {/* CTA SECTION */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=2070"
              alt="Container Ship"
              className="w-full h-full object-cover object-right"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/20" />
          </div>
          <div className="relative z-10 text-center max-w-4xl px-6">
            <h2 className="text-white text-5xl md:text-6xl font-display font-bold uppercase mb-10 leading-tight">
              Need a Trusted <br />
              Beverage & Snack <br />
              Export Partner?
            </h2>

            <Link
              href="/contact"
              className="inline-block bg-primary text-white px-12 py-5 font-bold uppercase tracking-widest"
            >
              Request Pricing
            </Link>

            <p className="mt-4 text-sm text-gray-300">
              We Typically Respond Within 24 Hours
            </p>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-black" />
        </section>
        {/* STATS SECTION */}
        <section className="bg-black py-20">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-5xl font-bold text-primary mb-2">25+</div>
              <div className="text-white uppercase tracking-widest font-bold">
                Years in Service
              </div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">200+</div>
              <div className="text-white uppercase tracking-widest font-bold">
                Brands & Products
              </div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">500+</div>
              <div className="text-white uppercase tracking-widest font-bold">
                Loyal Partners
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
