
import { MessageSquareText } from "lucide-react";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

export function Logo({ className, iconOnly = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 text-primary ${className}`}>
      <MessageSquareText className="h-6 w-6" />
      {!iconOnly && <span className="font-bold text-xl">TelegramLeadScribe</span>}
    </div>
  );
}
