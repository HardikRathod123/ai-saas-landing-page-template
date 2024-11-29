import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentPropsWithRef } from "react";

const planetVariants = cva("rounded-full bg-gradient-to-b to-gray-950", {
    variants: {
        size: {
            sm: "size-4",
            md: "size-6",
            lg: "size-8",
        },
        color: {
            violet: "from-violet-400",
            teal: "from-teal-400",
            fuchsia: "from-fuchsia-400",
        },
    },
    defaultVariants: {
        size: "lg",
        color: "violet",
    },
});

export const Planet = ({
    className,
    size,
    color,
    ...rest
}: ComponentPropsWithRef<"div"> & VariantProps<typeof planetVariants>) => {
    return (
        <div
            className={cn(planetVariants({ className, color, size }))}
            {...rest}
        ></div>
    );
};
