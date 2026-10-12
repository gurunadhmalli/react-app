# React Task List

A simple React + Vite task list app used to practice GitHub Actions.

## Scripts

```bash
npm install      # install dependencies
npm run dev      # start the dev server
npm test         # run tests (Vitest)
npm run build    # build into dist/
```

## CI

`.github/workflows/react-ci.yml` runs on every push and pull request to `main`:

1. **test** – installs dependencies and runs the tests
2. **build** – builds the app and uploads `dist/` as the `dist-files` artifact
