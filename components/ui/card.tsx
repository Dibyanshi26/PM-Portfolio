import * as React from "react";
import { cn } from "@/lib/utils";

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl border border-line bg-white/60 backdrop-blur-sm shadow-[0_1px_2px_rgba(28,27,25,0.04)] transition-all duration-500 ease-out",
        className
      )}
      {...props}
    />
  )
);
Card.displayName = "Card";

export { Card };
