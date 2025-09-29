import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import {
  DEFAULT_AUTHOR,
  DEFAULT_DESCRIPTION,
  DEFAULT_IMAGE_PATH,
  DEFAULT_IMAGE_ALT,
  DEFAULT_IMAGE_WIDTH,
  DEFAULT_IMAGE_HEIGHT,
  DEFAULT_IMAGE_TYPE,
  DEFAULT_KEYWORDS,
  DEFAULT_TITLE,
  SITE_NAME,
  TWITTER_HANDLE,
  buildCanonicalUrl,
  canonicalisePath,
  resolveUrl,
  SeoMetadata,
} from "@constants/seo";

type Props = SeoMetadata;

const SeoHead: React.FC<Props> = ({
  title,
  description,
  canonicalPath,
  image,
  imageAlt,
  imageWidth,
  imageHeight,
  imageType,
  ogType = "website",
  noIndex,
  keywords,
}) => {
  const router = useRouter();
  const effectivePath = canonicalisePath(
    canonicalPath || router.asPath || "/",
  );
  const canonicalUrl = buildCanonicalUrl(effectivePath);
  const pageTitle = title || DEFAULT_TITLE;
  const pageDescription = description || DEFAULT_DESCRIPTION;
  const pageImage = resolveUrl(image || DEFAULT_IMAGE_PATH);
  const pageImageAlt = imageAlt || DEFAULT_IMAGE_ALT;
  const pageImageWidth = imageWidth ?? DEFAULT_IMAGE_WIDTH;
  const pageImageHeight = imageHeight ?? DEFAULT_IMAGE_HEIGHT;
  const pageImageType = imageType || DEFAULT_IMAGE_TYPE;
  const metaKeywords = keywords || DEFAULT_KEYWORDS;
  const robotsValue = noIndex ? "noindex, nofollow" : "index, follow";

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="author" content={DEFAULT_AUTHOR} />
      <meta name="robots" content={robotsValue} />
      <meta name="googlebot" content={robotsValue} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:image:secure_url" content={pageImage} />
      <meta property="og:image:alt" content={pageImageAlt} />
      {pageImageWidth ? (
        <meta property="og:image:width" content={String(pageImageWidth)} />
      ) : null}
      {pageImageHeight ? (
        <meta property="og:image:height" content={String(pageImageHeight)} />
      ) : null}
      <meta property="og:image:type" content={pageImageType} />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={TWITTER_HANDLE} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageImage} />
      <meta name="twitter:image:alt" content={pageImageAlt} />
    </Head>
  );
};

export default SeoHead;
