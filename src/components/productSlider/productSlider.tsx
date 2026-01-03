import { motion } from "framer-motion";

export default function ProductSlider({ items, hoverEffect = "back" }) {
  const hoverConfig =
    hoverEffect === "front"
      ? {
          hoverScale: 1.2,
          hoverY: 150,
        }
      : {
          hoverScale: 0.9,
          hoverY: 10,
        };
  return (
    <section
  className="grid h-[600px]"
  style={{
    gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))`,
  }}
>

      {items.map((item) => (
        <motion.div
          key={item.id}
          className="relative overflow-hidden flex items-end justify-center"
          style={{ backgroundColor: item.bgColor }}
          initial="rest"
          whileHover="hover"
          animate="rest"
        >
          <motion.img
            src={item.imageUrl}
            alt={item.name}
            variants={{
              rest: {
                y: 320,
                scale: 1.05,
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
              h-[720px] object-contain
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
      ))}
    </section>
  );
}
