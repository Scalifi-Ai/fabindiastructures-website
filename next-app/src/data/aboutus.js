import { AudioLines } from "lucide-react";

export const aboutUs = {
    title: "Fab India Structures",
    description: "Innovation with sturdy construction",
    profile: {
        title: "Company Profile",
        description: ["Fab India was founded in 1980. It is a specialized and innovative enterprise dedicated to the research and development, production, sales, and rental of modular and mobile aluminum alloy structures",
            "The company’s main products include modular aluminum alloy tent structures, large air domes, and glamping tents."
        ]
    },
    strength: {
        title: "Company's Strength",
        description: ["Over 3000 employees. The total area of factory is 200,000 square meters.",
            "One of the prominent leaders in India."
        ]
    },
    gallery: {
        title: "The Factory",
        img: [
            {
                path: "/events.jpg",
                alt: "alt text"
            },
            {
                path: "/events.jpg",
                alt: "alt text"
            },
            {
                path: "/events.jpg",
                alt: "alt text"
            }
        ],
        video: []
    },
    whyChoose: {
        title: "Why Choose Us",
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
    }
}