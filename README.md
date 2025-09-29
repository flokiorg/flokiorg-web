**Flokicoin Web**

- Official website for Flokicoin. Built with Next.js, statically exported to `out/`. Multilingual (EN, CN, RU).
- Org: https://github.com/flokiorg/

**Requirements**
- Node.js 18+
- Yarn 4 (preferred) or npm

**Install**
```bash
git clone https://github.com/flokiorg/flokiorg-web
cd flokiorg-web
yarn install    # or: npm install
```

**Develop**
```bash
yarn dev        # or: npm run dev
```
Open http://localhost:3000

**Build (static export)**
```bash
yarn build      # or: npm run build
```
Output: `out/` (configured via `next.config.js`).

**Preview static build**
```bash
yarn serve      # serves ./out at http://localhost:3000
```

**Lint**
```bash
yarn lint
```

**Translations**
- Edit `src/constants/translations/en.json` then mirror keys/links in `cn.json` and `ru.json`.

**Contributing**
- PRs welcome. Please keep changes small and focused.

**License**
- MIT
