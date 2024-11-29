import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

export const SectionBorder = ({
    className,
    children,
    ...rest
}: ComponentPropsWithoutRef<"div">) => {
    return (
        <div
            className={cn("border-border border-l border-r", className)}
            {...rest}
        >
            {children}
        </div>
    );
};
