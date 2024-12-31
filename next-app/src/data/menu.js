import { productsPath, solutionsPath } from "./path";

export const menuList = {
    products: [
        {
            title: "All Products",
            href: productsPath.basePath,
            description: "Take a look at all our products.",
        },
        {
            title: "Pagoda Tents",
            href: `${productsPath.basePath}${productsPath.pagoda}`,
            description:
                "Pagoda Tent features structures with widths of 2x2m, 2.5×2.5m, and 3x3m, the eave height is 2.6m.",
        },
        {
            title: "Military Tents",
            href: `${productsPath.basePath}${productsPath.military}`,
            description: "Military tents with high-strength aluminium alloy tubes",
        },
        {
            title: "Sports Arena",
            href: `${productsPath.basePath}${productsPath.sports}`,
            description:
                "Sports event tents with special widths, lengths, and different roof heights.",
        },
        {
            title: "Double Decker Tents",
            href: `${productsPath.basePath}${productsPath.doubleDecker}`,
            description:
                "Double decker design to make area utilization ratio more than 200%.",
        },
        {
            title: "Warehouses",
            href: `${productsPath.basePath}${productsPath.warehouse}`,
            description: "Large warehouse movable structure to occupy all your goods.",
        },
        {
            title: "Shelter",
            href: `${productsPath.basePath}${productsPath.shelter}`,
            description: "Shelter tents with flexible dimensions.",
        },
    ],
    solutions: {
        allSolutions: {
            title: "All Solutions",
            link: solutionsPath.basePath,
            description: "High-quality, product safety, efficiency, flexible and diversified services"
        },
        list: [
            {
                title: "Events Space",
                link: `${solutionsPath.basePath}${solutionsPath.events}`,
                description: "Wide range of structures perfectly suited for events"
            },
            {
                title: "Commercial Space",
                link: `${solutionsPath.basePath}${solutionsPath.commercial}`,
                description: "Wide range of structures perfectly suited for events"
            },
            {
                title: "Quick Deployment Space",
                link: `${solutionsPath.basePath}${solutionsPath.quickDeploy}`,
                description: "Wide range of structures perfectly suited for events"
            },
        ]
    }
}