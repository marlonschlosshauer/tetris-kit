import { FC, PropsWithChildren } from "react";
import styles from "./Playground.module.scss";
import { Playground as Base } from "@/types/game";

export type PlaygroundProps = Base;

export const Playground: FC<PropsWithChildren<PlaygroundProps>> = ({
  rows,
  columns,
  children,
}) => {
  if (!rows || !columns) {
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
      {children}
    </section>
  );
};
