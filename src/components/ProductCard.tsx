import type { Product, Category } from "@shared/schema";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  product: Product;
  category?: Category;
}

export function ProductCard({ product, category }: ProductCardProps) {
  return (
    <div className="group relative bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 flex flex-col h-full">
      {/* Image Container */}
      <div className="relative aspect-[4/3] bg-gray-50 overflow-hidden">
        {/* Placeholder image logic - in production use real images */}
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {product.isFeatured && (
          <div className="absolute top-3 left-3 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg uppercase tracking-wide">
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        {category && (
          <span className="text-xs font-bold text-primary/80 uppercase tracking-wider mb-2 block">
            {category.name}
          </span>
        )}
        <h3 className="font-display text-xl font-bold text-gray-900 mb-2 line-clamp-1 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-500 text-sm line-clamp-2 mb-4 flex-grow">
          {product.description}
        </p>

        <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
          <span className="font-mono text-sm font-semibold text-gray-700">
            {product.price || "Contact for Price"}
          </span>
          <Link
            href={`/contact?product=${encodeURIComponent(product.name)}`}
            className="text-primary font-bold text-sm uppercase tracking-wide flex items-center gap-1 group-hover:gap-2 transition-all"
          >
            Get Quote <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
