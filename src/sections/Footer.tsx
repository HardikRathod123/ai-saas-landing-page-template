"use client";
import {
    faDiscord,
    faXTwitter,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
    {
        name: "Login",
        href: "#login",
    },
];

export const socialLinks = [
    {
        name: "Youtube",
        icon: faYoutube,
        href: "#youtube",
    },
    {
        name: "X",
        icon: faXTwitter,
        href: "#x",
    },
    {
        name: "Discord",
        icon: faDiscord,
        href: "#discord",
    },
];

export const Footer = () => {
    return (
        <footer>
            <div className="container py-8">
                <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
                    <div className="text-2xl font-extrabold">sphereal.ai</div>
                    <nav className="flex flex-col items-center gap-8 md:flex-row md:gap-16">
                        {navItems.map(({ href, name }) => (
                            <a
                                key={name}
                                href={href}
                                className="text-xs font-bold uppercase tracking-widest text-gray-400"
                                onClick={(e) => {
                                    e.preventDefault();
                                    const element =
                                        document.querySelector(href);
                                    if (element)
                                        element.scrollIntoView({
                                            behavior: "smooth",
                                        });
                                }}
                            >
                                {name}
                            </a>
                        ))}
                    </nav>
                </div>
                <div className="mt-16 flex flex-col items-center justify-between gap-8 md:flex-row-reverse">
                    <div className="flex justify-center gap-6">
                        {socialLinks.map(({ href, icon, name }) => (
                            <a
                                href={href}
                                key={name}
                                className="inline-flex size-10 items-center justify-center rounded-full bg-gray-900"
                            >
                                <FontAwesomeIcon
                                    icon={icon}
                                    className="size-4"
                                />
                            </a>
                        ))}
                    </div>
                    <p className="text-sm text-gray-500">
                        &copy; Frontend Tribe, All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
