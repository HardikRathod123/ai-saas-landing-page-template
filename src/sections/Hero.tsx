"use client";
import Loader from "@/assets/images/loader-animated.svg";
import robotImage from "@/assets/images/robot.jpg";
import { Button } from "@/components/Button";
import { Orbit } from "@/components/Orbit";
import { Planet } from "@/components/Planet";
import { SectionContent } from "@/components/SectionContent";
import { UnderlineText } from "@/components/UnderlineText";
import {
    motion,
    useMotionValue,
    useScroll,
    useSpring,
    useTransform,
} from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const orbitsSizes = ["350px", "600px", "850px", "1100px", "1350px"];

const useMousePosition = () => {
    const [innerWidth, setInnerWidth] = useState(1);
    const [innerHeight, setInnerHeight] = useState(1);
    const clientX = useMotionValue(0);
    const clientY = useMotionValue(0);
    const xProgress = useTransform(clientX, [0, innerWidth], [0, 1]);
    const yProgress = useTransform(clientY, [0, innerHeight], [0, 1]);

    useEffect(() => {
        setInnerWidth(window.innerWidth);
        setInnerHeight(window.innerHeight);
        window.addEventListener("resize", () => {
            setInnerWidth(window.innerWidth);
            setInnerHeight(window.innerHeight);
        });

        return () => {
            window.removeEventListener("resize", () => {
                setInnerWidth(window.innerWidth);
                setInnerHeight(window.innerHeight);
            });
        };
    }, []);

    useEffect(() => {
        window.addEventListener("mousemove", (event) => {
            clientX.set(event.clientX);
            clientY.set(event.clientY);
        });
        return () => {
            window.removeEventListener("mousemove", (event) => {
                clientX.set(event.clientX);
                clientY.set(event.clientY);
            });
        };
    }, []);

    return { xProgress, yProgress };
};

export const Hero = () => {
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["end start", "start end"],
    });
    const translateY = useTransform(scrollYProgress, [0, 1], [200, -200]);

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
        <section ref={sectionRef}>
            <SectionContent className="relative isolate overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
                {/* bg gradients */}
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_farthest-corner,var(--color-fuchsia-900)_50%,var(--color-indigo-900)_75%,transparent)] [mask-image:radial-gradient(circle_farthest-corner,black,transparent)]"></div>
                {/* Orbits */}
                <div className="absolute inset-0 -z-10">
                    {orbitsSizes.map((size) => (
                        <div className="absolute-center" key={size}>
                            <Orbit
                                style={{
                                    width: size,
                                    height: size,
                                }}
                            />
                        </div>
                    ))}
                </div>
                {/* Content */}
                <h1 className="text-center text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
                    Unlock the Future of AI Conversations with{" "}
                    <UnderlineText text="Sphereal" />
                </h1>
                <p className="mx-auto mt-8 max-w-3xl text-center text-lg md:text-xl">
                    Harness the power of AI with Sphereal. Elevate your
                    productivity and streamline your workflow with our
                    cutting-edge AI chat platform.
                </p>
                <div className="flex justify-center">
                    <Button variant={"secondary"} className="mt-10">
                        Start chatting
                    </Button>
                </div>
                <div className="relative isolate mx-auto max-w-5xl">
                    <div className="absolute left-1/2 top-0">
                        <motion.div
                            style={{
                                x: translateLargeX,
                                y: translateLargeY,
                            }}
                        >
                            <Planet
                                color="violet"
                                size={"lg"}
                                className="-translate-x-[315px] -translate-y-[76px] rotate-135"
                            />
                        </motion.div>
                        <motion.div
                            style={{
                                x: translateLargeX,
                                y: translateLargeY,
                            }}
                        >
                            <Planet
                                color="violet"
                                size={"lg"}
                                className="-translate-y-[190px] translate-x-[333px] -rotate-135"
                            />
                        </motion.div>
                        <motion.div
                            style={{
                                x: translateSmallX,
                                y: translateSmallY,
                            }}
                        >
                            <Planet
                                className="-translate-x-[510px] -translate-y-[372px] rotate-135"
                                color="fuchsia"
                                size="sm"
                            />
                        </motion.div>
                        <motion.div
                            style={{
                                x: translateMediumX,
                                y: translateMediumY,
                            }}
                        >
                            <Planet
                                className="-translate-y-[342px] translate-x-[487px] -rotate-135"
                                color="teal"
                                size="md"
                            />
                        </motion.div>
                    </div>
                    {/* Chat boxes */}
                    <div className="absolute left-0 top-[30%] z-10 hidden -translate-x-10 lg:block">
                        <motion.div
                            className="w-72 rounded-xl border border-gray-700 bg-gray-800/70 p-4 backdrop-blur-md"
                            style={{
                                y: translateY,
                            }}
                        >
                            <div className="">
                                Can you generate an incredible frontend dev
                                video tutorial?
                            </div>
                            <div className="text-right text-sm font-semibold text-gray-400">
                                1m ago
                            </div>
                        </motion.div>
                    </div>
                    <div className="absolute right-0 top-[50%] z-10 hidden translate-x-10 lg:block">
                        <motion.div
                            className="w-72 rounded-xl border border-gray-700 bg-gray-800/70 p-4 backdrop-blur-md"
                            style={{
                                y: translateY,
                            }}
                        >
                            <div className="">
                                <strong>Brainwave: </strong>I created one based
                                on videos from Frontend Tribe!
                            </div>
                            <div className="text-right text-sm font-semibold text-gray-400">
                                Just now
                            </div>
                        </motion.div>
                    </div>
                    <div className="border-gradient relative mt-20 overflow-hidden rounded-2xl">
                        <Image src={robotImage} alt="Robot Image" />
                        <div className="absolute bottom-2 left-1/2 w-full max-w-xs -translate-x-1/2 px-4 md:bottom-4 lg:bottom-10">
                            <div className="flex w-[320px] max-w-full items-center gap-4 rounded-2xl bg-gray-950/80 px-4 py-2">
                                <Loader className="text-violet-400" />
                                <div className="text-xl font-semibold text-gray-100">
                                    AI is generating
                                    <span className="animate-cursor-blink">
                                        |
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionContent>
        </section>
    );
};

export default Hero;
