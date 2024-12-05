import { useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export const useMousePosition = () => {
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