import { Active, Cell, CellStatus, Game, Playground } from "@/types/game";
import { blockToTetromino, resolveBlock } from "./tetromino";
import { bounds, drop } from "./collision";

export const projectActive = (
  active: Active,
  playground: Playground,
): Cell[][] => {
  const field = resolveBlock(active.block);

  const map: Cell[][] = Array.from({ length: playground.rows }).map((_, y) =>
    Array.from({ length: playground.columns }).map((_, x) => ({
      x,
      y,
      status: "empty" as CellStatus,
    })),
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
        type: value ? blockToTetromino(active.block) : undefined,
      };
    });
  });

  return map;
};

export const projectCells = (
  cells: Cell[],
  playground: Playground,
): Cell[][] => {
  const map = Array.from({ length: playground.rows }).map((_, y) =>
    Array.from({ length: playground.columns }).map((_, x) => ({
      x,
      y,
      status: "empty" as CellStatus,
    })),
  );

  cells
    .filter((cell) => bounds(cell.y, cell.x, playground))
    .forEach((cell) => (map[cell.y][cell.x] = cell));

  return map;
};

export const projectGame = (game: Game): Cell[][] => {
  const map = Array.from({ length: game.playground.rows }).map((_, y) =>
    Array.from({ length: game.playground.columns }).map((_, x) => ({
      x,
      y,
      status: "empty" as CellStatus,
    })),
  );

  return map;
};

export const projectGhost = (
  active: Active,
  playground: Playground,
  cells: Cell[],
): Cell[][] => {
  const gameState = { active, playground, cells, queue: [], cleared: 0 };
  const droppedGameState = drop(gameState);
  const droppedActive = droppedGameState.active;

  const field = resolveBlock(droppedActive.block);

  const map = Array.from({ length: playground.rows }).map((_, y) =>
    Array.from({ length: playground.columns }).map((_, x) => ({
      x,
      y,
      status: "empty" as CellStatus,
    })),
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
    })),
  );
};
