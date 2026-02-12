import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://digitaldevtools.com",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: "https://digitaldevtools.com/tools/code-to-image",
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: "https://digitaldevtools.com/tools/image-compressor",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://digitaldevtools.com/privacy-policy",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://digitaldevtools.com/terms-of-use",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://digitaldevtools.com/contact",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://digitaldevtools.com/about",
      lastModified: new Date(),
      priority: 0.8,
    },
  ];
}
