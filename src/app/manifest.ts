import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Smile Art Lab",
        lang: "en",
        short_name: "Smile Art Lab",
        description:
            "Smile Art Lab - It is a test project developed by Achilles on Next js",
        start_url: "/",
        display: "standalone",
        background_color: "#fff",
        theme_color: "#fff",
        icons: [
            {
                src: "/next.svg",
                sizes: "any",
                type: "image/x-icon",
            },
        ],
    };
}
