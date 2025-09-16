import { Button } from "./ui/button";

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => onNavigate('home')}>
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold">B</span>
          </div>
          <span className="font-bold text-lg">BulkVision AI</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => onNavigate('home')}
            className={`transition-colors ${
              currentPage === 'home' 
                ? 'text-foreground' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Home
          </button>
          <button 
            onClick={() => {
              onNavigate('home');
              setTimeout(() => {
                const industriesSection = document.getElementById('industries');
                if (industriesSection) {
                  industriesSection.scrollIntoView({ behavior: 'smooth' });
                }
              }, 100);
            }}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Industries
          </button>
          <button 
            onClick={() => {
              onNavigate('home');
              setTimeout(() => {
                const featuresSection = document.getElementById('features');
                if (featuresSection) {
                  featuresSection.scrollIntoView({ behavior: 'smooth' });
                }
              }, 100);
            }}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Features
          </button>
          <button 
            onClick={() => onNavigate('contact')}
            className={`transition-colors ${
              currentPage === 'contact' 
                ? 'text-foreground' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Contact
          </button>
        </nav>
        
        <Button className="hidden md:inline-flex">
          Book Demo
        </Button>
      </div>
    </header>
  );
}