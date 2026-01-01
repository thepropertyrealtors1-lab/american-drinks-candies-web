import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Package, Globe, Award, Truck, ChevronLeft, ChevronRight } from "lucide-react";
import { useProducts } from "@/hooks/use-products";
import { useCategories } from "@/hooks/use-categories";
import { ProductCard } from "@/components/ProductCard";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useState } from "react";

export default function Home() {
  const { data: products, isLoading: productsLoading } = useProducts();
  const { data: categories, isLoading: categoriesLoading } = useCategories();
  const [sliderIndex, setSliderIndex] = useState(0);

  const featuredProducts = products?.filter(p => p.isFeatured).slice(0, 4) || [];
  const allProductsForSlider = products || [];
  
  const handleSliderNext = () => {
    setSliderIndex((prev) => (prev + 1) % Math.max(allProductsForSlider.length - 4, 1));
  };

  const handleSliderPrev = () => {
    setSliderIndex((prev) => (prev - 1 + Math.max(allProductsForSlider.length - 4, 1)) % Math.max(allProductsForSlider.length - 4, 1));
  };

  return (
    <div className="min-h-screen bg-background font-sans flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="relative h-[600px] md:h-[700px] flex items-center overflow-hidden">
          {/* Warehouse background */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent z-10" />
            {/* Unsplash warehouse image */}
            <img 
              src="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2070&auto=format&fit=crop" 
              alt="Warehouse" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-primary/20 border border-primary/30 backdrop-blur-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-primary font-bold text-xs uppercase tracking-widest">Global Distribution Partner</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight text-shadow-lg">
                Top Rated <br />
                <span className="text-primary">American Drinks</span> <br />
                & Candies Exporter
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-xl leading-relaxed">
                We specialize in bulk wholesale export of premium American beverages and confectionery to markets worldwide. Fast, reliable, and professional.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/products" 
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded text-center font-bold uppercase tracking-widest shadow-lg shadow-primary/25 transition-all hover:scale-105"
                >
                  View Catalog
                </Link>
                <Link 
                  href="/quote" 
                  className="bg-white/10 hover:bg-white/20 backdrop-blur text-white border border-white/20 px-8 py-4 rounded text-center font-bold uppercase tracking-widest transition-all"
                >
                  Get a Quote
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* REFRESHING DRINKS SLIDER */}
        <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                <span className="text-secondary">REFRESHING</span>{" "}
                <span className="text-primary">DRINKS WE DELIVER</span>
              </h2>
              <div className="h-1 w-20 bg-primary mx-auto"></div>
            </div>

            {/* Slider Container */}
            <div className="relative">
              {/* Left Arrow */}
              <button
                onClick={handleSliderPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-primary hover:bg-primary/90 text-white p-3 rounded-full shadow-lg transition-all hover:scale-110 active:scale-95 group"
                data-testid="button-slider-prev"
              >
                <ChevronLeft className="h-6 w-6 group-hover:-translate-x-1 transition-transform" />
              </button>

              {/* Right Arrow */}
              <button
                onClick={handleSliderNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-primary hover:bg-primary/90 text-white p-3 rounded-full shadow-lg transition-all hover:scale-110 active:scale-95 group"
                data-testid="button-slider-next"
              >
                <ChevronRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Slider Grid */}
              <div className="px-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {allProductsForSlider.slice(sliderIndex, sliderIndex + 4).map((product, idx) => (
                    <motion.div
                      key={`${product.id}-${idx}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1, duration: 0.5 }}
                      className="group flex flex-col items-center justify-center cursor-pointer"
                    >
                      <motion.div
                        whileHover={{ scale: 1.15, rotateY: 10 }}
                        transition={{ duration: 0.3 }}
                        className="relative h-64 w-40 flex items-center justify-center perspective"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <img
                          src={product.imageUrl}
                          alt={product.name}
                          className="h-full w-full object-contain drop-shadow-lg group-hover:drop-shadow-2xl transition-all duration-300"
                          data-testid={`img-product-${product.id}`}
                        />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                        className="mt-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <h3 className="text-sm font-bold text-secondary uppercase tracking-wider">{product.name}</h3>
                        <p className="text-primary font-display text-lg mt-2">{product.price}</p>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Pagination Dots */}
              <div className="flex justify-center gap-2 mt-12">
                {Array.from({ length: Math.max(Math.ceil((allProductsForSlider.length || 0) / 4) - 1, 0) }).map((_, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() => setSliderIndex(idx)}
                    className={`h-3 rounded-full transition-all ${
                      idx === sliderIndex
                        ? "bg-primary w-8"
                        : "bg-gray-300 hover:bg-gray-400 w-3"
                    }`}
                    whileHover={{ scale: 1.2 }}
                    data-testid={`button-dot-${idx}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES GRID */}
        <section className="bg-primary py-12 border-y border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Globe, title: "Global Shipping", desc: "Exporting to over 50 countries" },
                { icon: Package, title: "Bulk Wholesale", desc: "Competitive pallet & container pricing" },
                { icon: Award, title: "Top Brands", desc: "Authentic major American brands" },
                { icon: Truck, title: "Fast Logistics", desc: "Efficient supply chain management" },
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-4 text-white">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg uppercase leading-none mb-1">{feature.title}</h3>
                    <p className="text-white/80 text-sm">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CATEGORIES SECTION */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold text-secondary mb-4">Our Categories</h2>
              <div className="h-1 w-20 bg-primary mx-auto mb-4"></div>
              <p className="text-gray-500 max-w-2xl mx-auto">Explore our extensive range of authentic American products ready for export.</p>
            </div>

            {categoriesLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-pulse">
                {[1, 2, 3].map(i => <div key={i} className="h-64 bg-gray-200 rounded-xl"></div>)}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categories?.map((category) => (
                  <Link key={category.id} href={`/products?category=${category.slug}`}>
                    <div className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer shadow-lg">
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors z-10" />
                      <img 
                        src={category.imageUrl} 
                        alt={category.name}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-6">
                        <h3 className="text-3xl font-display font-bold text-white uppercase tracking-wider mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          {category.name}
                        </h3>
                        <span className="bg-primary text-white px-6 py-2 rounded font-bold uppercase text-sm opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                          Browse Collection
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* FEATURED PRODUCTS */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-2">Featured Products</h2>
                <div className="h-1 w-20 bg-primary"></div>
              </div>
              <Link href="/products" className="hidden md:flex items-center gap-2 text-secondary font-bold hover:text-primary transition-colors uppercase tracking-wide">
                View All <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            {productsLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 animate-pulse">
                {[1, 2, 3, 4].map(i => <div key={i} className="h-80 bg-gray-200 rounded-xl"></div>)}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {featuredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
            
            <div className="mt-12 text-center md:hidden">
               <Link href="/products" className="bg-secondary text-white px-8 py-3 rounded font-bold uppercase inline-flex items-center gap-2">
                View All Products <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="bg-secondary py-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform translate-x-20"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Ready to Order in Bulk?</h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Get the best wholesale prices on authentic American products. Contact us today for a custom quote tailored to your business needs.
            </p>
            <Link 
              href="/quote" 
              className="bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded text-lg font-bold uppercase tracking-widest shadow-xl shadow-primary/20 transition-all hover:-translate-y-1 inline-block"
            >
              Request a Quote
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
