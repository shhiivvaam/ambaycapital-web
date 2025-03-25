"use client";
import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-backgound";
import { BackgroundLines } from "@/components/ui/background-lines";

export function ShootingStarsAndStarsBackgroundView() {
    return (
        <div>
            <BackgroundLines />
            <ShootingStars />
            <StarsBackground />
        </div>
    );
}
