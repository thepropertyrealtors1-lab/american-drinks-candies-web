import { motion } from "framer-motion";

type HeroSectionProps = {
  titleTop: string;
  titleBottom: string;
  subtitle?: string;
  showButton?: boolean;
  leftProducts?: string[];
  rightProducts?: string[];
};

export default function HeroSection({
  titleTop,
  titleBottom,
  subtitle,
  showButton = false,
  leftProducts = [],
  rightProducts = [],
}: HeroSectionProps) {
  return (
    <section className="relative min-h-[520px] flex items-center justify-center bg-black overflow-hidden">
      {/* LEFT PRODUCTS */}
      <div className="absolute left-36 top-1/2 -translate-y-1/2 hidden lg:flex">
        {leftProducts.map((src, i) => (
          <motion.img
            key={i}
            src={src}
            alt="product"
            className="w-28 xl:w-40 drop-shadow-xl"
            animate={{ y: [0, -50, 0] }}
            transition={{ duration: 3 + i, repeat: Infinity }}
          />
        ))}
      </div>

      {/* RIGHT PRODUCTS */}
      <div className="absolute right-36 top-1/2 -translate-y-1/2 hidden lg:flex">
        {rightProducts.map((src, i) => (
          <motion.img
            key={i}
            src={src}
            alt="product"
            className="w-32 xl:w-40 drop-shadow-xl"
            animate={{ y: [0, -36, 0] }}
            transition={{ duration: 3.5 + i, repeat: Infinity }}
          />
        ))}
      </div>

      {/* CENTER CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 text-center px-4"
      >
        {/* TOP TITLE */}
        <h1 className="text-white text-4xl md:text-6xl font-extrabold uppercase tracking-widest">
          {titleTop}
        </h1>

        {/* BOTTOM TITLE */}
        <h2 className="mt-2 text-orange-500 text-4xl md:text-6xl font-extrabold uppercase tracking-widest">
          {titleBottom}
        </h2>

        {subtitle && (
          <p className="mt-5 text-lg text-gray-300 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}

        {showButton && (
          <>
            <a
              href="/contact"
              className="inline-block mt-8 bg-orange-500 hover:bg-orange-600 text-black font-extrabold uppercase px-10 py-4 tracking-widest"
            >
              Request Pricing
            </a>

            <p className="mt-3 text-sm text-gray-400">
              We Typically Respond Within 24 Hours
            </p>
          </>
        )}
      </motion.div>
    </section>
  );
}
