const FALLBACK_SITE_URL = "https://flokicoin.org";

const normaliseUrl = (url: string) => url.replace(/\/$/, "");

export const SITE_URL = normaliseUrl(
  (process.env.NEXT_PUBLIC_SITE_URL || FALLBACK_SITE_URL).trim(),
);

export const SITE_NAME = "Flokicoin";
export const DEFAULT_TITLE =
  "Flokicoin (FLC) – Layer-1 chain powered by the Scrypt Family";
export const DEFAULT_DESCRIPTION =
  "Flokicoin is a fast and secure cryptocurrency that combines fun and community-driven decentralization for the next generation of digital assets.";
export const DEFAULT_KEYWORDS =
  "Flokicoin, blockchain, cryptocurrency, digital currency, decentralized finance, secure transactions, blockchain technology, crypto, financial freedom";
export const DEFAULT_IMAGE_PATH = "/og-image.png";
export const DEFAULT_IMAGE_ALT = "The hero graphic";
export const DEFAULT_IMAGE_WIDTH = 1200;
export const DEFAULT_IMAGE_HEIGHT = 626;
export const DEFAULT_IMAGE_TYPE = "image/png";
export const DEFAULT_AUTHOR = "Flokicoin Community";
export const TWITTER_HANDLE = "@flokicoin_dao";

export type SeoMetadata = {
  title?: string;
  description?: string;
  canonicalPath?: string;
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  imageType?: string;
  ogType?: "website" | "article" | "profile" | string;
  noIndex?: boolean;
  keywords?: string;
};

export const ROUTE_SEO: Record<string, SeoMetadata> = {
  "/": {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    canonicalPath: "/",
  },
  "/donate": {
    title: "Support Flokicoin",
    description:
      "Help Flokicoin deliver the Web of Fun by funding open-source experiments, FEPs, and community-led initiatives.",
    canonicalPath: "/donate",
  },
  "/privacy": {
    title: "Privacy Policy | Flokicoin",
    description:
      "Understand how Flokicoin collects, uses, and protects information across our products and community touchpoints.",
    ogType: "article",
    canonicalPath: "/privacy",
    keywords: "Flokicoin privacy policy, data protection, cookies",
  },
  "/terms": {
    title: "Terms & Conditions | Flokicoin",
    description:
      "Review the terms and conditions that govern access to Flokicoin services, tools, and community platforms.",
    ogType: "article",
    canonicalPath: "/terms",
    keywords: "Flokicoin terms, conditions, legal",
  },
};

export const resolveUrl = (path?: string) => {
  if (!path) return SITE_URL;
  if (/^https?:\/\//i.test(path)) return path;
  return `${SITE_URL}${path.startsWith("/") ? "" : "/"}${path}`;
};

export const canonicalisePath = (path?: string) => {
  if (!path) return "/";
  const [cleanPath] = path.split("#");
  return cleanPath || "/";
};

export const buildCanonicalUrl = (path?: string) =>
  resolveUrl(canonicalisePath(path));
