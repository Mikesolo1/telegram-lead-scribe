
import { ArrowRight, MessageSquare, Bot, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DemoForm } from "@/components/forms/demo-form";
import { ContactForm } from "@/components/forms/contact-form";
import { useIsMobile } from "@/hooks/use-mobile";

export function HeroSection() {
  const isMobile = useIsMobile();
  
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-secondary/50 pt-8 sm:pt-12 md:pt-16 pb-12 sm:pb-16 md:pb-20">
      <Container className="relative">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6 max-w-xl animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
              Лиды в Telegram.<br/>
              <span className="text-primary">Обогащённые и квалифицированные на автопилоте.</span>
            </h1>
            
            <p className="text-base sm:text-lg text-gray-600">
              AI-парсер, скоринг и обогащение данных — полностью автоматизированный сервис генерации и квалификации лидов с помощью ИИ для B2B-команд продаж и маркетинга.
            </p>
            
            <div className="flex flex-wrap gap-3 sm:gap-4 pt-2">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size={isMobile ? "default" : "lg"} className="gap-2">
                    Попробовать бесплатно <ArrowRight className="h-4 w-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Начните бесплатно</DialogTitle>
                    <DialogDescription>
                      Заполните форму, чтобы получить доступ к бесплатной версии сервиса.
                    </DialogDescription>
                  </DialogHeader>
                  <ContactForm />
                </DialogContent>
              </Dialog>
              
              <Dialog>
                <DialogTrigger asChild>
                  <Button size={isMobile ? "default" : "lg"} variant="outline" className="gap-2">
                    Заказать демо
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Запросить демонстрацию</DialogTitle>
                    <DialogDescription>
                      Наш менеджер свяжется с вами и проведет персональную демонстрацию.
                    </DialogDescription>
                  </DialogHeader>
                  <DemoForm />
                </DialogContent>
              </Dialog>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
              <div className="flex items-center gap-2">
                <Bot className="h-5 w-5 text-primary" />
                <span className="text-sm text-gray-600">100% автоматизация</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-primary" />
                <span className="text-sm text-gray-600">Интеграция с AMO CRM</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                <span className="text-sm text-gray-600">AI-скоринг лидов</span>
              </div>
            </div>
          </div>
          
          <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] w-full rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 border overflow-hidden">
            <div className="absolute inset-0 p-4 sm:p-6 flex flex-col">
              <div className="bg-white rounded-lg shadow-lg p-3 mb-3 self-start animate-flow-right">
                <div className="text-sm">🔥 <span className="font-medium">Горячий лид:</span> "Ищем решение для автоматизации продаж"</div>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-3 mb-3 self-start ml-4 animate-flow-right" style={{ animationDelay: "300ms" }}>
                <div className="text-sm">📊 <span className="font-medium">AI-скоринг:</span> Горячий (87%)</div>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-3 mb-3 self-start ml-8 animate-flow-right" style={{ animationDelay: "600ms" }}>
                <div className="text-sm">👤 <span className="font-medium">Обогащение:</span> Иван Петров, +7 (999) 123-45-67, ivan@example.com</div>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-3 mb-3 self-start ml-12 animate-flow-right" style={{ animationDelay: "900ms" }}>
                <div className="text-sm">🔄 <span className="font-medium">CRM:</span> Данные успешно загружены в AMO CRM</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
