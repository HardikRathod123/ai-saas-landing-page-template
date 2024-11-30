import { SectionBorder } from "@/components/SectionBorder";
import Header from "@/sections/Header";
import type { Metadata } from "next";
import { Sora, Space_Grotesk } from "next/font/google";
import "./globals.css";

const soraFont = Sora({
    subsets: ["latin"],
    variable: "--font-sora",
    weight: "variable",
});
const spaceGroteskFont = Space_Grotesk({
    subsets: ["latin"],
    variable: "--font-space-grotesk",
    weight: "variable",
});

export const metadata: Metadata = {
    title: "AI SaaS Landing Page",
    description: "Created by Frontend Tribe",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${soraFont.variable} ${spaceGroteskFont.variable} bg-gray-950 pb-[10000px] font-body text-gray-300 antialiased`}
            >
                <Header />
                <div className="container border-y border-border">
                    <SectionBorder>{children}</SectionBorder>
                </div>
            </body>
        </html>
    );
}
