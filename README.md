# tetris-kit

A composable Tetris implementation for React, organized as a [Turborepo](https://turborepo.dev) monorepo.

## Project Structure

```
apps/
  demo/         → Next.js app showcasing the kit
packages/
  kit/          → @tetris-kit/kit — the core Tetris library
```

## Getting Started

```bash
npm install
npm run dev       # starts all apps in dev mode
npm run build     # builds all packages and apps
```

## Using `@tetris-kit/kit`

### Quick Start

Drop in a Tetris game with a single component:

```tsx
import { Tetris } from "@tetris-kit/kit";

export default function App() {
    return <Tetris />;
}
```

This renders the playfield, active piece, ghost piece, placed blocks, a piece preview, and keyboard input out of the box.

### Custom Layout

Use `Tetris.*` to compose your own layout from individual pieces:

```tsx
import { Tetris } from "@tetris-kit/kit";

export default function App() {
    return (
        <Tetris.Provider>
            <Tetris.Input />
            <Tetris.Playground>
                <Tetris.Background />
                <Tetris.Blocks />
                <Tetris.Ghost />
                <Tetris.Active />
            </Tetris.Playground>
        </Tetris.Provider>
    );
}
```

### Accessing Game State

Use the `useTetris` hook inside a `Tetris.Provider` to read game state:

```tsx
import { Tetris, useTetris } from "@tetris-kit/kit";

function ScoreDisplay() {
    const { cleared } = useTetris();
    return <p>Lines cleared: {cleared}</p>;
}

export default function App() {
    return (
        <Tetris.Provider>
            <ScoreDisplay />
            {/* ... */}
        </Tetris.Provider>
    );
}
```

### Custom Styling

Pass `classNames` to override default styles:

```tsx
<Tetris classNames={{ playground: "my-playground", cell: { base: "my-cell" } }} />
```

### Props

| Prop         | Type                                             | Description                |
| ------------ | ------------------------------------------------ | -------------------------- |
| `playground` | `{ rows: number; columns: number }`              | Board dimensions           |
| `classNames` | `{ playground?: string; cell?: CellClassNames }` | CSS class overrides        |
| `cells`      | `Cell[]`                                         | Initial cell state         |
| `queue`      | `Tetromino[]`                                    | Initial piece queue        |
| `active`     | `Active`                                         | Initial active piece       |
| `cleared`    | `number`                                         | Initial cleared line count |

### Exports

| Export                                                            | Description                                                                                                  |
| ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| `Tetris`                                                          | All-in-one component, also exposes `.Provider`, `.Input`, `.Tick`, `.Playground`, `.Background`, `.Active`, `.Ghost`, `.Blocks` |
| `Provider`                                                        | Game + visual context provider                                                                               |
| `useTetris`                                                       | Hook to access game and visual state                                                                         |
| `TetrisProps`, `ProviderProps`, `ProviderData`                    | Component prop types                                                                                         |
| `Tetromino`, `Cell`, `CellStatus`, `Active`, `Playground`, `Game` | Game model types                                                                                             |
