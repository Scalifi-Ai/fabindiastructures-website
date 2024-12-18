import { AudioLines } from "lucide-react"
import { whatsNew } from "./products"
import { solutions } from "./solutions"

export const bannerData = {
    banner: [
        {
            img: "/fab-india-structures-large-tent.png",
            alt: "img alt text",
            title: "Large Tents",
            description: "Fab India provided the 19th Asian Games with various sports event tents for different purposes, we wish the Asian Games a successful opening."
        },
        {
            img: "/fab-india-structures.png",
            alt: "img alt text",
            title: "Party Arena",
            description: "Fab India provided the 19th Asian Games with various sports event tents for different purposes, we wish the Asian Games a successful opening."
        },
        {
            img: "/fab-india-structures-double-decker.png",
            alt: "img alt text",
            title: "Double Decker Tents",
            description: "Fab India provided the 19th Asian Games with various sports event tents for different purposes, we wish the Asian Games a successful opening."
        },
    ]
}

export const landingData = {
    requestQuote: "CUSTOM AN EYE-CATCHING ALUMINUM TENT FOR OUTDOOR EVENTS NOW",
    features: {
        title: "Features",
        data: [
            {
                icon: <AudioLines className="h-8 w-8 text-sky-700" />,
                title: "Title",
                description: "Lorem, ipsum dolor sit amet consectetur adipisicing elitDoloremque ex id hic.Cum laud"
            },
            {
                icon: <AudioLines className="h-8 w-8 text-sky-700" />,
                title: "Title",
                description: "Lorem, ipsum dolor sit amet consectetur adipisicing elitDoloremque ex id hic.Cum laud"
            },
            {
                icon: <AudioLines className="h-8 w-8 text-sky-700" />,
                title: "Title",
                description: "Lorem, ipsum dolor sit amet consectetur adipisicing elitDoloremque ex id hic.Cum laud"
            },
        ]
    },
    solutions: solutions,
    whatsNew: whatsNew,
    customers: {
        title: "Cutomers",
        subTitle: "Our Pride",
        data: [
            {
                img: "/logo.svg",
                alt: "customer",
                link: "/"
            },
            {
                img: "/logo.svg",
                alt: "customer",
                link: "/"
            },
            {
                img: "/logo.svg",
                alt: "customer",
                link: "/"
            },
            {
                img: "/logo.svg",
                alt: "customer",
                link: "/"
            },
        ]
    }
}