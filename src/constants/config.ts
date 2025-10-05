export const DONATION_WOF_URL: string =
  process.env.NEXT_PUBLIC_DONATION_WOF_URL || "";

export const DONATION_ECOSYSTEM_URL: string =
  process.env.NEXT_PUBLIC_DONATION_ECOSYSTEM_URL || "";

export const DONATION_URL: string = DONATION_WOF_URL;

export type AssetItem = {
  title: string;
  link: string;
  height?: number;
  width?: number;
};

export const ASSETS: AssetItem[] = [
  { title: "Logo", link: "/assets/logo.svg" },
  { title: "Square (mainnet)", link: "/assets/square-mainnet.jpeg" },
  { title: "Square (testnet)", link: "/assets/square-testnet.png" },
  { title: "Flokicoin (mainnet)", link: "/assets/flc.svg" },
  { title: "Flokicoin (testnet)", link: "/assets/flc-testnet.svg" },
  { title: "Lokiwiki", link: "/assets/lokiwiki.jpeg" },
  { title: "WoF Book", link: "/img/wof.png" },
  { title: "Flokicoin 512x512", link: "/assets/flokicoin-512x512.png", height: 512, width: 512 },
  { title: "Flokicoin 256x256", link: "/assets/flokicoin-256x256.png", height: 256, width: 256 },
  { title: "Flokicoin 200x200", link: "/assets/flokicoin-200x200.png", height: 200, width: 200 },
  { title: "Flokicoin 128x128", link: "/assets/flokicoin-128x128.png", height: 128, width: 128 },
  { title: "Flokicoin 64x64", link: "/assets/flokicoin-64x64.png", height: 64, width: 64 },
  { title: "Flokicoin 48x48", link: "/assets/flokicoin-48x48.png", height: 48, width: 48 },
  { title: "Flokicoin 32x32", link: "/assets/flokicoin-32x32.png", height: 32, width: 32 },
  { title: "Flokicoin 16x16", link: "/assets/flokicoin-16x16.png", height: 16, width: 16 },
];
