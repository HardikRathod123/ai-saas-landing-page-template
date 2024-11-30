import underlineImage from "@/assets/images/underline.svg?url";
import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

export const UnderlineText = ({
    text,
    className,
    ...rest
}: {
    text: string;
} & ComponentPropsWithoutRef<"span">) => {
    return (
        <span className={cn("relative isolate", className)} {...rest}>
            <span>{text}</span>
            <span
                className="absolute left-0 top-full h-4 w-full -translate-y-1/2 bg-[linear-gradient(to_right,var(--color-amber-300),var(--color-teal-300),var(--color-violet-400),var(--color-fuchsia-400))]"
                style={{
                    maskImage: `url(${underlineImage.src})`,
                    maskSize: "contain",
                    maskRepeat: "no-repeat",
                    maskPosition: "center",
                }}
            ></span>
        </span>
    );
};
