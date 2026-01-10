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
import img1 from "../assets/images/drinks/1.png";
import img2 from "../assets/images/snacks/1.png";
import img3 from "../assets/images/snacks/10.png";

// drinks
import img4 from "../assets/images/drinks/2.png";
import img5 from "../assets/images/drinks/3.png";
import img6 from "../assets/images/drinks/4.png";
import img7 from "../assets/images/drinks/5.png";
import img8 from "../assets/images/drinks/8.png";
import img9 from "../assets/images/drinks/1.png";
import img10 from "../assets/images/drinks/7.png";
import img11 from "../assets/images/drinks/6.png";
import img12 from "../assets/images/drinks/9.png";

// snacks
import img13 from "../assets/images/snacks/2.png";
import img14 from "../assets/images/snacks/3.png";
import img15 from "../assets/images/snacks/4.png";
import img16 from "../assets/images/snacks/5.png";
import img17 from "../assets/images/snacks/1.png";
import img18 from "../assets/images/snacks/6.png";
import img19 from "../assets/images/snacks/10.png";
import img20 from "../assets/images/snacks/7.png";
import img21 from "../assets/images/snacks/8.png";
import img22 from "../assets/images/snacks/11.png";

import img23 from "../assets/images/snacks/1.png";
import img24 from "../assets/images/snacks/4.png";
import img25 from "../assets/images/drinks/11.png";
import img26 from "../assets/images/drinks/10.png";
import img27 from "../assets/images/drinks/13.png";
import img28 from "../assets/images/drinks/15.png";

import img29 from "../assets/images/others/1.png";
import img30 from "../assets/images/others/2.png";
import img31 from "../assets/images/others/3.png";
import img32 from "../assets/images/others/4.png";

const sliderProducts = [
  {
    id: 1,
    name: "",
    imageUrl: img1,
  },
  {
    id: 2,
    name: "",
    imageUrl: img4,
  },
  {
    id: 3,
    name: "",
    imageUrl: img5,
  },
  {
    id: 4,
    name: "",
    imageUrl: img6,
  },
  {
    id: 5,
    name: "",
    imageUrl: img7,
  },
  {
    id: 6,
    name: "",
    imageUrl: img8,
  },
  {
    id: 7,
    name: "",
    imageUrl: img9,
  },
  {
    id: 8,
    name: "",
    imageUrl: img10,
  },
  {
    id: 9,
    name: "",
    imageUrl: img11,
  },
  {
    id: 10,
    name: "",
    imageUrl: img12,
  },
];

const sliderProducts2 = [
  {
    id: 1,
    name: "",
    imageUrl: img13,
  },
  {
    id: 2,
    name: "",
    imageUrl: img14,
  },
  {
    id: 3,
    name: "",
    imageUrl: img15,
  },
  {
    id: 4,
    name: "",
    imageUrl: img16,
  },
  {
    id: 5,
    name: "",
    imageUrl: img17,
  },
  {
    id: 6,
    name: "",
    imageUrl: img18,
  },
  {
    id: 7,
    name: "",
    imageUrl: img19,
  },
  {
    id: 8,
    name: "",
    imageUrl: img20,
  },
  {
    id: 9,
    name: "",
    imageUrl: img21,
  },
  {
    id: 10,
    name: "",
    imageUrl: img22,
  },
];

const energyProducts2 = [
  {
    id: 1,
    name: "Cheetos",
    imageUrl: img23,
    bgColor: "#19814f",
    cta: "Get Cheetos",
  },
  {
    id: 2,
    name: "Burger Rings",
    imageUrl: img24,
    bgColor: "#e80f0e",
    cta: "Get Burger Rings",
  },
];
const energyProducts4 = [
  {
    id: 1,
    name: "OxyShred",
    imageUrl: img11,
    bgColor: "#58d3e1",
    cta: "Get OxyShred",
  },
  {
    id: 2,
    name: "Juice Monster",
    imageUrl: img28,
    bgColor: "#ff66c4",
    cta: "Get Monster",
  },
  {
    id: 3,
    name: "Liquid Death",
    imageUrl: img26,
    bgColor: "#b9a357",
  },
  {
    id: 4,
    name: "Monster Punch",
    imageUrl: img27,
    bgColor: "#FF0000",
    cta: "Get Monster",
  },
];
const energyProducts3 = [
  {
    id: 1,
    name: "C4 Energy",
    imageUrl: img25,
    bgColor: "#8DC63F",
    cta: "Get C4 Energy",
  },
  {
    id: 2,
    name: "Root Beer",
    imageUrl: img1,
    bgColor: "#af8a6f",
    cta: "Get Root Beer",
  },
  {
    id: 3,
    name: "Pepsi",
    imageUrl: img4,
    bgColor: "#231d5e",
    cta: "Get Pepsi",
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
                <span className="text-white">American</span> <br />
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
                  src={img1}
                  className="animate-bounce"
                  style={{ animationDuration: "3s" }}
                />
                <img
                  src={img2}
                  className="animate-bounce"
                  style={{ animationDuration: "4s" }}
                />
                <img
                  src={img3}
                  className="animate-bounce"
                  style={{ animationDuration: "5s" }}
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* REFRESHING SECTION */}
        <section className="relative w-full bg-white overflow-hidden flex flex-col md:pb-32">
          <div className="relative flex items-center justify-center py-7 md:py-24">
            <span
              className="
                        absolute inset-0 flex items-center justify-center
                        text-[2.3rem] sm:text-[4rem] md:text-[8rem] lg:text-[180px]
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
                          text-4xl md:text-6xl lg:text-7xl
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
          <div className="relative flex items-center justify-center py-5 md:py-10 mb-10">
            <span
              className="
                        absolute inset-0 flex items-center justify-center
                        text-[2.3rem] sm:text-[4rem] md:text-[8rem] lg:text-[180px]
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
                          text-3xl md:text-6xl lg:text-7xl
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
                        text-[4rem] sm:text-[6rem] md:text-[10rem] lg:text-[180px]
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
                          text-4xl md:text-6xl lg:text-7xl
                          font-display font-bold uppercase
                          text-center
                        "
            >
              <span className="text-black">Snack Items</span>{" "}
              <span className="text-primary">We Deliver</span>
            </h2>
          </div>

          <div className="relative w-full">
            <ProductSwiper products={sliderProducts2} />
          </div>
        </section>
        {/* POWER UP SECTION front*/}
        <div className="relative w-full bg-white overflow-hidden flex flex-col ">
          <div className="relative flex items-center justify-center py-10 mb-10">
            <span
              className="
                        absolute inset-0 flex items-center justify-center
                        text-[4rem] sm:text-[5rem] md:text-[10rem] lg:text-[180px]
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
                          text-4xl md:text-6xl lg:text-7xl
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
              <img src={img29} className="rounded shadow-lg" />
              <img src={img30} className="rounded shadow-lg" />
              <img src={img31} className="rounded shadow-lg" />
              <img src={img32} className="rounded shadow-lg" />
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
