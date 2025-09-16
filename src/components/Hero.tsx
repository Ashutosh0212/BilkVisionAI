import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                BulkVision AI — Track Bulk Inventory with Precision{" "}
                <span className="text-primary">3-D Vision</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                See into your stockpiles. Measure with accuracy. Make confident decisions.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Book a Demo Today
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 text-sm text-muted-foreground">
              <div>
                <div className="font-semibold text-foreground">99.5%</div>
                <div>Accuracy Rate</div>
              </div>
              <div>
                <div className="font-semibold text-foreground">24/7</div>
                <div>Monitoring</div>
              </div>
              <div>
                <div className="font-semibold text-foreground">Real-time</div>
                <div>Updates</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1659543690669-d40b1bfefc12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZHJvbmUlMjAzZCUyMHNjYW5uaW5nfGVufDF8fHx8MTc1ODAzMDQxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Industrial drone 3D scanning technology"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating stats cards */}
            <div className="absolute -bottom-4 -left-4 bg-card border rounded-lg p-4 shadow-lg">
              <div className="text-2xl font-bold text-primary">±2%</div>
              <div className="text-sm text-muted-foreground">Volume Accuracy</div>
            </div>
            
            <div className="absolute -top-4 -right-4 bg-card border rounded-lg p-4 shadow-lg">
              <div className="text-2xl font-bold text-primary">5min</div>
              <div className="text-sm text-muted-foreground">Scan Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}