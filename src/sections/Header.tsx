"use client";
import { Button } from "@/components/Button";
import { Logo } from "@/components/Logo";
import { Orbit } from "@/components/Orbit";
import { cn } from "@/lib/utils";
import { useState } from "react";
export const navItems = [
    {
        name: "Features",
        href: "#features",
    },
    {
        name: "Pricing",
        href: "#pricing",
    },
    {
        name: "Testimonials",
        href: "#testimonials",
    },
];

export const loginItems = [
    {
        buttonVariant: "tertiary",
        name: "Login",
        href: "#login",
    },
    {
        buttonVariant: "primary",
        name: "Sign Up",
        href: "#sign-up",
    },
];

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <>
            <header className="relative z-40">
                <div className="container">
                    <div className="flex h-18 items-center justify-between lg:h-20">
                        <div className="flex items-center gap-4">
                            <Logo />
                            <div className="text-2xl font-extrabold">
                                sphereal.ai
                            </div>
                        </div>
                        <div className="hidden h-full lg:block">
                            <nav className="h-full">
                                {navItems.map(({ name, href }) => (
                                    <a
                                        key={href}
                                        href={href}
                                        className="relative inline-flex h-full items-center px-10 text-xs font-bold uppercase tracking-widest text-gray-400 before:absolute before:bottom-0 before:left-0 before:h-2 before:w-px before:bg-gray-200/20 before:content-[''] after:absolute after:bottom-0 after:right-0 after:hidden after:h-2 after:w-px after:bg-gray-200/20 after:content-[''] last:after:block"
                                    >
                                        {name}
                                    </a>
                                ))}
                            </nav>
                        </div>
                        <div className="hidden gap-4 lg:flex">
                            <a href="#">
                                <Button variant={"tertiary"}>Login</Button>
                            </a>
                            <a href="#">
                                <Button>Sign up</Button>
                            </a>
                        </div>
                        <div className="flex items-center lg:hidden">
                            <Button
                                className="relative size-10 px-0"
                                onClick={() => setIsMenuOpen((curr) => !curr)}
                            >
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <div
                                        className={cn(
                                            "h-0.5 w-4 -translate-y-1 bg-gray-100 transition-transform duration-300",
                                            isMenuOpen &&
                                                "translate-y-0 rotate-45",
                                        )}
                                    ></div>
                                </div>
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <div
                                        className={cn(
                                            "h-0.5 w-4 translate-y-1 bg-gray-100 transition-transform duration-300",
                                            isMenuOpen &&
                                                "translate-y-0 -rotate-45",
                                        )}
                                    ></div>
                                </div>
                            </Button>
                        </div>
                    </div>
                </div>
            </header>
            {isMenuOpen && (
                <div className="fixed bottom-0 left-0 right-0 top-18 z-30 overflow-hidden bg-gray-950">
                    <div className="absolute-center isolate -z-10">
                        <Orbit />
                    </div>
                    <div className="absolute-center isolate -z-10">
                        <Orbit className="size-[350px]" />
                    </div>
                    <div className="absolute-center isolate -z-10">
                        <Orbit className="size-[500px]" />
                    </div>
                    <div className="absolute-center isolate -z-10">
                        <Orbit className="size-[650px]" />
                    </div>
                    <div className="absolute-center isolate -z-10">
                        <Orbit className="size-[800px]" />
                    </div>
                    <div className="container h-full">
                        <nav className="flex h-full flex-col items-center justify-center gap-4 py-8">
                            {navItems.map(({ name, href }) => (
                                <a
                                    key={href}
                                    href={href}
                                    className="h-10 text-xs uppercase tracking-widest text-gray-400"
                                >
                                    {name}
                                </a>
                            ))}
                            <a href="#" className="w-full max-w-xs">
                                <Button className="" block variant={"tertiary"}>
                                    Login
                                </Button>
                            </a>
                            <a href="#" className="w-full max-w-xs">
                                <Button block>Sign up</Button>
                            </a>
                        </nav>
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;
