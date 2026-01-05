import { useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { useLocation } from "wouter";
import HeroSection from "@/components/HeroSecction";
import BrandsSection from "@/components/BrandSection";
import { ProductGrid } from "@/components/ProductGrid";

const drinkProducts4 = [
  {
    id: "1",
    name: "Monster Energy Original",
    hoverName: "Original",
    image:
      "https://sipnsnackinternational.com/wp-content/uploads/2024/06/monster-energy.png",
  },
  {
    id: "2",
    name: "Monster Energy Zero",
    hoverName: "Zero Sugar",
    image:
      "https://sipnsnackinternational.com/wp-content/uploads/2024/06/monster-energy-zero.png",
  },
  {
    id: "3",
    name: "Monster Energy Ultra",
    hoverName: "Ultra",
    image:
      "https://sipnsnackinternational.com/wp-content/uploads/2024/06/monster-energy-ultra.png",
  },
  {
    id: "4",
    name: "Monster Energy Mango Loco",
    hoverName: "Mango",
    image:
      "https://sipnsnackinternational.com/wp-content/uploads/2024/06/monster-energy-mango.png",
  },
];

const drinkProducts3 = [
  {
    id: "1",
    name: "Monster Energy Original",
    hoverName: "Original",
    image:
      "https://sipnsnackinternational.com/wp-content/uploads/2024/06/monster-energy.png",
  },
  {
    id: "2",
    name: "Monster Energy Zero",
    hoverName: "Zero Sugar",
    image:
      "https://sipnsnackinternational.com/wp-content/uploads/2024/06/monster-energy-zero.png",
  },
  {
    id: "3",
    name: "Monster Energy Ultra",
    hoverName: "Ultra",
    image:
      "https://sipnsnackinternational.com/wp-content/uploads/2024/06/monster-energy-ultra.png",
  },
];

const snackProducts2 = [
  {
    id: "1",
    name: "Doritos Nacho Cheese",
    hoverName: "Nacho",
    image:
      "https://sipnsnackinternational.com/wp-content/uploads/2024/06/doritos-nacho-cheese.png",
  },
  {
    id: "2",
    name: "Cheetos Crunchy",
    hoverName: "Crunchy",
    image:
      "https://sipnsnackinternational.com/wp-content/uploads/2024/06/cheetos-crunchy.png",
  },
];

export default function Products() {
  return (
    <div className="min-h-screen bg-background font-sans flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <HeroSection
          titleTop="Our"
          titleBottom="Products"
          showButton
          leftProducts={[
            "https://sipnsnackinternational.com/wp-content/uploads/2024/06/monster-energy.png",
            "https://sipnsnackinternational.com/wp-content/uploads/2024/06/monster-energy.png",
          ]}
          rightProducts={[
            "https://sipnsnackinternational.com/wp-content/uploads/2024/06/monster-energy.png",
            "https://sipnsnackinternational.com/wp-content/uploads/2024/06/monster-energy.png",
          ]}
        />
        <ProductGrid products={drinkProducts4} hoverEffect={true} />
        <ProductGrid products={drinkProducts4} hoverEffect={true} />

        {/* REFRESHING SECTION */}
        <section className="relative w-full bg-white overflow-hidden flex flex-col">
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
              Drinks
            </span>

            <h2
              className="
                                  relative z-10
                                  text-5xl md:text-6xl lg:text-7xl
                                  font-display font-bold uppercase
                                  text-center
                                "
            >
              <span className="text-black"></span>{" "}
              <span className="text-primary">Drinks</span>
            </h2>
          </div>

          <div className="relative w-full">
            <ProductGrid products={drinkProducts4} hoverEffect={false} />
            <ProductGrid products={drinkProducts4} hoverEffect={false} />
            <ProductGrid products={drinkProducts3} hoverEffect={false} />
          </div>
        </section>
        {/* REFRESHING SECTION */}
        <section className="relative w-full bg-white overflow-hidden flex flex-col">
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
              <span className="text-black"></span>{" "}
              <span className="text-primary">Snacks</span>
            </h2>
          </div>

          <div className="relative w-full">
            <ProductGrid products={snackProducts2} hoverEffect={false} />
          </div>
        </section>
        {/* Brand SECTION */}
        <BrandsSection />
      </main>
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
          <h2 className="text-white text-5xl md:text-6xl font-bold uppercase mb-10 leading-tight">
            Need a Trusted <br />
            Beverage & Snack <br />
            Export Partner?
          </h2>

          <a
            href="/quote"
            className="inline-block bg-primary text-white px-12 py-5 font-bold uppercase tracking-widest"
          >
            Request Pricing
          </a>

          <p className="mt-4 text-sm text-gray-300">
            We Typically Respond Within 24 Hours
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
