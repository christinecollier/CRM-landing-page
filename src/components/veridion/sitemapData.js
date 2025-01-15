const siteMap = [
    {
        label: "Product",
        to: "/product",
        children: [
            {
                label: "Features",
                to: "features",
            },
        ],
    },
    {
        label: "Company",
        to: "/company",
        children: [
            {
                label: "Pricing",
                to: "pricing",
            },
            {
                label: "About",
                to: "about",
            },

        ],
    },
    {
        label: "Resources",
        to: "/resources",
        children: [
            {
                label: "Announcements",
                to: "announcements",
            },
            {
                label: "Press",
                to: "press",
            },
            {
                label: "Blog",
                to: "blog",
            },
            {
                label: "Docs",
                to: "docs",
            },
        ],
    },
    {
        label: "Docs",
        to: "/docs",
        children: [
            {
                label: "Privacy Policy",
                to: "privacy-policy"
            },
            {
                label: "Terms of Use",
                to: "terms-of-use"
            }
        ],
    },
];

export default siteMap;