import { Block, Game, Playground } from "@/types/game";
import { tetrimoni } from "./tetrimoni";

export const bounds = (y: number, x: number, playground: Playground) => {
  return y < playground.rows && y >= 0 && x < playground.columns && x >= 0;
};

export const rotate = (block: Block) => {
  const newBlock = block * 10;

  return (
    Math.floor(newBlock / 10000) > 0 ? newBlock / 10000 : newBlock
  ) as Block;
};

export const collision = (game: Game) => {
  const { active, playground, cells } = game;
  const field = tetrimoni(active.block);

  return field
    .flatMap((row, y) => row.flatMap((value, x) => ({ y, x, value })))
    .filter(({ value }) => !!value)
    .some(
      ({ x, y }) =>
        !bounds(active.y + y, active.x + x, playground) ||
        cells
          .filter((cell) => cell.status === "filled")
          .some((cell) => active.y + y === cell.y && active.x + x === cell.x),
    );
};

export const nudge = (game: Game): Game => {
  const newGameXPositive = {
    ...game,
    active: { ...game.active, x: game.active.x + 1 },
  };

  if (!collision(newGameXPositive)) {
    return newGameXPositive;
  }

  const newGameXNegative = {
    ...game,
    active: { ...game.active, x: game.active.x - 1 },
  };

  if (!collision(newGameXNegative)) {
    return newGameXNegative;
  }

  const newGameYPositive = {
    ...game,
    active: { ...game.active, y: game.active.y + 1 },
  };

  if (!collision(newGameYPositive)) {
    return newGameYPositive;
  }

  const newGameYNegative = {
    ...game,
    active: { ...game.active, y: game.active.y - 1 },
  };

  if (!collision(newGameYNegative)) {
    return newGameYNegative;
  }

  const newGameDiagonalPositive = {
    ...newGameXPositive,
    active: {
      ...game.active,
      y: newGameYPositive.active.y,
      x: newGameXPositive.active.x,
    },
  };

  if (!collision(newGameDiagonalPositive)) {
    return newGameDiagonalPositive;
  }

  const newGameDiagonalNegative = {
    ...newGameXPositive,
    active: {
      ...game.active,
      y: newGameYNegative.active.y,
      x: newGameXNegative.active.x,
    },
  };

  if (!collision(newGameDiagonalNegative)) {
    return newGameDiagonalNegative;
  }

  const newGameJumpPositive = {
    ...newGameXPositive,
    active: {
      ...game.active,
      y: newGameYNegative.active.y,
      x: newGameXPositive.active.x,
    },
  };

  if (!collision(newGameJumpPositive)) {
    return newGameJumpPositive;
  }

  const newGameJumpNegative = {
    ...newGameXPositive,
    active: {
      ...game.active,
      y: newGameYPositive.active.y,
      x: newGameXNegative.active.x,
    },
  };

  if (!collision(newGameJumpNegative)) {
    return newGameJumpNegative;
  }

  return game;
};

export const drop = (game: Game): Game => {
  const newGame = { ...game, active: { ...game.active, y: game.active.y + 1 } };

  return collision(newGame) ? game : drop(newGame);
};
