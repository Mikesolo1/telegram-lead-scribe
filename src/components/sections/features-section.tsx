
import { CircleCheck, Zap, BrainCircuit, Layers, Database, BarChart3 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Zap,
    title: "100% Автоматизация",
    description: "Никаких ручных копипаст: экономия времени и ресурсов. Настройте один раз и получайте лиды на автопилоте."
  },
  {
    icon: BrainCircuit,
    title: "AI-квалификация лидов",
    description: "Только горячие и тёплые лиды в вашей воронке продаж. ИИ автоматически оценивает степень интереса."
  },
  {
    icon: Database,
    title: "Мгновенное обогащение",
    description: "Полные профили с телефоном, email, данными соцсетей. Никаких дополнительных поисков."
  },
  {
    icon: Layers,
    title: "Прямая интеграция с CRM",
    description: "Лиды сразу в AMO CRM (и другие системы) без промежуточных таблиц и ручного переноса данных."
  },
  {
    icon: CircleCheck,
    title: "Гибкая пакетная загрузка",
    description: "Загружайте списки телефонов, email или Telegram-юзернеймов и получайте готовые профили."
  },
  {
    icon: BarChart3,
    title: "Полная история и отчёты",
    description: "Логи парсинга, анализа, экспорта — прозрачная отчётность и измеримые KPI."
  }
];

export function FeaturesSection() {
  return (
    <Section id="features" className="bg-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Полный цикл от поиска до обогащения лидов
          </h2>
          <p className="text-lg text-gray-600">
            Наша платформа автоматизирует все этапы работы с лидами в Telegram: от поиска потенциальных клиентов до их квалификации и выгрузки в CRM.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border border-gray-200 hover:border-primary/20 hover:shadow-md transition-all duration-300">
              <CardHeader className="pb-2">
                <feature.icon className="h-10 w-10 text-primary mb-2" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
