import Image from "next/legacy/image";
import { Geist, Geist_Mono } from "next/font/google";
import { formatDate } from "@/utils/formatDate";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import { FloatingNavBar } from "@/components/floating-nav";
import { FloatingNavDock } from "@/components/floating-dock";
import { SpotlightView } from "@/components/spotlight-view";
import { SpotlightWavyBackground } from "@/components/spotlight-wavy-background";
// import { SpotlightBeamsWithCollisionView } from "@/components/spotlight-beam-collision-view";
import { AvisorPlannerView } from "@/components/advisor-planner";
import ScrollProgress from "@/components/ui/scroll-progress";
import PulsatingButton from "@/components/ui/pulsating-button";
import { GlobalPresenceView } from "@/components/global-presence";
import { Connect } from "@/components/connect";
import { FeedbackCards } from "@/components/feedback-cards";
// import { UserFeeback } from "@/components/user-feedback";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export default function Home() {
    return (
        <div>
            <div className="min-h-screen min-w-screen bg-black overflow-x-hidden">
                <FollowerPointerCard
                    title={
                        <TitleComponent
                            title={user.author}
                            avatar={user.authorAvatar}
                        />
                    }
                >
                    <PulsatingButton
                        className={`z-[100] fixed top-[90%] left-5`}
                        onClick={() => { window.location.href = "/products" }}
                    >
                        Check Latest Plans
                    </PulsatingButton>
                    <ScrollProgress />
                    <SpotlightView />
                    {/* <SpotlightBeamsWithCollisionView /> */}
                    <AvisorPlannerView />
                    <Connect />
                    {/* <UserFeeback /> */}
                    <GlobalPresenceView />
                    <FeedbackCards />
                    <SpotlightWavyBackground />
                    <FloatingNavBar />
                </FollowerPointerCard>
                <FloatingNavDock />
            </div>
        </div>
    );
}

const user = {
    author: "Rajesh Kumar",
    date: formatDate(new Date()),
    title: "Ambay Capital",
    description: "Your Insurance Advisor and Financial Planner",
    image: "/rajesh/main.png",
    authorAvatar: "/rajesh/main.png",
    slug: "insurance_investment_savings",
};

const TitleComponent = ({ title, avatar }) => (
    <div className="flex space-x-2 items-center">
        <Image
            src={avatar}
            height="20"
            width="20"
            alt="thumbnail"
            className="rounded-full border-2 border-white"
        />
        <p className={`${geistSans.variable} ${geistMono.variable} font-[family-name:var(--font-geist-sans)] font-bold`}>{title}</p>
        {/* <p className={`${geistSans.variable} ${geistMono.variable} font-[family-name:var(--font-geist-mono)] font-bold`}>{title}</p> */}
    </div>
);