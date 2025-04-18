
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";
import { ContactForm } from "@/components/forms/contact-form";

export function CtaSection() {
  return (
    <Section className="bg-primary/10 border-y">
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-xl">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Готовы автоматизировать поиск лидов в Telegram?
            </h2>
            <p className="text-lg text-gray-600">
              Присоединяйтесь к сотням компаний, которые уже используют наш сервис для роста продаж. Попробуйте бесплатно прямо сейчас.
            </p>
          </div>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg" className="gap-2">
                Начать бесплатно <ArrowRight className="h-4 w-4" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Создать аккаунт</DialogTitle>
                <DialogDescription>
                  Заполните форму, чтобы начать пользоваться сервисом.
                </DialogDescription>
              </DialogHeader>
              <ContactForm />
            </DialogContent>
          </Dialog>
        </div>
      </Container>
    </Section>
  );
}
