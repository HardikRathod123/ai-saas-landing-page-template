import logoImage from "@/assets/images/sphereal-logo.svg?url";
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
    return (
        <header className="border-b border-gray-200/20">
            <div className="container">
                <div className="flex h-18 items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div
                            className="size-10 bg-[conic-gradient(from_45deg,var(--color-violet-400),var(--color-fuchsia-400),var(--color-amber-300),var(--color-teal-300))]"
                            style={{
                                maskImage: `url(${logoImage.src})`,
                                maskSize: "contain",
                            }}
                        ></div>
                        <div className="text-2xl font-extrabold">
                            sphereal.ai
                        </div>
                    </div>
                    <div></div>
                    <div className="flex items-center">
                        <button className="relative size-10 rounded-lg border-2 border-transparent [background:linear-gradient(var(--color-gray-950),var(--color-gray-950))_content-box,conic-gradient(from_45deg,var(--color-violet-400),var(--color-fuchsia-400),var(--color-amber-300),var(--color-teal-300))_border-box]">
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                                <div className="h-0.5 w-4 -translate-y-1 bg-gray-100"></div>
                            </div>
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                                <div className="h-0.5 w-4 translate-y-1 bg-gray-100"></div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
