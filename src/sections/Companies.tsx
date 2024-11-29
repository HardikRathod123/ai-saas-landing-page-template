import { SectionContent } from "@/components/SectionContent";
import AcmeCorpLogo from "../assets/images/acme-corp-logo.svg";
import CelestialLogo from "../assets/images/celestial-logo.svg";
import EchoValleyLogo from "../assets/images/echo-valley-logo.svg";
import OutsideLogo from "../assets/images/outside-logo.svg";
import PulseLogo from "../assets/images/pulse-logo.svg";
import QuantumLogo from "../assets/images/quantum-logo.svg";

export const companies = [
    {
        name: "Acme Corp",
        logo: AcmeCorpLogo,
    },
    {
        name: "Echo Valley",
        logo: EchoValleyLogo,
    },
    {
        name: "Quantum",
        logo: QuantumLogo,
    },
    {
        name: "Pulse",
        logo: PulseLogo,
    },
    {
        name: "Outside",
        logo: OutsideLogo,
    },
    {
        name: "Celestial",
        logo: CelestialLogo,
    },
];

export const Companies = () => {
    return (
        <section>
            <SectionContent className="!pt-0">
                <h2 className="text-center text-xs font-bold uppercase tracking-widest text-gray-500">
                    Empowering creators at leading companies
                </h2>
                <div className="-mx-4 mt-20 flex overflow-x-clip lg:-mx-8">
                    <div className="flex flex-none gap-18 px-18 md:gap-36">
                        {companies.map(({ logo: Logo, name }) => (
                            <div key={name}>
                                <Logo className="h-8" />
                            </div>
                        ))}
                    </div>
                </div>
            </SectionContent>
        </section>
    );
};

export default Companies;
