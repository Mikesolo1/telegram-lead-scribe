
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { TestimonialCard } from "@/components/testimonial-card";

const testimonials = [
  {
    quote: "За первый месяц использования сервиса количество квалифицированных лидов выросло на 43%. Теперь наши менеджеры тратят время только на общение с заинтересованными клиентами.",
    author: "Алексей Петров",
    role: "Руководитель отдела продаж",
    company: "DigitalSales Pro"
  },
  {
    quote: "Скорость обработки потенциальных клиентов выросла в 3 раза. Настроили интеграцию с AMO CRM за 10 минут, и теперь все работает на автопилоте.",
    author: "Мария Иванова",
    role: "Маркетинг-директор",
    company: "TechMarketing"
  },
  {
    quote: "В сравнении с другими методами генерации лидов, TelegramLeadScribe дает самую высокую конверсию в продажи. Клиенты из Telegram оказались на 27% более платежеспособными.",
    author: "Дмитрий Сидоров",
    role: "CEO",
    company: "GrowthHackers"
  }
];

export function TestimonialsSection() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Что говорят наши клиенты
          </h2>
          <p className="text-lg text-gray-600">
            Реальные отзывы от компаний, которые уже используют нашу платформу
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              company={testimonial.company}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
