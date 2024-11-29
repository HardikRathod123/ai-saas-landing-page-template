import logoImage from "@/assets/images/sphereal-logo.svg?url";
import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";
export const Logo = ({
    className,
    ...rest
}: ComponentPropsWithoutRef<"div">) => {
    return (
        <div
            className={cn(
                "size-10 bg-[conic-gradient(from_45deg,var(--color-violet-400),var(--color-fuchsia-400),var(--color-amber-300),var(--color-teal-300))]",
                className,
            )}
            {...rest}
            style={{
                maskImage: `url(${logoImage.src})`,
                maskSize: "contain",
            }}
        ></div>
    );
};
