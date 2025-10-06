export const formatBytes = (bytes: number | null): string => {
  if (!bytes || bytes <= 0) return "—";
  const units = ["B", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / Math.pow(1024, i)).toFixed(i === 0 ? 0 : 1)} ${units[i]}`;
};

export const getExtension = (url: string): string | null => {
  try {
    const u = new URL(url, typeof window !== "undefined" ? window.location.origin : "http://localhost");
    const pathname = u.pathname.toLowerCase();
    const match = pathname.match(/\.([a-z0-9]+)$/);
    return match ? match[1] : null;
  } catch {
    const match = url.toLowerCase().match(/\.([a-z0-9]+)(?:\?|#|$)/);
    return match ? match[1] : null;
  }
};

export const isImageExt = (ext: string | null) => {
  if (!ext) return false;
  return ["png", "jpg", "jpeg", "gif", "webp", "svg", "bmp", "avif"].includes(ext);
};

export const classifyShape = (w: number | null, h: number | null): "full" | "square" | "rect" => {
  if (!w || !h || w <= 0 || h <= 0) return "rect";
  const r = w / h;
  if (r >= 2) return "full";
  if (r > 0.9 && r < 1.1) return "square";
  return "rect";
};

export const normalizeType = (raw: string | null, ext: string | null): string | null => {
  const upperExt = ext ? ext.toUpperCase() : null;
  if (!raw && upperExt) {
    if (upperExt === "JPEG") return "JPG";
    if (upperExt === "JPG") return "JPG";
    if (upperExt === "SVG") return "SVG";
    if (upperExt === "ICO") return "ICO";
    return upperExt;
  }
  if (!raw) return upperExt;
  let t = raw.toUpperCase();
  // Strip MIME suffixes like +XML
  t = t.replace(/\+.*$/, "");
  // Common aliases
  if (t === "SVG") return "SVG";
  if (t === "SVGXML" || t === "SVG+XML") return "SVG";
  if (t === "X-ICON" || t === "XICON") return "ICO";
  if (t === "JPEG") return "JPG";
  return t;
};

export const sanitizeTitle = (title: string, extUpper?: string | null): string => {
  let clean = title;
  if (extUpper && extUpper.length) {
    const e = extUpper.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    clean = clean.replace(new RegExp(`\\s*\\(\\s*${e}\\s*\\)\\s*$`, "i"), "");
    clean = clean.replace(new RegExp(`\\s*-\\s*${e}\\s*$`, "i"), "");
    clean = clean.replace(new RegExp(`\\s*\\[\\s*${e}\\s*\\]\\s*$`, "i"), "");
  }
  return clean.trim();
};

export const fetchHead = async (url: string): Promise<Response | null> => {
  try {
    const res = await fetch(url, { method: "HEAD", redirect: "follow" });
    if ((res as any).ok) return res;
  } catch {
    // ignore
  }
  try {
    const res = await fetch(url, { method: "GET", redirect: "follow" });
    return res as any;
  } catch {
    return null;
  }
};
