import { Facebook, Instagram, Linkedin } from "lucide-react";
import { productsPath, solutionsPath } from "./path";

export const footerData = {
    solutions: {
        title: "Our Solutions",
        data: [
            {
                name: "Event Space",
                link: `${solutionsPath.basePath}${solutionsPath.events}`,
            },
            {
                name: "Commercial Space",
                link: `${solutionsPath.basePath}${solutionsPath.commercial}`,
            },
            {
                name: "Easy and quick deployment space",
                link: `${solutionsPath.basePath}${solutionsPath.quickDeploy}`,
            },

        ]
    },
    products: {
        title: "Products",
        data: [
            {
                name: "Pagoda Tents",
                link: `${productsPath.basePath}${productsPath.pagoda}`,
            },
            {
                name: "Military Tents",
                link: `${productsPath.basePath}${productsPath.military}`,
            },
            {
                name: "Sports Arena",
                link: `${productsPath.basePath}${productsPath.sports}`,
            },
            {
                name: "Double Decker Tents",
                link: `${productsPath.basePath}${productsPath.doubleDecker}`,
            }

        ]
    },
    contact: {
        title: "Contact Details",
        address: "Plot No-9 Sec-8 Growth Center Imt, Bawal, Rewari, Bawal, Haryana, India, 123501",
        phoneOne: "9811079859",
        phoneTwo: "9999600340",
        email: "aryan@pjfabindia.com"
    },
    socialMedia: [
        {
            link: "/",
            icon: <Linkedin />
        },
        {
            link: "/",
            icon: <Facebook />
        },
        {
            link: "/",
            icon: <Instagram />
        },
    ]
}