import React, { useEffect, useMemo, useState } from "react";
import styles from "@styles/scss/AssetsPage.module.scss";
import { classifyShape, formatBytes, getExtension, isImageExt, sanitizeTitle, normalizeType } from "@utils/assets";

type AssetInfo = {
  size: number | null;
  type: string | null;
  width: number | null;
  height: number | null;
  shape: "full" | "square" | "rect";
};

type Props = {
  title: string;
  link: string;
  openLabel: string;
  downloadLabel: string;
  width?: number;
  height?: number;
};

const AssetCard: React.FC<Props> = ({ title, link, openLabel, downloadLabel, width, height }) => {
  const [info, setInfo] = useState<AssetInfo>({ size: null, type: null, width: null, height: null, shape: "rect" });

  const ext = useMemo(() => getExtension(link), [link]);
  const isImage = useMemo(() => isImageExt(ext), [ext]);

  useEffect(() => {
    if (!isImage) return;
    // If explicit dimensions are provided via props, use them directly
    if (typeof width === "number" && typeof height === "number") {
      setInfo(prev => ({
        ...prev,
        width,
        height,
        shape: classifyShape(width, height),
      }));
      return;
    }
    const img = new Image();
    img.onload = () => {
      setInfo(prev => ({
        ...prev,
        width: (img as any).naturalWidth || img.width,
        height: (img as any).naturalHeight || img.height,
        shape: classifyShape((img as any).naturalWidth || img.width, (img as any).naturalHeight || img.height),
      }));
    };
    img.src = link;
  }, [link, isImage, width, height]);

  useEffect(() => {
    let cancelled = false;
    const loadMeta = async () => {
      try {
        const isRelative = link.startsWith("/");
        let contentLength: number | null = null;
        let contentType: string | null = null;

        if (isRelative && typeof window !== "undefined") {
          const origin = window.location.origin;
          const target = new URL(link, origin).toString();
          try {
            const head = await fetch(target, { method: "HEAD" });
            contentLength = Number(head.headers.get("content-length")) || null;
            contentType = head.headers.get("content-type");
          } catch {
            // ignore
          }
        }

        if (cancelled) return;

        const typeFromHeader = contentType || null;
        const headerMain = typeFromHeader ? typeFromHeader.split(";")[0].split("/").pop() || null : null;
        const prettyType = normalizeType(headerMain, ext);

        setInfo(prev => ({
          ...prev,
          size: typeof contentLength === "number" && !Number.isNaN(contentLength) ? contentLength : null,
          type: prettyType,
          shape: prev.shape,
        }));
      } catch {
        // ignore
      }
    };
    loadMeta();
    return () => {
      cancelled = true;
    };
  }, [link, ext]);

  const cardClass = useMemo(() => {
    const span = info.shape === "full" ? styles.span6 : info.shape === "square" ? styles.span2 : styles.span3;
    const shapeClass =
      info.shape === "full" ? styles.shapeFull : info.shape === "square" ? styles.shapeSquare : styles.shapeRect;
    return `${styles.card} ${span} ${shapeClass}`;
  }, [info.shape]);

  const typeLabel = info.type || normalizeType(null, ext) || "";
  const displayTitle = useMemo(() => sanitizeTitle(title, typeLabel), [title, typeLabel]);
  const sizeLabel = formatBytes(info.size);

  return (
    <div className={cardClass}>
      <div className={styles.cardInner}>
        <div className={styles.cardHeader}>
          <div className={styles.title}>{displayTitle}</div>
          <div className={styles.meta}>
            {typeLabel ? <span className={styles.badge}>{typeLabel}</span> : null}
            {info.size && info.size > 0 ? (
              <span className={styles.size}>{sizeLabel}</span>
            ) : null}
          </div>
        </div>
        <div className={styles.previewBox}>
          {isImage ? (
            <a href={link} target="_blank" rel="noopener noreferrer" className={`no-external-icon ${styles.previewLink}`}>
              {typeof width === "number" && typeof height === "number" ? (
                <img
                  src={link}
                  alt={title}
                  style={{ width: "auto", height: "auto", maxWidth: "100%", maxHeight: "100%", display: "block" }}
                />
              ) : (
                <img src={link} alt={title} className={styles.preview} />
              )}
            </a>
          ) : (
            <div className={styles.previewPlaceholder}>{typeLabel || "FILE"}</div>
          )}
        </div>
        <div className={styles.actions}>
          <a href={link} download target="_blank" rel="noopener noreferrer" className={`${styles.downloadBtn}`}>
            {downloadLabel}
          </a>
        </div>
      </div>
    </div>
  );
};

export default AssetCard;
