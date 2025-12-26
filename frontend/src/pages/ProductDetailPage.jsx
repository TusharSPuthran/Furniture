import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Heart, Share2, ChevronLeft, Star } from 'lucide-react';
import { toast } from 'sonner';
import { mockProducts } from '@/data/mockData';

export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  const product = mockProducts.find(p => p.id === parseInt(id));

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    toast.success('Added to cart', {
      description: `${product.name} (${quantity}x) has been added to your cart`
    });
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success('Link copied to clipboard');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation scrollY={scrollY} />

      {/* Back Button */}
      <div className="pt-28 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="-ml-3"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to collections
          </Button>
        </div>
      </div>

      {/* Product Section */}
      <section className="py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === idx
                        ? 'border-primary'
                        : 'border-transparent hover:border-border'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} view ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                {product.badge && (
                  <Badge variant="secondary" className="mb-3">
                    {product.badge}
                  </Badge>
                )}
                <h1 className="font-serif text-4xl lg:text-5xl text-foreground mb-3">
                  {product.name}
                </h1>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating)
                            ? 'fill-primary text-primary'
                            : 'fill-muted text-muted'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
                <p className="text-3xl font-semibold text-foreground">
                  ${product.price.toLocaleString()}
                </p>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                {product.description}
              </p>

              {/* Material & Dimensions */}
              <div className="space-y-3 pt-4 border-t border-border">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Material</span>
                  <span className="text-foreground font-medium">{product.material}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Dimensions</span>
                  <span className="text-foreground font-medium">{product.dimensions}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Availability</span>
                  <span className="text-foreground font-medium">
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>
              </div>

              {/* Quantity & Actions */}
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-border rounded-lg">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="rounded-r-none"
                    >
                      -
                    </Button>
                    <span className="px-6 text-center font-medium">{quantity}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setQuantity(quantity + 1)}
                      className="rounded-l-none"
                    >
                      +
                    </Button>
                  </div>
                  <Button
                    size="lg"
                    onClick={handleAddToCart}
                    disabled={!product.inStock}
                    className="flex-1"
                  >
                    {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                  </Button>
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => setIsFavorite(!isFavorite)}
                    className="flex-1"
                  >
                    <Heart
                      className={`h-5 w-5 mr-2 ${
                        isFavorite ? 'fill-primary text-primary' : ''
                      }`}
                    />
                    {isFavorite ? 'Saved' : 'Save'}
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={handleShare}
                    className="flex-1"
                  >
                    <Share2 className="h-5 w-5 mr-2" />
                    Share
                  </Button>
                </div>
              </div>

              {/* Tabs */}
              <Tabs defaultValue="details" className="pt-6">
                <TabsList className="w-full">
                  <TabsTrigger value="details" className="flex-1">Details</TabsTrigger>
                  <TabsTrigger value="care" className="flex-1">Care</TabsTrigger>
                  <TabsTrigger value="shipping" className="flex-1">Shipping</TabsTrigger>
                </TabsList>
                <TabsContent value="details" className="space-y-4 pt-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Each piece is handcrafted by skilled artisans using premium materials
                    sourced from sustainable suppliers. The attention to detail and quality
                    craftsmanship ensures that this piece will last for generations.
                  </p>
                </TabsContent>
                <TabsContent value="care" className="space-y-4 pt-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Clean with a soft, damp cloth. Avoid harsh chemicals and direct sunlight.
                    Use coasters for hot or cold beverages. Polish wood surfaces every 6 months
                    with appropriate furniture polish.
                  </p>
                </TabsContent>
                <TabsContent value="shipping" className="space-y-4 pt-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Free shipping on orders over $500. Standard delivery takes 7-14 business days.
                    White glove delivery available for an additional fee. All pieces are carefully
                    packaged to ensure safe arrival.
                  </p>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}