import { Button } from "@/components/Button";
import { Orbit } from "@/components/Orbit";
import { Planet } from "@/components/Planet";
import { SectionContent } from "@/components/SectionContent";
import { SectionDivider } from "@/components/SectionDivider";
import { UnderlineText } from "@/components/UnderlineText";

export const CallToAction = () => {
    return (
        <section>
            <SectionDivider />
            <SectionContent className="relative isolate">
                {/* Background Gradient*/}
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_farthest-corner,var(--color-fuchsia-900)_50%,var(--color-indigo-900)_75%,transparent)] [mask-image:radial-gradient(circle_farthest-corner,black,transparent)]"></div>
                {/* Orbits */}
                <div className="absolute inset-0 -z-10">
                    <Orbit className="absolute-center size-[200px]" />
                    <Orbit className="absolute-center size-[350px]" />
                    <Orbit className="absolute-center size-[500px]" />
                    <Orbit className="absolute-center size-[650px]" />
                    <Orbit className="absolute-center size-[800px]" />
                </div>
                {/* Planets */}
                <div className="absolute-center -z-10">
                    <Planet
                        size={"lg"}
                        color="violet"
                        className="-translate-x-[200px] translate-y-[255px] rotate-45"
                    />
                    <Planet
                        size={"lg"}
                        color="violet"
                        className="-translate-y-[175px] translate-x-[200px] -rotate-135"
                    />
                    <Planet
                        size={"md"}
                        color="teal"
                        className="-translate-x-[495px] -translate-y-[5px] rotate-90"
                    />
                    <Planet
                        size={"md"}
                        color="teal"
                        className="-translate-y-[130px] translate-x-[505px] -rotate-135"
                    />
                    <Planet
                        size={"sm"}
                        color="fuchsia"
                        className="-translate-x-[390px] -translate-y-[298px] rotate-135"
                    />
                    <Planet
                        size={"sm"}
                        color="fuchsia"
                        className="translate-x-[410px] translate-y-[85px] -rotate-45"
                    />
                </div>
                {/* Content */}
                <div className="mx-auto max-w-2xl">
                    <h2 className="text-center text-3xl font-semibold leading-tight text-gray-200 md:text-4xl lg:text-5xl">
                        Join the AI Revolution with{" "}
                        <UnderlineText text="Sphereal" />
                    </h2>
                    <p className="mt-8 text-center text-xl">
                        Experience the transformative power of AI with Sphereal.
                        Boost your productivity and streamline your workflow
                        with our innovative AI chat platform.
                    </p>
                </div>
                <div className="mt-10 flex justify-center">
                    <Button variant={"secondary"}>Get Started</Button>
                </div>
            </SectionContent>
        </section>
    );
};

export default CallToAction;
