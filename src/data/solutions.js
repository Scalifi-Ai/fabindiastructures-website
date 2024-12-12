import { solutionsPath } from "./path"

export const solutions = {
    title: "Our Solutions",
    subTitle: "A broad range of modular structures to meet your every need",
    metadata: {
        title: "Fab India Structures | Solutions",
        description: "Innovation with sturdy construction",
    },
    data: [
        {
            img: "/events.jpg",
            alt: "alt text",
            alt: "img alt text",
            title: "Event space",
            description: "Fab India provided the 19th Asian Games with various sports event tents for different purposes, we wish the Asian Games a successful opening.",
            buttonLabel: "Our event solution",
            link: `${solutionsPath.basePath}${solutionsPath.events}`,
            mobile: "1234567890"
        },
        {
            img: "/commercial.jpg",
            alt: "alt text",
            alt: "img alt text",
            title: "Commercial Space",
            description: "Fab India provided the 19th Asian Games with various sports event tents for different purposes, we wish the Asian Games a successful opening.",
            buttonLabel: "Our commercial solution",
            link: `${solutionsPath.basePath}${solutionsPath.commercial}`,
            mobile: "1234567890"
        },
        {
            img: "/quick-and-easy-deployment.jpg",
            alt: "alt text",
            alt: "img alt text",
            title: "Easy and quick deployment space",
            description: "Fab India provided the 19th Asian Games with various sports event tents for different purposes, we wish the Asian Games a successful opening.",
            buttonLabel: "Our quick deployment solution",
            link: `${solutionsPath.basePath}${solutionsPath.quickDeploy}`,
            mobile: "1234567890"
        },
    ]
}

