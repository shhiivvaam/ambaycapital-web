import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
    IconBrandInstagramFilled,
    IconBrandWhatsappFilled,
    IconBrandX,
    IconChalkboard,
    IconHome,
    IconSearch,
} from "@tabler/icons-react";

export function FloatingNavDock() {
    const links = [
        {
            title: "Home",
            icon: (
                <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "Products",
            icon: (
                <IconChalkboard className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "/products",
        },
        {
            title: "Visit Site",
            icon: (
                <IconSearch className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://i-magic.in/",
        },
        {
            title: "Whatsapp",
            icon: (
                <IconBrandWhatsappFilled className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`,
        },
        {
            title: "Instagram",
            icon: (
                <IconBrandInstagramFilled className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://www.instagram.com/_rajesh_1208/",
        },
        {
            title: "Twitter",
            icon: (
                <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://x.com/ambayrajesh",
        },
    ];
    return (
        (<div className="absolute flex items-center justify-center w-full z-[20]">
            <FloatingDock
                desktopClassName={`fixed bottom-4`}
                mobileClassName="fixed absolute bottom-4 right-4"
                items={links} 
            />
        </div>)
    );
}
