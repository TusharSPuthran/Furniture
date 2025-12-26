import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const collections = [
  {
    id: 1,
    name: 'Living Room',
    description: 'Comfort meets elegance in every piece',
    image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221',
    category: 'living-room',
    count: '48 items',
  },
  {
    id: 2,
    name: 'Dining Room',
    description: 'Where memories are made around the table',
    image: 'https://images.unsplash.com/photo-1604578762246-41134e37f9cc',
    category: 'dining',
    count: '32 items',
  },
  {
    id: 3,
    name: 'Bedroom',
    description: 'Your personal sanctuary awaits',
    image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92',
    category: 'bedroom',
    count: '56 items',
  },
];

export default function FeaturedCollections() {
  return (
    <section className="py-24 px-6 md:px-12 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            Explore Our Collections
          </h2>
          <p className="text-lg text-muted-foreground">
            Curated selections of furniture designed to transform your living spaces
            into havens of comfort and style
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection, idx) => (
            <Link
              key={collection.id}
              to={`/collections/${collection.category}`}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl bg-card shadow-md hover:shadow-elegant transition-all duration-500">
                {/* Image */}
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-background">
                  <p className="text-sm font-medium mb-2 opacity-90">
                    {collection.count}
                  </p>
                  <h3 className="font-serif text-2xl md:text-3xl mb-2">
                    {collection.name}
                  </h3>
                  <p className="text-sm opacity-90 mb-4">
                    {collection.description}
                  </p>
                  <div className="flex items-center text-sm font-medium group-hover:gap-2 transition-all">
                    <span>View Collection</span>
                    <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/collections">
            <Button variant="outline" size="lg" className="group">
              View All Collections
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}