import { cn } from "@/lib/utils";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ComponentPropsWithoutRef } from "react";

export const SectionDivider = ({
    className,
    ...rest
}: ComponentPropsWithoutRef<"div">) => {
    return (
        <div className={cn("relative", className)} {...rest}>
            <div className="h-px w-full bg-border"></div>
            <div className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2">
                <FontAwesomeIcon
                    icon={faPlus}
                    className="size-4 text-gray-200"
                />
            </div>
            <div className="absolute right-0 top-0 -translate-y-1/2 translate-x-1/2">
                <FontAwesomeIcon
                    icon={faPlus}
                    className="size-4 text-gray-200"
                />
            </div>
        </div>
    );
};
