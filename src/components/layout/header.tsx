
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/logo";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <header className="py-4 border-b sticky top-0 bg-background/95 backdrop-blur z-50">
      <Container>
        <div className="flex items-center justify-between">
          <Logo />
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-6">
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">
              Возможности
            </a>
            <a href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
              Как это работает
            </a>
            <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
              Тарифы
            </a>
            <a href="#faq" className="text-sm font-medium hover:text-primary transition-colors">
              FAQ
            </a>
          </nav>
          
          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" size="sm">
              Войти
            </Button>
            <Button size="sm">
              Попробовать бесплатно
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[75vw] sm:max-w-sm">
              <div className="mt-6 flex flex-col gap-6">
                <a 
                  href="#features" 
                  className="text-base font-medium hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Возможности
                </a>
                <a 
                  href="#how-it-works" 
                  className="text-base font-medium hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Как это работает
                </a>
                <a 
                  href="#pricing" 
                  className="text-base font-medium hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Тарифы
                </a>
                <a 
                  href="#faq" 
                  className="text-base font-medium hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  FAQ
                </a>
                <div className="flex flex-col gap-3 pt-4">
                  <Button variant="outline" onClick={() => setIsOpen(false)}>
                    Войти
                  </Button>
                  <Button onClick={() => setIsOpen(false)}>
                    Попробовать бесплатно
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
}
