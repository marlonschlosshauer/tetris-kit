# tetris-kit

A composable Tetris engine for React.

```tsx
import { Tetris } from "tetris-kit";

export default function App() {
    return <Tetris />;
}
```

See [`tetris-kit`](packages/kit/README.md) for full documentation on custom layouts, game state, and styling.

## Project Structure

```
apps/
  demo/         → Next.js app showcasing the kit
packages/
  kit/          → tetris-kit — the core Tetris library
```

## Getting Started

```bash
npm install
npm run dev       # starts all apps in dev mode
npm run build     # builds all packages and apps
```
