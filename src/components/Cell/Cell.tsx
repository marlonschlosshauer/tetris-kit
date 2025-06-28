import { Cell as Base } from "@/types/game";
import styles from "./Cell.module.scss";
import { FC } from "react";

export type CellProps = Base;

export const Cell: FC<CellProps> = ({ x, y, status }) => {
  return (
    <div
      data-x={x}
      data-y={y}
      id={`${x}-${y}`}
      className={`${styles.cell} ${styles[status]}`}
    />
  );
};
