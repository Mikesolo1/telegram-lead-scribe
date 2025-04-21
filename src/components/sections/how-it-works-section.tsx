
import { MessageSquare, Brain, Database, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const steps = [
  {
    icon: MessageSquare,
    title: "Парсинг сообщений",
    description: "Автоматический мониторинг выбранных Telegram-каналов и чатов по заданным ключевым словам.",
    color: "bg-primary/10",
    iconColor: "text-primary"
  },
  {
    icon: Brain,
    title: "AI-скоринг",
    description: "Искусственный интеллект анализирует контекст и квалифицирует лиды: холодные, тёплые, горячие.",
    color: "bg-blue-100",
    iconColor: "text-blue-600"
  },
  {
    icon: Database,
    title: "Обогащение данных",
    description: "Автоматический поиск и дополнение профилей контактной информацией: телефон, email, соцсети.",
    color: "bg-green-100",
    iconColor: "text-green-600"
  }
];

export function HowItWorksSection() {
  return (
    <Section id="how-it-works" className="bg-secondary/50">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Как работает Telegram-парсинг с AI
          </h2>
          <p className="text-lg text-gray-600">
            Три простых шага превращают сообщения в Telegram в готовую базу лидов
          </p>
        </div>
        
        <div className="relative">
          {/* Убрана горизонтальная линия */}
          
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative z-10 flex flex-col items-center text-center">
                <div className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center mb-4`}>
                  <step.icon className={`h-8 w-8 ${step.iconColor}`} />
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full -translate-x-1/2 z-10">
                    <ArrowRight className="h-5 w-5 text-gray-400" />
                  </div>
                )}
                
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 mx-auto max-w-2xl p-6 bg-white rounded-lg border shadow-sm">
            <h4 className="font-semibold text-lg mb-2">Результат:</h4>
            <div className="flex flex-col space-y-2">
              <div className="border rounded p-3">
                <span className="font-medium">Имя:</span> Александр Смирнов
              </div>
              <div className="border rounded p-3">
                <span className="font-medium">Телефон:</span> +7 (926) 123-45-67
              </div>
              <div className="border rounded p-3">
                <span className="font-medium">Email:</span> alex@example.com
              </div>
              <div className="border rounded p-3">
                <span className="font-medium">Скоринг:</span> <span className="text-green-600 font-semibold">Горячий (89%)</span>
              </div>
              <div className="border rounded p-3">
                <span className="font-medium">Действие:</span> <span className="text-primary">Автоматическая загрузка в AMO CRM</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
