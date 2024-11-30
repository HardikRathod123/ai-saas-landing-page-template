import { Button } from "@/components/Button";
import { Logo } from "@/components/Logo";
import { Orbit } from "@/components/Orbit";
import { SectionContent } from "@/components/SectionContent";
import { SectionDivider } from "@/components/SectionDivider";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import dockerLogo from "../assets/images/docker-logo.png";
import figmaLogo from "../assets/images/figma-logo.png";
import gcpLogo from "../assets/images/gcp-logo.png";
import githubLogo from "../assets/images/github-logo.png";
import jiraLogo from "../assets/images/jira-logo.png";
import notionLogo from "../assets/images/notion-logo.png";
import slackLogo from "../assets/images/slack-logo.png";
import vsCodeLogo from "../assets/images/vs-code-logo.png";
export const features = [
    "Effortless integration",
    "Intelligent automation",
    "Robust security",
];

export const logos = [
    {
        src: slackLogo,
        alt: "slack logo",
        rotate: 0,
    },
    {
        src: dockerLogo,
        alt: "docker logo",
        rotate: 45,
    },
    {
        src: figmaLogo,
        alt: "figma logo",
        rotate: 90,
    },
    {
        src: githubLogo,
        alt: "github logo",
        rotate: 135,
    },
    {
        src: vsCodeLogo,
        alt: "vs code logo",
        rotate: 180,
    },
    {
        src: notionLogo,
        alt: "notion logo",
        rotate: 225,
    },
    {
        src: jiraLogo,
        alt: "jira logo",
        rotate: 270,
    },
    {
        src: gcpLogo,
        alt: "gcp logo",
        rotate: 315,
    },
];

export const Features = () => {
    return (
        <section className="overflow-hidden">
            <SectionDivider />
            <SectionContent className="md:px-20 lg:px-40">
                <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">
                    <div>
                        <h1 className="text-3xl font-semibold leading-tight text-gray-200 md:text-4xl lg:text-5xl">
                            Your AI-powered collaboration companion
                        </h1>
                        <ul className="mt-12 flex flex-col gap-8">
                            {features.map((feature, index) => (
                                <li
                                    key={index}
                                    className="flex items-center gap-4"
                                >
                                    <FontAwesomeIcon
                                        icon={faCircleCheck}
                                        className="size-6 text-violet-400"
                                    />
                                    <span className="text-xl font-medium">
                                        {feature}
                                    </span>
                                </li>
                            ))}
                        </ul>
                        <Button className="mt-16">Try it now</Button>
                    </div>
                    <div className="flex justify-center">
                        <div className="relative size-[270px] flex-shrink-0 md:size-[450px]">
                            <div className="absolute inset-0">
                                <Orbit className="size-full" />
                            </div>
                            <div className="absolute-center">
                                <Orbit className="size-[180px] md:size-[300px]" />
                            </div>
                            <div className="absolute-center">
                                <Logo className="size-24" />
                            </div>
                            {logos.map(({ alt, rotate, src }) => (
                                <div
                                    className="absolute inset-0"
                                    key={alt}
                                    style={{
                                        transform: `rotate(${rotate}deg)`,
                                    }}
                                >
                                    <div
                                        className="absolute left-0 top-1/2 inline-flex size-10 items-center justify-center rounded-lg border border-border bg-gray-950 md:size-14"
                                        style={{
                                            transform: `translate(-50%,-50%) rotate(-${rotate}deg)`,
                                        }}
                                    >
                                        <Image
                                            src={src}
                                            alt={alt}
                                            className="size-6 md:size-9"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </SectionContent>
        </section>
    );
};

export default Features;
