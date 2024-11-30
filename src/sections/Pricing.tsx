import { Button, ButtonProps } from "@/components/Button";
import { SectionContent } from "@/components/SectionContent";
import { SectionDivider } from "@/components/SectionDivider";
import { cn } from "@/lib/utils";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const pricingTiers = [
    {
        title: "Basic",
        description: "AI chatbot, personalized recommendations",
        price: "Free",
        buttonText: "Get Started",
        features: [
            "Access to AI chatbot for natural language conversations",
            "Basic task automation for simple workflows",
            "Limited message history storage",
        ],
        color: "amber",
        buttonVariant: "secondary",
        className: "lg:py-12 lg:my-6",
    },
    {
        title: "Premium",
        description: "Advanced AI capabilities for enhanced productivity",
        price: 99,
        buttonText: "Upgrade to Premium",
        features: [
            "All Basic features included",
            "Priority access to new AI features and updates",
            "Advanced automation tools for seamless task management",
            "Customizable chat templates for your specific workflows",
        ],
        color: "violet",
        buttonVariant: "secondary",
        className: "lg:py-18 lg:my-0",
    },
    {
        title: "Enterprise",
        description: "Custom AI chatbot, advanced analytics, dedicated account",
        price: null,
        buttonText: "Contact Us",
        buttonVariant: "primary",
        features: [
            "All Premium features included",
            "Dedicated account manager and priority customer support",
            "Enhanced security and compliance features for large teams",
            "Custom AI models tailored to your organization's needs",
            "API access for seamless integration with enterprise systems",
        ],
        color: "teal",
        className: "lg:py-12 lg:my-6",
    },
] satisfies {
    title: string;
    description: string;
    price: number | string | null;
    buttonText: string;
    features: string[];
    color: "amber" | "violet" | "teal";
    buttonVariant?: ButtonProps["variant"];
    className?: string;
}[];

export const Pricing = () => {
    return (
        <section>
            <SectionDivider />
            <SectionContent>
                <h2 className="text-center text-3xl font-semibold leading-tight text-gray-200 md:text-4xl lg:text-5xl">
                    Flexible plans for every need
                </h2>
                <div className="mt-12 flex flex-col items-start gap-8 lg:flex-row">
                    {pricingTiers.map(
                        ({
                            title,
                            price,
                            buttonText,
                            className,
                            color,
                            description,
                            features,
                            buttonVariant,
                        }) => (
                            <div
                                className={cn(
                                    "mx-auto max-w-sm flex-1 rounded-3xl border border-border px-6 py-12",
                                    className,
                                )}
                                key={title}
                            >
                                <h3
                                    className={cn(
                                        "text-4xl font-semibold",
                                        color === "amber" && "text-amber-300",
                                        color === "violet" && "text-violet-400",
                                        color === "teal" && "text-teal-300",
                                    )}
                                >
                                    {title}
                                </h3>
                                <p className="mt-4 text-gray-400">
                                    {description}
                                </p>
                                <div className="mt-8">
                                    {typeof price === "number" && (
                                        <span className="align-top text-2xl font-semibold text-gray-200">
                                            $
                                        </span>
                                    )}
                                    <span className="text-7xl font-semibold text-gray-200">
                                        {price ? price : <>&nbsp;</>}
                                    </span>
                                </div>
                                <Button
                                    variant={buttonVariant}
                                    block
                                    className="mt-8"
                                >
                                    {buttonText}
                                </Button>
                                <ul className="mt-8 flex flex-col gap-4">
                                    {features.map((feature, index) => (
                                        <li
                                            key={index}
                                            className="flex gap-4 border-t border-border pt-4"
                                        >
                                            <FontAwesomeIcon
                                                icon={faCheckCircle}
                                                className="size-6 flex-shrink-0 text-violet-400"
                                            />
                                            <span className="font-medium">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ),
                    )}
                </div>
            </SectionContent>
        </section>
    );
};

export default Pricing;
