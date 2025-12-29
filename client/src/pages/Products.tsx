import { useState } from "react";
import { useProducts } from "@/hooks/use-products";
import { useCategories } from "@/hooks/use-categories";
import { ProductCard } from "@/components/ProductCard";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { useLocation } from "wouter";

export default function Products() {
  const [location] = useLocation();
  const searchParams = new URLSearchParams(window.location.search);
  const initialCategory = searchParams.get("category");

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory || "all");
  const [searchQuery, setSearchQuery] = useState("");

  const { data: products, isLoading: pLoading } = useProducts();
  const { data: categories, isLoading: cLoading } = useCategories();

  const filteredProducts = products?.filter((p) => {
    const matchesCategory = selectedCategory === "all" || p.categoryId === categories?.find(c => c.slug === selectedCategory)?.id;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
      <Navbar />

      <div className="bg-secondary py-16 text-white text-center px-4">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Product Catalog</h1>
        <p className="text-gray-400 max-w-xl mx-auto">Explore our extensive inventory of premium American snacks and beverages.</p>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full flex-grow">
        
        {/* Filters & Search */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          
          {/* Sidebar (Desktop) / Dropdown (Mobile) */}
          <div className="w-full lg:w-64 flex-shrink-0 space-y-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input 
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="font-display font-bold text-lg mb-4 uppercase text-secondary">Categories</h3>
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => setSelectedCategory("all")}
                  className={cn(
                    "text-left px-4 py-2 rounded transition-colors text-sm font-medium",
                    selectedCategory === "all" 
                      ? "bg-primary text-white font-bold shadow-md" 
                      : "text-gray-600 hover:bg-gray-50 hover:text-primary"
                  )}
                >
                  All Products
                </button>
                {cLoading ? (
                  <div className="space-y-2 animate-pulse">
                    {[1, 2, 3].map(i => <div key={i} className="h-8 bg-gray-100 rounded"></div>)}
                  </div>
                ) : (
                  categories?.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.slug)}
                      className={cn(
                        "text-left px-4 py-2 rounded transition-colors text-sm font-medium",
                        selectedCategory === cat.slug 
                          ? "bg-primary text-white font-bold shadow-md" 
                          : "text-gray-600 hover:bg-gray-50 hover:text-primary"
                      )}
                    >
                      {cat.name}
                    </button>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-grow">
            {pLoading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
                {[1, 2, 3, 4, 5, 6].map(i => <div key={i} className="h-80 bg-gray-200 rounded-xl"></div>)}
              </div>
            ) : filteredProducts?.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-xl border border-dashed border-gray-300">
                <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
                <button onClick={() => {setSearchQuery(""); setSelectedCategory("all")}} className="mt-4 text-primary font-bold hover:underline">Clear filters</button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts?.map((product) => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    category={categories?.find(c => c.id === product.categoryId)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
