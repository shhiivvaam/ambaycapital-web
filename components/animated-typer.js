"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
export function AnimatedTyper() {
    const words = [
        {
            text: `Help Us Help You `,
            className: "text-white dark:text-black",
        },
        // {
        //     text: `Help`,
        //     className: "text-white dark:text-black",
        // },
        // {
        //     text: "Us",
        //     className: "text-white dark:text-black",
        // },
        // {
        //     text: "Help",
        //     className: "text-white dark:text-black",
        // },
        // {
        //     text: "You",
        //     className: "text-white dark:text-black",
        // },
        {
            text: "..",
            className: "text-white dark:text-black",
        },
        {
            text: ". Connect Now!",
            className: "text-blue-500 dark:text-blue-500",
        },
    ];
    return (
            <TypewriterEffectSmooth words={words} />
    );
}
