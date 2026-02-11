import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.digitaldevtools.com",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: "https://www.digitaldevtools.com/tools/code-to-image",
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: "https://www.digitaldevtools.com/privacy-policy",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://www.digitaldevtools.com/terms-of-use",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://www.digitaldevtools.com/contact",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://www.digitaldevtools.com/about",
      lastModified: new Date(),
      priority: 0.8,
    },
  ];
}
