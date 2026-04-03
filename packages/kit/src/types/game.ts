export type Tetromino = "o" | "i" | "l" | "j" | "s" | "z" | "t";

export type CellStatus = "empty" | "filled" | "ghost" | "active";

export interface Cell {
    status: CellStatus;
    x: number;
    y: number;
    type?: Tetromino;
}

export interface Playground {
    rows: number;
    columns: number;
}

export interface Active {
    tetromino: Tetromino;
    rotation: number;
    x: number;
    y: number;
}

export interface Game {
    playground: Playground;
    cells: Cell[];
    active: Active;
    queue: Tetromino[];
    cleared: number;
}
