import { Cell, CellStatus, Game } from "@/types/game";
import { getQueue } from "./queue";
import { projectActive } from "./projection";
import { collision } from "./collision";

export const startGame = (game: Partial<Game> = {}): Game => {
  const [active, ...queue] = getQueue();

  return {
    playground: { rows: 24, columns: 4 },
    cells: [],
    active: { block: active, y: 0, x: 0 },
    queue,
    cleared: 0,
    ...game,
  };
};

export const castActive = (game: Game): Game => {
  const projectedActive = projectActive(game.active, game.playground);
  const cells = projectedActive
    .flatMap((rows) => rows)
    .filter((cell) => cell.status === "active")
    .map((cell) => ({ ...cell, status: "filled" as CellStatus }));

  if (!game.queue.length) {
    game.queue = getQueue();
  }

  const [next, ...rest] = game.queue;

  return {
    ...game,
    queue: rest,
    active: { block: next, x: 0, y: 0 },
    cells: [...game.cells, ...cells],
  };
};

export const clearCells = (game: Game): Game => {
  const rows = game.cells.reduce(
    (all, next) => {
      if (all[next.y]) {
        all[next.y].push(next);
      } else {
        all[next.y] = [next];
      }

      return all;
    },
    {} as Record<number, Cell[]>,
  );

  const columns = game.playground.columns;

  const cleared = Object.entries(rows)
    .flatMap(([y, row]) => (row.length === columns ? y : []))
    .map(Number);

  return {
    ...game,
    cells: game.cells
      .filter((cell) => !cleared.includes(cell.y))
      .map((cell) => ({
        ...cell,
        y: cell.y + cleared.filter((other) => other > cell.y).length,
      })),
    cleared: game.cleared + cleared.length,
  };
};

export const hasLost = (game: Game): Game => {
  return collision(game) ? startGame() : game;
};
