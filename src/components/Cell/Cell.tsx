import styles from "./Cell.module.css";
import { FC } from "react";
import { PropsWithClassName } from "@/types/app";
import { Cell as Base } from "@/types/game";
import clsx from "clsx";

export type CellClassNames = Partial<{
  cell: string;
  active: string;
  filled: string;
  empty: string;
  ghost: string;
  o: string;
  i: string;
  l: string;
  j: string;
  s: string;
  z: string;
  t: string;
}>;

export type CellProps = Base & { classNames?: CellClassNames };

export const Cell: FC<PropsWithClassName<CellProps>> = ({
  status,
  type,
  className,
  classNames = {},
}) => {
  return (
    <div
      className={clsx(
        styles.cell,
        type && styles[type],
        status && styles[status],
        className,
        type && classNames[type],
        status && classNames[status],
      )}
    />
  );
};
