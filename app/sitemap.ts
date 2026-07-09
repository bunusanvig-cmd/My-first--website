import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { services } from "@/data/services";
import { blogPosts } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "",
    "/about",
    "/services",
    "/portfolio",
    "/blog",
    "/contact",
    "/book-consultation",
    "/privacy-policy",
    "/terms-and-conditions",
  ];

  const servicePaths = services.map((service) => `/services/${service.slug}`);
  const blogPaths = blogPosts.map((post) => `/blog/${post.slug}`);

  return [...staticPaths, ...servicePaths, ...blogPaths].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
  }));
}

