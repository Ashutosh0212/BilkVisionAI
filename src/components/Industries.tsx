import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Mountain, Wheat, HardHat, Settings } from "lucide-react";

const industries = [
  {
    icon: Mountain,
    title: "Mining & Aggregates",
    description: "Get automated 3-D volume scans of piles, monitor stock levels, optimize hauling & asset usage.",
    image: "https://images.unsplash.com/photo-1697537335900-88bd20e24822?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbmclMjBzdG9ja3BpbGUlMjBhZXJpYWwlMjBkcm9uZXxlbnwxfHx8fDE3NTgwMzA0MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Mining stockpile aerial view"
  },
  {
    icon: Wheat,
    title: "Agriculture & Feed Stockpiles",
    description: "Real-time tracking of stockpile consumption, delivery estimates, usage forecasting.",
    image: "https://images.unsplash.com/photo-1651673206446-4fe392ac52b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyYWwlMjBncmFpbiUyMHN0b2NrcGlsZXxlbnwxfHx8fDE3NTgwMzA0MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Agricultural grain stockpile"
  },
  {
    icon: HardHat,
    title: "Construction Materials",
    description: "Keep tabs on sand, gravel, raw materials supply with drone-based scans to plan logistics.",
    image: "https://images.unsplash.com/photo-1649796877686-847d6bdeea6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBtYXRlcmlhbHMlMjBzYW5kJTIwZ3JhdmVsfGVufDF8fHx8MTc1ODAzMDQxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Construction materials sand and gravel"
  },
  {
    icon: Settings,
    title: "Custom Solutions",
    description: "Need something for your specific environment? We'll tailor to your industry & workflow.",
    image: "https://images.unsplash.com/photo-1659543690669-d40b1bfefc12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZHJvbmUlMjAzZCUyMHNjYW5uaW5nfGVufDF8fHx8MTc1ODAzMDQxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Custom industrial solutions"
  }
];

export function Industries() {
  return (
    <section id="industries" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Industries We Serve
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From mining operations to agricultural facilities, our AI-powered 3D vision technology 
            adapts to your specific inventory tracking needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={industry.image}
                  alt={industry.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
                <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm rounded-lg p-3">
                  <industry.icon className="h-6 w-6 text-primary-foreground" />
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl">{industry.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {industry.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}