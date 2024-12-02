"use client";
import { Button } from "@/components/Button";
import { Orbit } from "@/components/Orbit";
import { Planet } from "@/components/Planet";
import { SectionContent } from "@/components/SectionContent";
import { SectionDivider } from "@/components/SectionDivider";
import { UnderlineText } from "@/components/UnderlineText";
import { useMousePosition } from "@/hooks/useMousePosition";
import { motion, useSpring, useTransform } from "framer-motion";

export const CallToAction = () => {
    const { xProgress, yProgress } = useMousePosition();
    const springX = useSpring(xProgress);
    const springY = useSpring(yProgress);

    const translateLargeX = useTransform(springX, [0, 1], ["-25%", "25%"]);
    const translateLargeY = useTransform(springY, [0, 1], ["-25%", "25%"]);
    const translateMediumX = useTransform(springX, [0, 1], ["-50%", "50%"]);
    const translateMediumY = useTransform(springY, [0, 1], ["-50%", "50%"]);
    const translateSmallX = useTransform(springX, [0, 1], ["-200%", "200%"]);
    const translateSmallY = useTransform(springY, [0, 1], ["-200%", "200%"]);

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
                    <motion.div
                        style={{ x: translateLargeX, y: translateLargeY }}
                    >
                        <Planet
                            size={"lg"}
                            color="violet"
                            className="-translate-x-[200px] translate-y-[255px] rotate-45"
                        />
                    </motion.div>
                    <motion.div
                        style={{ x: translateLargeX, y: translateLargeY }}
                    >
                        <Planet
                            size={"lg"}
                            color="violet"
                            className="-translate-y-[175px] translate-x-[200px] -rotate-135"
                        />
                    </motion.div>
                    <motion.div
                        style={{ x: translateMediumX, y: translateMediumY }}
                    >
                        <Planet
                            size={"md"}
                            color="teal"
                            className="-translate-x-[495px] -translate-y-[5px] rotate-90"
                        />
                    </motion.div>
                    <motion.div
                        style={{ x: translateMediumX, y: translateMediumY }}
                    >
                        <Planet
                            size={"md"}
                            color="teal"
                            className="-translate-y-[130px] translate-x-[505px] -rotate-135"
                        />
                    </motion.div>
                    <motion.div
                        style={{ x: translateSmallX, y: translateSmallY }}
                    >
                        <Planet
                            size={"sm"}
                            color="fuchsia"
                            className="-translate-x-[390px] -translate-y-[298px] rotate-135"
                        />
                    </motion.div>
                    <motion.div
                        style={{ x: translateSmallX, y: translateSmallY }}
                    >
                        <Planet
                            size={"sm"}
                            color="fuchsia"
                            className="translate-x-[410px] translate-y-[85px] -rotate-45"
                        />
                    </motion.div>
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
