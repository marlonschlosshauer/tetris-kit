import { Cell } from "@/types/game";

export const print = (cells: Cell[][]) => {
    console.table(cells.map(rows => rows.map(cell => cell.status)));
};