export const allSolutions = {
    __parentKey: "Slug of the page",
    "event-tents": {
        title: "Event Tents",
        metadata: {
            title: "Fab India Structures | Event Tents",
            description: "Innovation with sturdy construction",
        },
        features: [
            {
                title: "Flexible and convenient",
                description: "Installation and disassembly are convenient and quick. With the quick-installed tent, you can enjoy indoor comfort while viewing the beautiful outdoor scenery. Compared with the traditional canvas tent, the clear span wedding tent does not require load-bearing columns. This advantage ensures abundant internal space without the obstruction of sight and movement and employs the area more flexibly."
            },
            {
                title: "Safe and stable",
                description: "PVC knife scraping fiber fabric not only has a good performance in waterproof but also in anti-UV and flame-retardant; The 6 series T6 industrial aluminum profile frame is beautiful in appearance and also lighter and harder. The beauty of the tent is ensured as well as the safety of the structure."
            },
            {
                title: "Customized needs",
                description: "Installation and disassembly are convenient and quick. With the quick-installed tent, you can enjoy indoor comfort while viewing the beautiful outdoor scenery. Compared with the traditional canvas tent, the clear span wedding tent does not require load-bearing columns. This advantage ensures abundant internal space without the obstruction of sight and movement and employs the area more flexibly."
            },
        ],
        details: {
            title: "Popular events tent styles",
            tabs: [
                {
                    label: "Wedding tents",
                    value: "wedding",
                    content: {
                        img: "/wedding.jpg",
                        alt: "alt text",
                        description: [
                            "The clear span of the New Party Tent is generally 3m-12m, the side height is 2.6m, aluminum alloy frame structure, hot-dip galvanized steel pipe, the cover can not only be made into high peak but also can be in the arc, which with a full sense of shape. The fixing method for roof covers is different from the traditional design, but it is fixed by a tensioning bar. PVC sidewalls are hung directly into the eave beam, so the sealing and wind resistance are better. This series is the most popular one for outdoor weddings.",
                            "In the choice of materials, New Party Tent also can meet the needs of customers to the greatest extent. PVC fabric 850g/sqm block-out, clear and beautiful transparent PVC, especially at night, the entire tent is like a luminous castle under the atmosphere of light, it’s very attractive. If you worry about the stuffiness of the tent, you can also use air-conditioning to heat it in winter and cool it in summer. You don’t have to worry about the impact of the weather on the wedding. If the wedding location is on the lawn, we suggest you use flooring with any patterns to avoid the headache of soil and weeds."
                        ],
                        table: [
                            {
                                id: Math.random(),
                                span_width: "4m",
                                eave_heigth: "2.5m",
                                ridge_height: "3.5m",
                                main_profile: "100x48x3.0mm (4 - channel)"
                            },
                            {
                                id: Math.random(),
                                span_width: "8m",
                                eave_heigth: "2.5m",
                                ridge_height: "4.5m",
                                main_profile: "100x48x3.0mm (4 - channel)"
                            },
                        ]
                    }
                },
                {
                    label: "Pagoda tents",
                    value: "pagoda",
                    content: {
                        img: "/pagoda-tent.jpg",
                        alt: "alt text",
                        description: [
                            "The clear span of the New Party Tent is generally 3m-12m, the side height is 2.6m, aluminum alloy frame structure, hot-dip galvanized steel pipe, the cover can not only be made into high peak but also can be in the arc, which with a full sense of shape. The fixing method for roof covers is different from the traditional design, but it is fixed by a tensioning bar. PVC sidewalls are hung directly into the eave beam, so the sealing and wind resistance are better. This series is the most popular one for outdoor weddings.",
                            "In the choice of materials, New Party Tent also can meet the needs of customers to the greatest extent. PVC fabric 850g/sqm block-out, clear and beautiful transparent PVC, especially at night, the entire tent is like a luminous castle under the atmosphere of light, it’s very attractive. If you worry about the stuffiness of the tent, you can also use air-conditioning to heat it in winter and cool it in summer. You don’t have to worry about the impact of the weather on the wedding. If the wedding location is on the lawn, we suggest you use flooring with any patterns to avoid the headache of soil and weeds."
                        ],
                        table: [
                            {
                                id: Math.random(),
                                span_width: "4m",
                                eave_heigth: "2.5m",
                                ridge_height: "3.5m",
                                main_profile: "100x48x3.0mm (4 - channel)"
                            },
                            {
                                id: Math.random(),
                                span_width: "18m",
                                eave_heigth: "2.5m",
                                ridge_height: "4.5m",
                                main_profile: "100x48x3.0mm (4 - channel)"
                            },
                        ]
                    }
                }
            ],
        },
        prices: {
            title: "Tent Pricing",
            data: [
                {
                    id: Math.random(),
                    type: "NPT series",
                    size: "	6m x 15m",
                    area: "90sqm",
                    "unit_price/sqm": "$40"
                },
                {
                    id: Math.random(),
                    type: "BT series",
                    size: "	20m x 50m",
                    area: "1000sqm",
                    "unit_price/sqm": "$50"
                },
            ]
        },
        products: [
            {
                img: "/large-tents.jpg",
                alt: "img alt text",
                title: "Large tents",
                description: "Fab India provided the 19th Asian Games with various sports event tents for different purposes, we wish the Asian Games a successful opening.",
                buttonLabel: "Our solution",
                link: "/products/large-tents",
                mobile: "1234567890"
            },
            {
                img: "/military-tents.jpg",
                alt: "img alt text",
                title: "Military tents",
                description: "Fab India provided the 19th Asian Games with various sports event tents for different purposes, we wish the Asian Games a successful opening.",
                buttonLabel: "Our solution",
                link: "/products/military-tents",
                mobile: "1234567890"
            },
            {
                img: "/sports-event.jpg",
                alt: "img alt text",
                title: "Sport events tent",
                description: "Fab India provided the 19th Asian Games with various sports event tents for different purposes, we wish the Asian Games a successful opening.",
                buttonLabel: "Our solution",
                link: "/products/sport-events",
                mobile: "1234567890"
            },
        ]
    }
}