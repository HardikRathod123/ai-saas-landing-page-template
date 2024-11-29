import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef } from "react";

const buttonVariants = cva(
    "h-10 px-6 text-xs font-bold uppercase tracking-widest rounded-lg",
    {
        variants: {
            variant: {
                primary:
                    "border-2 border-transparent [background:linear-gradient(var(--color-gray-950),var(--color-gray-950))_padding-box,conic-gradient(from_45deg,var(--color-violet-400),var(--color-fuchsia-400),var(--color-amber-300),var(--color-teal-300))_border-box]",
                secondary: "",
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
