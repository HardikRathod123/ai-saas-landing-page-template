import Loader from "@/assets/images/loader.svg";
import robotImage from "@/assets/images/robot.jpg";
import underlineImage from "@/assets/images/underline.svg?url";
import { Button } from "@/components/Button";
import { Orbit } from "@/components/Orbit";
import { Planet } from "@/components/Planet";
import Image from "next/image";

const orbitsSizes = ["350px", "600px", "850px", "1100px", "1350px"];

export const Hero = () => {
    return (
        <section>
            <div className="container">
                <div className="border-border border-l border-r">
                    <div className="container relative isolate overflow-hidden py-24 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] md:py-36">
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
                        <h1 className="text-center text-4xl font-semibold leading-tight md:text-5xl">
                            Unlock the Future of AI Conversations with{" "}
                            <span className="relative">
                                <span>Sphereal</span>
                                <span
                                    className="absolute left-0 top-full h-4 w-full -translate-y-1/2 bg-[linear-gradient(to_right,var(--color-amber-300),var(--color-teal-300),var(--color-violet-400),var(--color-fuchsia-400))]"
                                    style={{
                                        maskImage: `url(${underlineImage.src})`,
                                        maskSize: "contain",
                                        maskPosition: "center",
                                        maskRepeat: "no-repeat",
                                    }}
                                ></span>
                            </span>
                        </h1>
                        <p className="mt-8 text-center text-lg md:text-xl">
                            Harness the power of AI with Sphereal. Elevate your
                            productivity and streamline your workflow with our
                            cutting-edge AI chat platform.
                        </p>
                        <div className="flex justify-center">
                            <Button variant={"secondary"} className="mt-10">
                                Start chatting
                            </Button>
                        </div>
                        <div className="relative">
                            <div className="absolute left-1/2 top-0">
                                <Planet className="-translate-x-[315px] -translate-y-[76px] rotate-135" />
                            </div>
                            <div className="absolute left-1/2 top-0">
                                <Planet className="-translate-y-[155px] translate-x-[333px] -rotate-135" />
                            </div>
                            <div className="border-gradient relative mt-20 overflow-hidden rounded-2xl">
                                <Image src={robotImage} alt="Robot Image" />
                                <div className="absolute bottom-2 left-1/2 w-full max-w-xs -translate-x-1/2 px-4 md:bottom-4">
                                    <div className="flex w-[320px] max-w-full items-center gap-4 rounded-2xl bg-gray-950/80 px-4 py-2">
                                        <Loader className="text-violet-400" />
                                        <div className="text-xl font-semibold text-gray-100">
                                            AI is generating<span>|</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
