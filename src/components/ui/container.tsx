
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div 
      className={cn(
        "relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8",
        "transition-all duration-300 ease-in-out",
        className
      )} 
      {...props}
    >
      {children}
    </div>
  );
}
