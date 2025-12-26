import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import ProductGrid from '@/components/collections/ProductGrid';
import FilterSidebar from '@/components/collections/FilterSidebar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { SlidersHorizontal } from 'lucide-react';

export default function CollectionsPage() {
  const { category } = useParams();
  const [scrollY, setScrollY] = useState(0);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    category: category || 'all',
    priceRange: [0, 5000],
    material: [],
    inStock: false
  });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation scrollY={scrollY} />
      
      {/* Page Header */}
      <section className="pt-32 pb-12 px-6 md:px-12 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            {category ? category.charAt(0).toUpperCase() + category.slice(1) : 'All Collections'}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Discover timeless pieces crafted with care and attention to detail
          </p>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <p className="text-muted-foreground">
              Showing <span className="text-foreground font-medium">24</span> products
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden"
            >
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Filters Sidebar */}
            <div className={`md:col-span-3 ${showFilters ? 'block' : 'hidden md:block'}`}>
              <FilterSidebar filters={filters} setFilters={setFilters} />
            </div>

            {/* Product Grid */}
            <div className="md:col-span-9">
              <ProductGrid filters={filters} />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}