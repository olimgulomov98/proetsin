export default function robots() {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/_next/static/", "/_next/image/"],
            },
        ],
        sitemap: "https://proetsin.uz/sitemap.xml",
    };
}
