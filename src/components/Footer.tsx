import { Shield, Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border bg-card">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Empowering Message */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center gap-2 mb-4">
              <Shield className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-foreground">StalkAware</span>
            </div>
            <p className="text-2xl font-semibold text-foreground mb-2">
              Empower Yourself Today
            </p>
            <p className="text-muted-foreground">
              Knowledge is your first line of defense. Stay informed, stay safe.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm">
            <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">Home</a>
            <a href="#what-are-they" className="text-muted-foreground hover:text-primary transition-colors">What Are They?</a>
            <a href="#how-they-operate" className="text-muted-foreground hover:text-primary transition-colors">How They Operate</a>
            <a href="#detection-tips" className="text-muted-foreground hover:text-primary transition-colors">Detection Tips</a>
            <a href="#protection-guide" className="text-muted-foreground hover:text-primary transition-colors">Protection Guide</a>
            <a href="#resources" className="text-muted-foreground hover:text-primary transition-colors">Resources</a>
          </div>

          {/* Divider */}
          <div className="border-t border-border pt-6">
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
              Made with <Heart className="h-4 w-4 text-accent" /> for digital safety © {currentYear}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
