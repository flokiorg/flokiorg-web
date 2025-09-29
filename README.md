**Flokicoin.org**

Online resources for the Flokicoin community.

**Requirements**
- Node.js 18+
- Yarn 4 (preferred) or npm

**Install**
```bash
git clone https://github.com/flokiorg/flokiorg-web
cd flokiorg-web
yarn install 
```

**Develop**
```bash
yarn dev
```
Open http://localhost:3000

**Build (static export)**
```bash
yarn build
```
Output: `out/` (configured via `next.config.js`).

**Preview static build**
```bash
yarn serve
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
