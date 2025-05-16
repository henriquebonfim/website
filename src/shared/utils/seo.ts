/**
 * Utility functions for managing SEO metadata
 */

/**
 * Interface for SEO metadata
 */
export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogType?: "website" | "article" | "profile";
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: "summary" | "summary_large_image";
}

/**
 * Default SEO metadata for the site
 */
export const DEFAULT_SEO: SEOMetadata = {
  title: "Henrique Bonfim - Software Engineer & Architect",
  description:
    "Personal website of Henrique Bonfim, Senior Software Engineer and Architect",
  keywords: [
    "software engineer",
    "web developer",
    "typescript",
    "react",
    "node.js",
    "cloud architect",
  ],
  ogType: "website",
  ogImage: "/logo.webp",
  twitterCard: "summary",
};

/**
 * Sets the page title
 * @param title The page title
 */
export function setPageTitle(title: string): void {
  document.title = title;
}

/**
 * Updates the page metadata for SEO
 * @param metadata The SEO metadata to set
 */
export function updateMetaTags(metadata: Partial<SEOMetadata>): void {
  const mergedMetadata = { ...DEFAULT_SEO, ...metadata };

  // Set page title
  setPageTitle(mergedMetadata.title);

  // Helper function to set or create meta tag
  const setMetaTag = (name: string, content: string): void => {
    let meta = document.querySelector(
      `meta[name="${name}"]`,
    ) as HTMLMetaElement;

    if (!meta) {
      meta = document.createElement("meta");
      meta.name = name;
      document.head.appendChild(meta);
    }

    meta.content = content;
  };

  // Helper function to set or create property meta tag (Open Graph)
  const setPropertyMetaTag = (property: string, content: string): void => {
    let meta = document.querySelector(
      `meta[property="${property}"]`,
    ) as HTMLMetaElement;

    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("property", property);
      document.head.appendChild(meta);
    }

    meta.content = content;
  };

  // Basic meta tags
  setMetaTag("description", mergedMetadata.description);

  if (mergedMetadata.keywords && mergedMetadata.keywords.length > 0) {
    setMetaTag("keywords", mergedMetadata.keywords.join(", "));
  }

  // Open Graph meta tags
  setPropertyMetaTag("og:title", mergedMetadata.title);
  setPropertyMetaTag("og:description", mergedMetadata.description);

  if (mergedMetadata.ogType) {
    setPropertyMetaTag("og:type", mergedMetadata.ogType);
  }

  if (mergedMetadata.ogImage) {
    setPropertyMetaTag("og:image", mergedMetadata.ogImage);
  }

  if (mergedMetadata.ogUrl) {
    setPropertyMetaTag("og:url", mergedMetadata.ogUrl);
  }

  // Twitter Card meta tags
  if (mergedMetadata.twitterCard) {
    setMetaTag("twitter:card", mergedMetadata.twitterCard);
    setMetaTag("twitter:title", mergedMetadata.title);
    setMetaTag("twitter:description", mergedMetadata.description);

    if (mergedMetadata.ogImage) {
      setMetaTag("twitter:image", mergedMetadata.ogImage);
    }
  }
}
