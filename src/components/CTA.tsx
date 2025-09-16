import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ArrowRight, Calendar } from "lucide-react";

export function CTA() {
  return (
    <section id="demo" className="py-20 px-4 bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to transform how you manage inventory?
            </h2>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Join hundreds of companies already using BulkVision AI to optimize their operations. 
              Book a personalized demo and see the difference precision 3D vision can make.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input 
              placeholder="Enter your work email" 
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
            />
            <Button variant="secondary" size="lg" className="group shrink-0">
              <Calendar className="mr-2 h-4 w-4" />
              Book Demo Today
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-primary-foreground/80">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary-foreground/60 rounded-full" />
              <span>Free 30-day trial</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary-foreground/60 rounded-full" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary-foreground/60 rounded-full" />
              <span>Setup in 24 hours</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}