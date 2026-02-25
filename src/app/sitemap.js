export default function sitemap() {
    const baseUrl = "https://proetsin.uz";

    return [
        {
            url: baseUrl,
            lastModified: new Date("2026-02-26"),
            changeFrequency: "monthly",
            priority: 1.0,
        },
    ];
}
