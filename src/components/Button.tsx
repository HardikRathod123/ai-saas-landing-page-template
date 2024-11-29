import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef } from "react";

const buttonVariants = cva(
    "h-10 px-6 text-xs font-bold uppercase tracking-widest rounded-lg",
    {
        variants: {
            variant: {
                primary: "border-gradient",
                secondary: "bg-gray-100 text-gray-950",
                tertiary: "bg-gray-800 text-gray-200",
            },
            block: {
                true: "w-full",
            },
        },
        defaultVariants: {
            variant: "primary",
        },
    },
);

export interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className = "", block, variant, children, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(buttonVariants({ className, variant, block }))}
                {...props}
            >
                {children}
            </button>
        );
    },
);

Button.displayName = "Button";

export { Button, buttonVariants };
