
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const logos = [
  "AMO CRM",
  "Bitrix24",
  "Mindbox",
  "HubSpot",
  "Salesforce",
  "Pipedrive"
];

export function ClientsSection() {
  return (
    <Section className="bg-white py-12">
      <Container>
        <div className="text-center mb-8">
          <h2 className="text-lg font-medium text-gray-600">
            Интегрируется с популярными CRM-системами
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {logos.map((logo, index) => (
            <div 
              key={index} 
              className="h-12 flex items-center justify-center"
            >
              <div className="text-xl font-bold text-gray-400 hover:text-primary transition-colors">
                {logo}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
