// scripts/inject-banner.js
const fs = require("fs");
const path = require("path");

const outDir = path.resolve(__dirname, "../out");

const banner = `<!--
FFFFFFFFFFFFFFFFFFFFFFlllllll                  kkkkkkkk             iiii                                         iiii
F::::::::::::::::::::Fl:::::l                  k::::::k            i::::i                                       i::::i
F::::::::::::::::::::Fl:::::l                  k::::::k             iiii                                         iiii
FF::::::FFFFFFFFF::::Fl:::::l                  k::::::k
  F:::::F       FFFFFF l::::l    ooooooooooo    k:::::k    kkkkkkkiiiiiii     cccccccccccccccc   ooooooooooo   iiiiiiinnnn  nnnnnnnn
  F:::::F              l::::l  oo:::::::::::oo  k:::::k   k:::::k i:::::i   cc:::::::::::::::c oo:::::::::::oo i:::::in:::nn::::::::nn
  F::::::FFFFFFFFFF    l::::l o:::::::::::::::o k:::::k  k:::::k   i::::i  c:::::::::::::::::co:::::::::::::::o i::::in::::::::::::::nn
  F:::::::::::::::F    l::::l o:::::ooooo:::::o k:::::k k:::::k    i::::i c:::::::cccccc:::::co:::::ooooo:::::o i::::inn:::::::::::::::n
  F:::::::::::::::F    l::::l o::::o     o::::o k::::::k:::::k     i::::i c::::::c     ccccccco::::o     o::::o i::::i  n:::::nnnn:::::n
  F::::::FFFFFFFFFF    l::::l o::::o     o::::o k:::::::::::k      i::::i c:::::c             o::::o     o::::o i::::i  n::::n    n::::n
  F:::::F              l::::l o::::o     o::::o k:::::::::::k      i::::i c:::::c             o::::o     o::::o i::::i  n::::n    n::::n
  F:::::F              l::::l o::::o     o::::o k::::::k:::::k     i::::i c::::::c     ccccccco::::o     o::::o i::::i  n::::n    n::::n
FF:::::::FF           l::::::lo:::::ooooo:::::ok::::::k k:::::k   i::::::ic:::::::cccccc:::::co:::::ooooo:::::oi::::::i n::::n    n::::n
F::::::::FF           l::::::lo:::::::::::::::ok::::::k  k:::::k  i::::::i c:::::::::::::::::co:::::::::::::::oi::::::i n::::n    n::::n
F::::::::FF           l::::::l oo:::::::::::oo k::::::k   k:::::k i::::::i  cc:::::::::::::::c oo:::::::::::oo i::::::i n::::n    n::::n
FFFFFFFFFFF           llllllll   ooooooooooo   kkkkkkkk    kkkkkkkiiiiiiii    cccccccccccccccc   ooooooooooo   iiiiiiii nnnnnn    nnnnnn

             FLOKICOIN – Take Meme Fun to the 5th level
             https://flokicoin.org

-->\n`;

const ensureHtmlFiles = (directory) => {
  if (!fs.existsSync(directory)) {
    throw new Error(`Output directory not found: ${directory}`);
  }

  const entries = fs.readdirSync(directory, { withFileTypes: true });
  const files = [];

  entries.forEach((entry) => {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...ensureHtmlFiles(entryPath));
    } else if (entry.isFile() && entry.name.endsWith(".html")) {
      files.push(entryPath);
    }
  });

  return files;
};

const injectBanner = (filePath) => {
  const html = fs.readFileSync(filePath, "utf8");

  if (html.startsWith(banner.trimStart())) {
    console.log(`ℹ️ Banner already present. Skipping ${path.relative(outDir, filePath)}.`);
    return;
  }

  fs.writeFileSync(filePath, banner + html);
  console.log(`✅ Injected banner into ${path.relative(outDir, filePath)}.`);
};

const htmlFiles = ensureHtmlFiles(outDir);

htmlFiles.forEach(injectBanner);
