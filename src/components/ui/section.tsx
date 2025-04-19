
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export function Section({ children, className, ...props }: SectionProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden py-10 sm:py-12 md:py-16 lg:py-20",
        "transition-all duration-300 ease-in-out",
        "hover:bg-gradient-to-b hover:from-transparent hover:via-primary/5 hover:to-transparent",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
