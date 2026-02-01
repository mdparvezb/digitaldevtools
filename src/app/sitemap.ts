import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://smartdevtool.com",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: "https://smartdevtool.com/tools",
      lastModified: new Date(),
      priority: 0.8,
    },
  ];
}
