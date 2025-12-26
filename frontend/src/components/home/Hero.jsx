import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden grain-texture">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="inline-block">
              <span className="text-sm uppercase tracking-wider text-primary font-medium">
                Timeless Elegance
              </span>
            </div>
            
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-foreground leading-tight">
              Furniture That
              <span className="block text-primary">Tells Your Story</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Discover handcrafted pieces that blend contemporary design with warm,
              natural materials. Each creation is made to last generations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                onClick={() => navigate('/collections')}
                className="group text-base px-8 py-6"
              >
                Explore Collections
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate('/about')}
                className="text-base px-8 py-6"
              >
                Our Story
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div>
                <p className="text-3xl font-serif font-semibold text-foreground">38+</p>
                <p className="text-sm text-muted-foreground mt-1">Years of Craft</p>
              </div>
              <div>
                <p className="text-3xl font-serif font-semibold text-foreground">500+</p>
                <p className="text-sm text-muted-foreground mt-1">Unique Designs</p>
              </div>
              <div>
                <p className="text-3xl font-serif font-semibold text-foreground">12k+</p>
                <p className="text-sm text-muted-foreground mt-1">Happy Homes</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-3xl overflow-hidden shadow-elegant">
              <img
                src="https://images.unsplash.com/photo-1540932428079-887d0d7a8fa5"
                alt="Luxury contemporary furniture"
                className="w-full h-[600px] object-cover"
              />
              {/* Overlay accent */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/60 to-transparent p-8">
                <p className="text-background text-sm font-medium">Handcrafted Excellence</p>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}