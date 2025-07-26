import { FC, PropsWithChildren } from "react";
import styles from "./Playground.module.scss";
import { Playground as Base } from "@/types/game";
import { PropsWithClassName } from "@/types/app";

export type PlaygroundProps = Base;

export const Playground: FC<PropsWithChildren<PropsWithClassName<PlaygroundProps>>> = ({
  rows,
  columns,
  children,
  className,
}) => {
  if (!rows || !columns) {
    return null;
  }

  return (
    <section
      className={`${styles.wrapper} ${className || ''}`}
      style={{
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
      }}
    >
      {children}
    </section>
  );
};
