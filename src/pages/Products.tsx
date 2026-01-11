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
import img1 from "../assets/images/groups/68.png";
import img2 from "../assets/images/groups/69.png";
import img3 from "../assets/images/groups/70.png";
import img4 from "../assets/images/groups/71.png";
import img5 from "../assets/images/groups/72.png";
import img6 from "../assets/images/groups/73.png";
import img7 from "../assets/images/drinks/5.png";
import img8 from "../assets/images/drinks/3.png";
import img9 from "../assets/images/snacks/9.png";
import img10 from "../assets/images/snacks/6.png";

import drink1 from "../assets/images/drinks/1.png";
import drink2 from "../assets/images/drinks/2.png";
import drink3 from "../assets/images/drinks/9.png";
import drink4 from "../assets/images/drinks/5.png";
import drink5 from "../assets/images/drinks/6.png";
import drink6 from "../assets/images/drinks/10.png";
import drink7 from "../assets/images/drinks/11.png";
import drink8 from "../assets/images/drinks/12.png";

import snack1 from "../assets/images/snacks/1.png";
import snack2 from "../assets/images/snacks/2.png";
import snack3 from "../assets/images/snacks/9.png";
import snack4 from "../assets/images/snacks/4.png";
import snack5 from "../assets/images/snacks/10.png";
import snack6 from "../assets/images/snacks/6.png";
import snack7 from "../assets/images/snacks/7.png";
import snack8 from "../assets/images/snacks/8.png";

const groupProducts1 = [
  {
    id: "1",
    name: "Monster Energy",
    hoverName:
      "Bad Apple, VR 46, Mixxd, Lando Noris, Feltolt, Dipper, Papillon",
    image: img1,
  },
  {
    id: "2",
    name: "Snacks",
    hoverName:
      "Burger Rings, Cheetos, BlueBird, Herrs, Honey Cheese, Jalepeno Poppers, Creamy Ranch",
    image: img2,
  },
  {
    id: "3",
    name: "Chupa Chups",
    hoverName: "Bubble Gum, Watermelon, Cherry Bubble Gum, Sour",
    image: img3,
  },
];

const groupProducts2 = [
  {
    id: "1",
    name: "Takis Snack",
    hoverName: "Nitro, Intense Takis, Fuego, Blue Heat, Chile Lenon",
    image: img4,
  },
  {
    id: "2",
    name: "Candy Lips Soda",
    hoverName: "Bubble Gum, Watermelon Slice, Peach, Cotton Candy, Sour Grape",
    image: img5,
  },
  {
    id: "3",
    name: "Energy Drink",
    hoverName: "C4 Energy Drink",
    image: img6,
  },
];

const drinkProducts3 = [
  {
    id: "1",
    name: "Mug Root Beer",
    image: drink1,
  },
  {
    id: "2",
    name: "Pepsi",
    image: drink2,
  },
  {
    id: "3",
    name: "Blue Cream Soda",
    image: drink3,
  },
  {
    id: "4",
    name: "Brain Licker",
    image: drink4,
  },
  {
    id: "5",
    name: "OxyShred",
    image: drink5,
  },
  {
    id: "6",
    name: "Liquid Death",
    image: drink6,
  },
  {
    id: "7",
    name: "C4 Energy",
    image: drink7,
  },
  {
    id: "8",
    name: "Big Fizz",
    image: drink8,
  },
];

const snackProducts2 = [
  {
    id: "1",
    name: "Cheetos",
    image: snack1,
  },
  {
    id: "2",
    name: "Honey Butter Popcorn",
    image: snack2,
  },
  {
    id: "3",
    name: "Jelly Babies",
    image: snack3,
  },
  {
    id: "4",
    name: "Burger Rings",
    image: snack4,
  },
  {
    id: "5",
    name: "Millions Candy",
    image: snack5,
  },
  {
    id: "6",
    name: "Originals",
    image: snack6,
  },
  {
    id: "7",
    name: "Pik Nik",
    image: snack7,
  },
  {
    id: "8",
    name: "Potato Skins",
    image: snack8,
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
          leftProducts={[img7, img9]}
          rightProducts={[img8, img10]}
        />
        <ProductGrid products={groupProducts1} hoverEffect={true} />
        <ProductGrid products={groupProducts2} hoverEffect={true} />

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
            {/* <ProductGrid products={drinkProducts4} hoverEffect={false} /> */}
            {/* <ProductGrid products={drinkProducts4} hoverEffect={false} /> */}
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
            href="/contact"
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
