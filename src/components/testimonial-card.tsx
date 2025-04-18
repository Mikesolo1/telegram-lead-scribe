
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export function TestimonialCard({ quote, author, role, company }: TestimonialCardProps) {
  return (
    <Card className="h-full flex flex-col border border-gray-200 hover:border-primary/20 hover:shadow-md transition-all duration-300">
      <CardHeader className="pb-2">
        <div className="flex">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg 
              key={star} 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              className="w-5 h-5 text-yellow-400"
            >
              <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
            </svg>
          ))}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-gray-600 italic">"{quote}"</CardDescription>
      </CardContent>
      <CardFooter className="pt-4 border-t">
        <div>
          <p className="font-medium text-sm">{author}</p>
          <p className="text-xs text-gray-500">{role}, {company}</p>
        </div>
      </CardFooter>
    </Card>
  );
}
