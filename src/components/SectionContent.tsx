import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

export const SectionContent = ({
    className,
    children,
    ...rest
}: ComponentPropsWithoutRef<"div">) => {
    return (
        <div
            className={cn("container py-24 md:py-36 lg:py-48", className)}
            {...rest}
        >
            {children}
        </div>
    );
};
