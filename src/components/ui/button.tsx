import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium font-display ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_0_20px_-4px_hsl(var(--primary)/0.4)]",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-border bg-transparent text-foreground hover:border-primary/50 hover:text-primary",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-secondary hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "bg-primary/20 text-primary-foreground backdrop-blur-md border border-primary/30 hover:bg-primary/30 hover:border-primary/50 hover:shadow-[0_0_30px_-4px_hsl(var(--primary)/0.4),inset_0_1px_0_0_hsl(var(--primary)/0.15)] text-base font-semibold",
        "hero-outline": "backdrop-blur-md bg-foreground/[0.06] border border-foreground/15 text-foreground hover:bg-foreground/[0.1] hover:border-primary/40 hover:text-primary hover:shadow-[0_0_20px_-6px_hsl(var(--primary)/0.25)] text-base",
        glass: "backdrop-blur-md bg-foreground/[0.06] border border-foreground/10 text-foreground hover:bg-foreground/[0.1] hover:border-primary/30 hover:shadow-[0_0_20px_-6px_hsl(var(--primary)/0.2)]",
        "glass-primary": "backdrop-blur-md bg-primary/15 border border-primary/25 text-primary-foreground hover:bg-primary/25 hover:border-primary/40 hover:shadow-[0_0_25px_-4px_hsl(var(--primary)/0.35),inset_0_1px_0_0_hsl(var(--primary)/0.1)]",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-md px-8",
        xl: "h-14 rounded-md px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
