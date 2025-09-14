import { Active, Cell, CellStatus, Game, Playground } from "@/types/game";
import { bounds, drop } from "./collision";
import { resolveBlock } from "./tetromino";

export const projectBlock = (block: Pick<Active, "tetromino" | "rotation">): Cell[][] => {
    const field = resolveBlock(block);

    const width = field.length;
    const [initial] = field;

    if (!initial) {
        return [[]];
    }

    const height = initial.length;

    if (!height) {
        return [[]];
    }

    const map: Cell[][] = Array.from({ length: width }).map((_, y) =>
        Array.from({ length: height }).map((_, x) => ({
            x,
            y,
            status: "empty" as CellStatus,
        }))
    );

    field.forEach((row, y) => {
        row.forEach((value, x) => {
            map[y][x] = {
                ...map?.[y]?.[x],
                status: value ? "active" : map?.[y]?.[x]?.status,
                type: value ? block.tetromino : undefined,
            };
        });
    });

    return map;
};

export const projectActive = (active: Active, playground: Playground): Cell[][] => {
    const field = resolveBlock(active);

    const map: Cell[][] = Array.from({ length: playground.rows }).map((_, y) =>
        Array.from({ length: playground.columns }).map((_, x) => ({
            x,
            y,
            status: "empty" as CellStatus,
        }))
    );

    field.forEach((row, y) => {
        row.forEach((value, x) => {
            const newY = y + active.y;
            const newX = x + active.x;

            if (!bounds(newY, newX, playground)) {
                return;
            }

            map[newY][newX] = {
                ...map?.[newY]?.[newX],
                status: value ? "active" : map?.[newY]?.[newX]?.status,
                type: value ? active.tetromino : undefined,
            };
        });
    });

    return map;
};

export const projectCells = (cells: Cell[], playground: Playground): Cell[][] => {
    const map = Array.from({ length: playground.rows }).map((_, y) =>
        Array.from({ length: playground.columns }).map((_, x) => ({
            x,
            y,
            status: "empty" as CellStatus,
        }))
    );

    cells
        .filter(cell => bounds(cell.y, cell.x, playground))
        .forEach(cell => (map[cell.y][cell.x] = cell));

    return map;
};

export const projectGame = (game: Game): Cell[][] => {
    const map = Array.from({ length: game.playground.rows }).map((_, y) =>
        Array.from({ length: game.playground.columns }).map((_, x) => ({
            x,
            y,
            status: "empty" as CellStatus,
        }))
    );

    return map;
};

export const projectGhost = (active: Active, playground: Playground, cells: Cell[]): Cell[][] => {
    const gameState = { active, playground, cells, queue: [], cleared: 0 };
    const droppedGameState = drop(gameState);
    const droppedActive = droppedGameState.active;

    const field = resolveBlock(droppedActive);

    const map = Array.from({ length: playground.rows }).map((_, y) =>
        Array.from({ length: playground.columns }).map((_, x) => ({
            x,
            y,
            status: "empty" as CellStatus,
        }))
    );

    field.forEach((row, y) => {
        row.forEach((value, x) => {
            const newY = y + droppedActive.y;
            const newX = x + droppedActive.x;

            if (!bounds(newY, newX, playground)) {
                return;
            }

            map[newY][newX] = {
                ...map?.[newY]?.[newX],
                status: value ? "ghost" : map?.[newY]?.[newX]?.status,
            };
        });
    });

    return map;
};

export const projection = (game: Game): Cell[][] => {
    const projectedActive = projectActive(game.active, game.playground);
    const projectedCells = projectCells(game.cells, game.playground);
    const projectedGame = projectGame(game);

    return projectedGame.map((row, y) =>
        row.map((cell, x) => ({
            ...cell,
            status:
                projectedActive?.[y]?.[x]?.status !== "empty"
                    ? projectedActive?.[y]?.[x]?.status
                    : projectedCells?.[y]?.[x]?.status !== "empty"
                      ? projectedCells?.[y]?.[x]?.status
                      : cell.status,
        }))
    );
};
