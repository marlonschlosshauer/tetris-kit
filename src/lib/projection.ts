import { Active, Cell, CellStatus, Game, Playground } from "@/types/game";
import { tetrimoni } from "./tetrimoni";
import { CellProps } from "@/components/Cell/Cell";
import { bounds } from "./collision";

export const projectActive = (
  active: Active,
  playground: Playground,
): Cell[][] => {
  const field = tetrimoni(active.block);

  const map = Array.from({ length: playground.rows }).map((_, y) =>
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
      };
    });
  });

  return map;
};

export const projectCells = (
  cells: CellProps[],
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
