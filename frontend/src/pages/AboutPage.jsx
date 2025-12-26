import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function AboutPage() {
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation scrollY={scrollY} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground mb-6">
            Crafting Comfort, Building Legacy
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Since 1985, we've been creating furniture that transforms houses into homes,
            blending timeless design with contemporary comfort.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6 md:px-12 bg-muted/30">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1633112046092-a161d99563d1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHw0fHxjcmFmdHNtYW5zaGlwfGVufDB8fHx8MTc2NjU3NTIxNHww&ixlib=rb-4.1.0&q=85"
              alt="Craftsmanship"
              className="w-full h-[500px] object-cover rounded-2xl"
            />
          </div>
          <div className="space-y-6">
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">
              Our Story
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                What began as a small workshop in the heart of the city has grown into
                a celebrated furniture brand known for exceptional quality and timeless
                design.
              </p>
              <p>
                Every piece we create tells a story—of skilled hands, sustainable materials,
                and a commitment to craftsmanship that honors both tradition and innovation.
              </p>
              <p>
                We believe furniture should be more than functional; it should be beautiful,
                meaningful, and built to last generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground text-center mb-16">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Craftsmanship',
                description:
                  'Each piece is meticulously handcrafted by skilled artisans who pour their expertise and passion into every detail.',
              },
              {
                title: 'Sustainability',
                description:
                  'We source materials responsibly and design furniture that stands the test of time, reducing waste and environmental impact.',
              },
              {
                title: 'Timeless Design',
                description:
                  'Our designs transcend trends, creating pieces that remain relevant and beautiful for decades to come.',
              },
            ].map((value, idx) => (
              <div key={idx} className="text-center space-y-4">
                <h3 className="font-serif text-2xl text-foreground">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">
            Discover Our Collections
          </h2>
          <p className="text-xl text-muted-foreground">
            Explore furniture pieces that will transform your space
          </p>
          <Button
            size="lg"
            onClick={() => navigate('/collections')}
            className="group"
          >
            View Collections
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}