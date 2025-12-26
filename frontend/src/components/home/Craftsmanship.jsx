import { Sparkles, Heart, Shield } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Handcrafted',
    description: 'Every piece is meticulously crafted by skilled artisans',
  },
  {
    icon: Heart,
    title: 'Sustainable',
    description: 'Ethically sourced materials and eco-friendly processes',
  },
  {
    icon: Shield,
    title: 'Built to Last',
    description: 'Quality construction designed for generations',
  },
];

export default function Craftsmanship() {
  return (
    <section className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1626252685663-64c6bf60afb1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwyfHxjcmFmdHNtYW5zaGlwfGVufDB8fHx8MTc2NjU3NTIxNHww&ixlib=rb-4.1.0&q=85"
                  alt="Craftsmanship detail"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1611600700192-d87eaeed4f81?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHx3b29kJTIwdGV4dHVyZXxlbnwwfHx8fDE3NjY1NzUyMTl8MA&ixlib=rb-4.1.0&q=85"
                  alt="Wood texture"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 pt-12">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1633112046092-a161d99563d1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHw0fHxjcmFmdHNtYW5zaGlwfGVufDB8fHx8MTc2NjU3NTIxNHww&ixlib=rb-4.1.0&q=85"
                  alt="Artisan at work"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1718049720133-1bd494f6797c"
                  alt="Finished furniture"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <span className="text-sm uppercase tracking-wider text-primary font-medium">
                Our Craft
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mt-3 mb-6">
                Where Tradition Meets Innovation
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                For nearly four decades, we've honored the time-tested techniques of
                master craftsmen while embracing modern design sensibilities. Each piece
                undergoes rigorous quality checks and is finished by hand to ensure it
                meets our exacting standards.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6 pt-4">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}