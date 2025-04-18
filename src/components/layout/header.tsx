
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/logo";

export function Header() {
  return (
    <header className="py-4 border-b sticky top-0 bg-background/95 backdrop-blur z-50">
      <Container>
        <div className="flex items-center justify-between">
          <Logo />
          <nav className="hidden md:flex items-center gap-6">
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
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              Войти
            </Button>
            <Button size="sm">
              Попробовать бесплатно
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
