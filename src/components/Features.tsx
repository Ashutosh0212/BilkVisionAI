import { Eye, Zap, BarChart3, Shield, Clock, Cpu } from "lucide-react";

const features = [
  {
    icon: Eye,
    title: "Precision 3D Vision",
    description: "Advanced computer vision algorithms provide millimeter-accurate measurements of your stockpiles."
  },
  {
    icon: Zap,
    title: "Real-time Monitoring",
    description: "Get instant updates on inventory levels with automated drone scanning and AI analysis."
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics",
    description: "Forecast consumption patterns and optimize delivery schedules with AI-powered insights."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade encryption and secure cloud infrastructure protect your operational data."
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Continuous monitoring ensures you never run out of critical materials unexpectedly."
  },
  {
    icon: Cpu,
    title: "AI-Powered Accuracy",
    description: "Machine learning models trained on millions of data points ensure consistent precision."
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Powered by Advanced AI Technology
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our cutting-edge platform combines drone technology, 3D computer vision, 
            and machine learning to deliver unparalleled inventory insights.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}