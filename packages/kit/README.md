# tetris-kit

A composable, fully styleable Tetris engine for React.

## Quick Start

```bash
npm install tetris-kit
```

Drop in a complete Tetris game with a single component:

```tsx
import { Tetris } from "tetris-kit";
import "tetris-kit/styles.css";

export default function App() {
    return <Tetris />;
}
```

This renders the playfield, active piece, ghost piece, placed blocks, a piece preview, and keyboard input out of the box.

## Custom Layout

Use `Tetris.*` to compose your own layout from individual pieces:

```tsx
import { Tetris } from "tetris-kit";
import "tetris-kit/styles.css";

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
import { Tetris, useTetris } from "tetris-kit";
import "tetris-kit/styles.css";

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

The CSS is split into two files: **layout** (structural) and **theme** (visual).

### Stylesheets

| Import                  | Description                                              |
| ----------------------- | -------------------------------------------------------- |
| `tetris-kit/styles.css` | Both layout + theme (recommended for most users)         |
| `tetris-kit/layout.css` | Structural only: grid, flex, z-index, sizing             |
| `tetris-kit/theme.css`  | Visual only: colors, borders, backgrounds, border-radius |

To use the default look, import `styles.css`:

```tsx
import "tetris-kit/styles.css";
```

To bring your own visual styles, import only `layout.css` and write your own theme:

```tsx
import "tetris-kit/layout.css";
import "./my-theme.css";
```

All built-in styles live inside CSS layers (`tetris-kit.layout` and `tetris-kit.theme`), so your styles always take priority without `!important` or specificity hacks.

### Classes

Every component renders classes you can target directly in CSS:

**Component classes:**

| Class                        | Element                  |
| ---------------------------- | ------------------------ |
| `.tetris-kit-playground`     | Playfield grid container |
| `.tetris-kit-frame`          | Cell position wrapper    |
| `.tetris-kit-cell`           | Visual cell              |
| `.tetris-kit-preview`        | Preview container        |
| `.tetris-kit-tetromino`      | Tetromino outer wrapper  |
| `.tetris-kit-tetromino-grid` | Tetromino grid layout    |

**Status classes** (on cells):

| Class                | Status         |
| -------------------- | -------------- |
| `.tetris-kit-empty`  | Empty cell     |
| `.tetris-kit-active` | Falling piece  |
| `.tetris-kit-filled` | Placed block   |
| `.tetris-kit-ghost`  | Ghost/shadow   |

**Tetromino type classes** (on cells):

| Class            | Piece |
| ---------------- | ----- |
| `.tetris-kit-i`  | I     |
| `.tetris-kit-o`  | O     |
| `.tetris-kit-t`  | T     |
| `.tetris-kit-s`  | S     |
| `.tetris-kit-z`  | Z     |
| `.tetris-kit-j`  | J     |
| `.tetris-kit-l`  | L     |

Example — a Game Boy inspired theme using only layout + custom CSS:

```css
.tetris-kit-cell {
    width: 22px;
    border: 1px solid #0f380f;
    border-radius: 0;
}

.tetris-kit-empty {
    background-color: #0f380f;
}

.tetris-kit-active {
    background-color: #9bbc0f;
}

.tetris-kit-filled {
    background-color: #8bac0f;
}

.tetris-kit-ghost {
    background-color: #306230;
}
```

### Data attributes

Cells also expose `data-status` and `data-type` attributes as an alternative to classes:

```css
.tetris-kit-cell[data-type="i"][data-status="ghost"] {
    background-color: rgba(0, 255, 255, 0.3);
}
```

### Class overrides via props

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
            o: "text-yellow-500",
            i: "text-cyan-500",
            t: "text-purple-500",
        },
    }}
/>
```

### Per-component `className`

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

## Exports

| Export                                                            | Description                              |
| ----------------------------------------------------------------- | ---------------------------------------- |
| `Tetris`                                                          | All-in-one component with sub-components |
| `Provider`                                                        | Game + visual context provider           |
| `useTetris`                                                       | Hook to read game and visual state       |
| `TetrisProps`, `ProviderProps`, `ProviderData`                    | Component prop types                     |
| `Tetromino`, `Cell`, `CellStatus`, `Active`, `Playground`, `Game` | Game model types                         |
