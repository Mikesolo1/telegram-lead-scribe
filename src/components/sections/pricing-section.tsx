
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";
import { ContactForm } from "@/components/forms/contact-form";

const pricingPlans = [
  {
    name: "Пробный",
    description: "Идеально для первого знакомства с сервисом",
    price: "0 ₽",
    features: [
      "Доступ к 1 Telegram-каналу",
      "До 50 лидов в месяц",
      "Базовый AI-скоринг",
      "Ручной экспорт данных",
      "Email-поддержка"
    ],
    buttonText: "Попробовать бесплатно",
    buttonVariant: "outline" as const,
    popular: false
  },
  {
    name: "Профессиональный",
    description: "Для команд продаж с активным поиском лидов",
    price: "9 900 ₽",
    period: "в месяц",
    features: [
      "Доступ к 10 Telegram-каналам",
      "До 500 лидов в месяц",
      "Расширенный AI-скоринг",
      "Интеграция с AMO CRM",
      "Полное обогащение профилей",
      "Приоритетная поддержка"
    ],
    buttonText: "Начать сейчас",
    buttonVariant: "default" as const,
    popular: true
  },
  {
    name: "Корпоративный",
    description: "Для крупных команд с высокими требованиями",
    price: "От 24 900 ₽",
    period: "в месяц",
    features: [
      "Неограниченное число каналов",
      "Неограниченное число лидов",
      "Премиум AI-скоринг",
      "Интеграция с любой CRM",
      "API для разработчиков",
      "Персональный менеджер",
      "SLA 24/7"
    ],
    buttonText: "Связаться с отделом продаж",
    buttonVariant: "outline" as const,
    popular: false
  }
];

export function PricingSection() {
  return (
    <Section id="pricing" className="bg-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Простые и прозрачные тарифы
          </h2>
          <p className="text-lg text-gray-600">
            Выберите план, который соответствует вашим потребностям. 
            Все тарифы включают основные функции без скрытых платежей.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index} 
              className={`border ${plan.popular ? 'border-primary shadow-md relative' : 'border-gray-200'}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Популярный выбор
                  </span>
                </div>
              )}
              
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-gray-500"> {plan.period}</span>}
                </div>
                
                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant={plan.buttonVariant} className="w-full">
                      {plan.buttonText}
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Начать с тарифа {plan.name}</DialogTitle>
                      <DialogDescription>
                        Заполните форму, чтобы наш менеджер связался с вами для активации.
                      </DialogDescription>
                    </DialogHeader>
                    <ContactForm />
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
