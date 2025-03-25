"use client";

import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";

export function UserFeeback() {
    const placeholders = [
        "Got something to ask?",
        "Anything you want to know?",
        "Any Queries?",
        "What do you want to know?",
        "Anything you want to ask?",
        "Any questions?",
    ];

    const handleChange = (e) => {
        console.log(e.target.value);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        console.log("submitted");
    };
    return (
        (<div className="h-[40rem] flex flex-col justify-center  items-center px-4">
            <h2
                className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-black">
                Ask AmbayCapital Anything
            </h2>
            <PlaceholdersAndVanishInput placeholders={placeholders} onChange={handleChange} onSubmit={onSubmit} />
        </div>)
    );
}
