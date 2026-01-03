import { cn } from "@/lib/utils";

type ProductItem = {
  id: string;
  name: string;
  hoverName: string;
  image: string;
};

type ProductGridProps = {
  products: ProductItem[];
  hoverEffect?: boolean;
  className?: string;
};

export function ProductGrid({
  products,
  hoverEffect = true,
  className,
}: ProductGridProps) {
  return (
    <section className={cn("py-20 bg-white", className)}>
      <div
        className={cn(
          "mx-auto grid max-w-7xl gap-x-12 gap-y-20 px-6",
          "grid-cols-[repeat(auto-fit,minmax(220px,1fr))] justify-items-center"
        )}
      >
        {products.map((product) => (
          <div
            key={product.id}
            className={cn("group text-center", hoverEffect && "cursor-pointer")}
          >
            {/* IMAGE */}
            <div className="relative flex h-72 items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className={cn(
                  "max-h-80 w-auto object-contain transition-all duration-300",
                  hoverEffect &&
                    "group-hover:scale-110 group-hover:blur-sm group-hover:opacity-30"
                )}
              />

              {/* Hover text */}
              {hoverEffect && (
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-xl font-semibold text-black">
                    {product.hoverName}
                  </span>
                </div>
              )}
            </div>

            {/* NAME */}
            <div
              className={cn(
                "mt-8 text-2xl font-medium text-black transition-opacity duration-300",
                hoverEffect && "group-hover:opacity-0"
              )}
            >
              {product.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
