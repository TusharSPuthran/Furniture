import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const footerLinks = {
  Shop: [
    { name: 'All Collections', path: '/collections' },
    { name: 'Living Room', path: '/collections/living-room' },
    { name: 'Dining Room', path: '/collections/dining' },
    { name: 'Bedroom', path: '/collections/bedroom' },
    { name: 'New Arrivals', path: '/collections?filter=new' },
  ],
  Company: [
    { name: 'About Us', path: '/about' },
    { name: 'Our Story', path: '/about#story' },
    { name: 'Sustainability', path: '/about#sustainability' },
    { name: 'Careers', path: '#' },
  ],
  Support: [
    { name: 'Contact Us', path: '#' },
    { name: 'Shipping & Returns', path: '#' },
    { name: 'Care Instructions', path: '#' },
    { name: 'FAQ', path: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/">
              <h2 className="font-serif text-3xl font-semibold text-foreground">
                Artisan
              </h2>
            </Link>
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              Crafting timeless furniture with passion and precision since 1985.
              Every piece tells a story of quality and care.
            </p>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-foreground mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="border-t border-border pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-muted-foreground">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-foreground mb-1">Visit Our Showroom</p>
                <p>123 Artisan Street, Design District</p>
                <p>New York, NY 10001</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-foreground mb-1">Call Us</p>
                <p>+1 (555) 123-4567</p>
                <p>Mon-Sat: 9AM - 6PM EST</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-foreground mb-1">Email Us</p>
                <p>hello@artisanfurniture.com</p>
                <p>We'll respond within 24 hours</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Artisan Furniture. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}