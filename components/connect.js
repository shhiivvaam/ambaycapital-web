import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
// import { FeedbackCards } from "@/components/feedback-cards";

export function Connect() {

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
        (<LampContainer>
            <motion.h1
                initial={{ opacity: 0.5, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
                Got Something to Ask?<br /> Please Write
            </motion.h1>
            <div className="translate-y-40 flex justify-center items-center w-full">
                <PlaceholdersAndVanishInput placeholders={placeholders} onChange={handleChange} onSubmit={onSubmit} />
                {/* <FeedbackCards /> */}
            </div>
        </LampContainer>)
    );
}