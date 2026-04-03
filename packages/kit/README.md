# @tetris-kit/kit

A composable, fully styleable Tetris engine for React.

## Quick Start

```bash
npm install @tetris-kit/kit
```

Drop in a complete Tetris game with a single component:

```tsx
import { Tetris } from "@tetris-kit/kit";

export default function App() {
    return <Tetris />;
}
```

This renders the playfield, active piece, ghost piece, placed blocks, a piece preview, and keyboard input out of the box.

## Custom Layout

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

### Components

| Component           | Description                                    |
| ------------------- | ---------------------------------------------- |
| `Tetris`            | All-in-one component with sensible defaults    |
| `Tetris.Provider`   | Game state + visual context provider           |
| `Tetris.Input`      | Keyboard input handler (renders nothing)       |
| `Tetris.Tick`       | Game loop timer (renders nothing)              |
| `Tetris.Playground` | Grid container for the playfield               |
| `Tetris.Background` | Empty background cells                         |
| `Tetris.Blocks`     | Settled blocks on the board                    |
| `Tetris.Ghost`      | Ghost/shadow showing where the piece will land |
| `Tetris.Active`     | Currently falling piece                        |

## Accessing Game State

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

## Props

| Prop         | Type                                             | Description                              |
| ------------ | ------------------------------------------------ | ---------------------------------------- |
| `playground` | `{ rows: number; columns: number }`              | Board dimensions                         |
| `classNames` | `{ playground?: string; cell?: CellClassNames }` | CSS class overrides                      |
| `cells`      | `Cell[]`                                         | Initial cell state                       |
| `queue`      | `Tetromino[]`                                    | Initial piece queue                      |
| `active`     | `Active`                                         | Initial active piece                     |
| `cleared`    | `number`                                         | Initial cleared line count               |
| `hasInput`   | `boolean`                                        | Enable keyboard input (default: `true`)  |
| `hasTick`    | `boolean`                                        | Enable game loop timer (default: `true`) |

## Styling

There are three ways to style tetris-kit, and they can be combined.

### 1. CSS with default classes

Every component renders a default class you can target directly:

| Class                        | Element                  |
| ---------------------------- | ------------------------ |
| `.tetris-kit-playground`     | Playfield grid container |
| `.tetris-kit-frame`          | Cell position wrapper    |
| `.tetris-kit-cell`           | Visual cell              |
| `.tetris-kit-preview`        | Preview container        |
| `.tetris-kit-tetromino`      | Tetromino outer wrapper  |
| `.tetris-kit-tetromino-grid` | Tetromino grid layout    |

All built-in styles live inside a `@layer tetris-kit` CSS layer, so your styles will always take priority without needing `!important` or specificity hacks:

```css
/* Your styles automatically win over the library defaults */
.tetris-kit-cell {
    width: 32px;
    height: 32px;
    border-radius: 4px;
}

.tetris-kit-playground {
    gap: 2px;
    background: #111;
}
```

### 2. Class overrides via props

Pass `classNames` to the `<Tetris>` component (or `<Tetris.Provider>`) to add classes through React:

```tsx
<Tetris
    classNames={{
        playground: "my-playground",
        cell: {
            cell: "my-cell",
            active: "my-active-cell",
            filled: "my-filled-cell",
            ghost: "my-ghost-cell",
            empty: "my-empty-cell",
        },
    }}
/>
```

The `cell` classNames also accept tetromino type keys (`o`, `i`, `l`, `j`, `s`, `z`, `t`) to style cells by piece type:

```tsx
<Tetris
    classNames={{
        cell: {
            o: "text-yellow-500",
            i: "text-cyan-500",
            t: "text-purple-500",
        },
    }}
/>
```

### 3. Per-component `className`

When using the composable API, each component that renders a DOM element accepts a `className` prop:

```tsx
<Tetris.Provider>
    <Tetris.Playground className="my-playground">
        <Tetris.Background />
        <Tetris.Blocks />
        <Tetris.Ghost />
        <Tetris.Active />
    </Tetris.Playground>
</Tetris.Provider>
```

### Combining approaches

All three methods work together. The final class list on a cell element looks like:

```
tetris-kit-cell [module styles] [className prop] [classNames overrides]
```

This means `classNames` overrides take highest priority in the cascade, followed by `className`, with the default module styles as the baseline (in the `tetris-kit` layer).

## Exports

| Export                                                            | Description                              |
| ----------------------------------------------------------------- | ---------------------------------------- |
| `Tetris`                                                          | All-in-one component with sub-components |
| `Provider`                                                        | Game + visual context provider           |
| `useTetris`                                                       | Hook to read game and visual state       |
| `TetrisProps`, `ProviderProps`, `ProviderData`                    | Component prop types                     |
| `Tetromino`, `Cell`, `CellStatus`, `Active`, `Playground`, `Game` | Game model types                         |
