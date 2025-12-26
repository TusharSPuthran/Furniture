import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/home/Hero';
import FeaturedCollections from '@/components/home/FeaturedCollections';
import Craftsmanship from '@/components/home/Craftsmanship';
import Testimonials from '@/components/home/Testimonials';
import Newsletter from '@/components/home/Newsletter';
import Footer from '@/components/Footer';

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation scrollY={scrollY} />
      <main>
        <Hero />
        <FeaturedCollections />
        <Craftsmanship />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}