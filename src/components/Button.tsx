"use client";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import {
    animate,
    HTMLMotionProps,
    motion,
    useMotionTemplate,
    useMotionValue,
} from "framer-motion";
import { forwardRef, useEffect, useState } from "react";

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
    extends HTMLMotionProps<"button">,
        VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        { className = "", block, variant = "primary", children, ...props },
        ref,
    ) => {
        const [isHovered, setIsHovered] = useState(false);
        const angle = useMotionValue(45);
        const background = useMotionTemplate`linear-gradient(var(--color-gray-950),var(--color-gray-950)) padding-box, conic-gradient(from ${angle}deg,var(--color-violet-400),var(--color-fuchsia-400),var(--color-amber-300),var(--color-teal-300)) border-box`;

        useEffect(() => {
            if (isHovered) {
                animate(angle, angle.get() + 360, {
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear",
                });
            } else {
                animate(angle, 45, { duration: 0.5 });
            }
        }, [isHovered, angle]);

        return (
            <motion.button
                ref={ref}
                className={cn(buttonVariants({ className, variant, block }))}
                onMouseEnter={() => {
                    setIsHovered(true);
                }}
                onMouseLeave={() => setIsHovered(false)}
                style={
                    variant === "primary"
                        ? {
                              background,
                          }
                        : undefined
                }
                {...props}
            >
                {children}
            </motion.button>
        );
    },
);

Button.displayName = "Button";

export { Button, buttonVariants };
