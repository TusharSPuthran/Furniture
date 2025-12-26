import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Heart, ShoppingCart, Eye } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { mockProducts } from '@/data/mockData';

export default function ProductGrid({ filters }) {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState([]);

  const filteredProducts = mockProducts.filter(product => {
    if (filters.category !== 'all' && product.category !== filters.category) {
      return false;
    }
    if (filters.inStock && !product.inStock) {
      return false;
    }
    if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
      return false;
    }
    if (filters.material.length > 0 && !filters.material.includes(product.material)) {
      return false;
    }
    return true;
  });

  const toggleFavorite = (productId) => {
    if (favorites.includes(productId)) {
      setFavorites(favorites.filter(id => id !== productId));
      toast.info('Removed from favorites');
    } else {
      setFavorites([...favorites, productId]);
      toast.success('Added to favorites');
    }
  };

  const handleQuickView = (product) => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProducts.map((product) => (
        <Card
          key={product.id}
          className="group overflow-hidden border-border hover:shadow-lg transition-all duration-300"
        >
          {/* Image Container */}
          <div className="relative aspect-square overflow-hidden bg-muted">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            
            {/* Badges */}
            {product.badge && (
              <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                {product.badge}
              </Badge>
            )}
            
            {/* Quick Actions */}
            <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <Button
                size="icon"
                variant="secondary"
                className="rounded-full shadow-md"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFavorite(product.id);
                }}
              >
                <Heart
                  className={`h-4 w-4 ${
                    favorites.includes(product.id)
                      ? 'fill-primary text-primary'
                      : ''
                  }`}
                />
              </Button>
              <Button
                size="icon"
                variant="secondary"
                className="rounded-full shadow-md"
                onClick={() => handleQuickView(product)}
              >
                <Eye className="h-4 w-4" />
              </Button>
            </div>

            {/* Overlay CTA */}
            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <Button
                className="w-full"
                size="sm"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                Quick View
              </Button>
            </div>
          </div>

          {/* Product Info */}
          <div className="p-5 space-y-3">
            <div>
              <h3 className="font-serif text-xl text-foreground mb-1 line-clamp-1">
                {product.name}
              </h3>
              <p className="text-sm text-muted-foreground">{product.material}</p>
            </div>

            <div className="flex items-center justify-between pt-2">
              <p className="text-2xl font-semibold text-foreground">
                ${product.price.toLocaleString()}
              </p>
              {product.inStock ? (
                <span className="text-xs text-accent font-medium">In Stock</span>
              ) : (
                <span className="text-xs text-destructive font-medium">Out of Stock</span>
              )}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}