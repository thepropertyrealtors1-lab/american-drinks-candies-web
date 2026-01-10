import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ProductSlider({ items, hoverEffect = "back" }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const hoverConfig =
    hoverEffect === "front"
      ? {
          hoverScale: 1.5,
          hoverY: 150,
        }
      : {
          hoverScale: 0.8,
          hoverY: 10,
        };
  return (
    <section
      className="
        grid h-auto md:h-[600px]
        grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(0,1fr))]
      "
      // style={{
      //   gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))`,
      // }}
    >
      {items.map((item, index) => {
        const isActive = activeIndex === index;
        return (
          <motion.div
            key={item.id}
            className="relative overflow-hidden flex items-end justify-center"
            style={{ backgroundColor: item.bgColor }}
            initial="rest"
            whileHover="hover"
            animate={isActive ? "hover" : "rest"}
            onClick={() => setActiveIndex(isActive ? null : index)}
          >
            <motion.img
              src={item.imageUrl}
              alt={item.name}
              variants={{
                rest: {
                  y: isMobile ? 120 : 320,
                  scale: 1,
                },
                hover: {
                  y: hoverConfig.hoverY,
                  scale: hoverConfig.hoverScale,
                },
              }}
              transition={{
                duration: 1.8,
                ease: [0.19, 1, 0.22, 1],
              }}
              className="
              h-[420px] md:h-[720px] object-contain
              drop-shadow-none
              group-hover:drop-shadow-[0_40px_60px_rgba(0,0,0,0.35)]
              transition-shadow duration-700
            "
            />

            <motion.button
              variants={{
                rest: {
                  opacity: 0,
                  y: 30,
                },
                hover: {
                  opacity: 1,
                  y: 0,
                },
              }}
              transition={{
                duration: 0.6,
                delay: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
              absolute bottom-12
              border-2 border-white
              text-white uppercase font-bold
              px-7 py-3
              tracking-widest
              bg-transparent
              cursor-pointer
              pointer-events-auto
              transition-all duration-300
              hover:bg-white hover:text-black
              hover:-translate-y-1
            "
            >
              {item.cta || "Get Energy"}
            </motion.button>
          </motion.div>
        );
      })}
    </section>
  );
}
