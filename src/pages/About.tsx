import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import HeroSection from "@/components/HeroSecction";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "./style.css";
import "swiper/css";
import "swiper/css/pagination";
import img1 from "../assets/images/others/1.png";
import img2 from "../assets/images/others/2.png";
import img3 from "../assets/images/others/3.png";
import img7 from "../assets/images/drinks/11.png";
import img8 from "../assets/images/drinks/16.png";
import img9 from "../assets/images/snacks/8.png";
import img10 from "../assets/images/snacks/4.png";

const images = [img1, img2, img3];

export default function About() {
  return (
    <div className="min-h-screen bg-background font-sans flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* HERO SECTION */}
        <HeroSection
          titleTop="About American"
          titleBottom="Drinks"
          leftProducts={[img7, img9]}
          rightProducts={[img8, img10]}
        />

        {/* ABOUT SPLIT SECTION */}
        <section className="relative bg-white py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="relative min-h-[520px] flex items-center">
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1800"
                  alt="Warehouse"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-l from-white via-white to-white/40" />
              </div>

              <div className="relative z-10 pl-40 pr-10 max-w-xl text-left">
                <h2 className="text-4xl font-extrabold uppercase text-[#007aa3] mb-6">
                  About Us
                </h2>

                <p className="text-lg text-gray-700 leading-relaxed">
                  American Drinks and Candies is a bulk beverage and snack
                  distributor for countries outside of the US. We are
                  headquartered in Miami and have warehouses ready to ship
                  globally.
                  <br />
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center">
              <Swiper
                modules={[Pagination, Autoplay]}
                autoplay={{ delay: 4500 }}
                loop
                pagination={{ clickable: true }}
                className="w-full max-w-[560px]"
              >
                {images.map((img, i) => (
                  <SwiperSlide key={i}>
                    <img
                      src={img}
                      alt="Warehouse shipment"
                      className="w-full h-[380px] object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </section>
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
