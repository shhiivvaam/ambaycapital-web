"use client";
import React from "react";
import { WavyBackground } from "@/components/ui/wavy-background";
import { AnimatedTyper } from "@/components/animated-typer";

export function SpotlightWavyBackground() {
    return (
        (
            <WavyBackground>
                <div className="flex flex-col items-center text-center align-middle justify-between h-full w-full text-white">
                    <div className="mb-20 pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-4xl md:text-6xl lg:text-8xl font-semibold leading-tight md:leading-snug lg:leading-none text-transparent dark:from-white dark:to-slate-900/10">
                        Let's Plan your Future
                    </div>
                    <div>
                        <AnimatedTyper />
                    </div>
                </div>
            </WavyBackground>
        )
    );
}
