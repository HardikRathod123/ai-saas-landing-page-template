import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

export const Orbit = ({
    className,
    ...props
}: ComponentPropsWithoutRef<"div">) => {
    return (
        <div
            className={cn(
                "size-[200px] rounded-full border border-gray-200/30",
                className,
            )}
            {...props}
        ></div>
    );
};
