import { FC } from "react";
import styles from "./Game.module.scss";
import { Cell } from "../Cell/Cell";
import { projection } from "@/lib/projection";
import { useTetris } from "@/lib/provider";

export const Game: FC = () => {
  const game = useTetris();

  if (!game) {
    return null;
  }

  const { playground } = game;

  if (!playground) {
    return null;
  }

  const { rows, columns } = playground;

  if (!rows || !columns) {
    return null;
  }

  const map = projection(game);

  if (!map || !map.length) {
    return null;
  }

  return (
    <section
      className={styles.wrapper}
      style={{
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
      }}
    >
      {Array.from({ length: rows }).map((_, y) =>
        Array.from({ length: columns }).map((_, x) => (
          <Cell key={`${x}-${y}`} {...map?.[y]?.[x]} />
        )),
      )}
    </section>
  );
};
