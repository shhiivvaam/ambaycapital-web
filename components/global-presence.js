import IconCloud from "@/components/ui/icon-cloud";
import Globe from "@/components/ui/globe";

const companies = [
    "https://img.etimg.com/thumb/msid-112717998,width-300,height-225,imgsize-15502,resizemode-75/icici-lombard-general-insurance-company.jpg",
    "https://www.tataaig.com/logo-min.png",
    "https://play-lh.googleusercontent.com/uNUyxdP6q7VkVRnK4zWT-1OW-YsFB156q5TT7yb-yLDnW9mgNFgup2s-BhMZu34U8Q=w480-h960-rw",
    "https://www.hdfcergo.com/images/default-source/car/logo_hdfc.png",
    "https://www.motilaloswal.com/campaign/registrationoffers/Page242/sem-new/img/logo.png",
    "https://i0.wp.com/pune.news/wp-content/uploads/2024/10/Star-Health.webp?resize=800%2C422&ssl=1",
    "https://upload.wikimedia.org/wikipedia/en/4/4f/Life_Insurance_Corporation_of_India_%28logo%29.svg",
];

export function GlobalPresenceView() {
    return (
        <div className="bg-slate-950">
            <span className="pl-5 pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-4xl md:text-6xl lg:text-8xl font-semibold leading-tight md:leading-snug lg:leading-none text-transparent dark:from-white dark:to-slate-900/10">
                Present Across the Globe <br /> with Top Companies
            </span>
            <div className="flex justify-evenly">
                <div className="relative size-full max-w-lg h-full bg-background">
                    <IconCloud imageArray={companies} />
                </div>
                <div className="relative size-full max-w-lg h-full bg-background md:shadow-xl">
                    <Globe />
                    <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
                </div>
            </div>
        </div>
    )
}