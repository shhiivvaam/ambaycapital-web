"use client";
import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
export function FloatingNavBar() {
    const navItems = [
        {
            name: "Products",
            link: "/products",
            icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "Visit",
            link: "https://i-magic.in/",
            icon: (
                <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
            ),
        },
    ];
    return (
        (<div className="relative w-full">
            <FloatingNav navItems={navItems} />
        </div>)
    );
}
