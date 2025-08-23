import styles from "./Cell.module.scss";
import { FC } from "react";
import { PropsWithClassName } from "@/types/app";
import { Cell as Base } from "@/types/game";

export type CellProps = Partial<Base>;

export const Cell: FC<PropsWithClassName<CellProps>> = ({
  status,
  className,
}) => {
  return (
    <div
      className={`${styles.cell} ${status && styles[status]} ${className || ""}`}
    />
  );
};
