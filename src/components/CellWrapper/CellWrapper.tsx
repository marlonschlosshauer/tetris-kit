import { Cell as Base } from "@/types/game";
import styles from "./CellWrapper.module.scss";
import { FC, PropsWithChildren } from "react";
import { PropsWithClassName } from "@/types/app";
import { CellProvider } from "@/provider/cell";

export type CellWrapperProps = Base;

export const CellWrapper: FC<
  PropsWithChildren<PropsWithClassName<CellWrapperProps>>
> = ({ children, ...props }) => {
  const { x, y, status, className } = props;
  return (
    <div
      data-x={x}
      data-y={y}
      id={`${x}-${y}`}
      className={`${styles.cell} ${styles[status]} ${className}`}
      style={{ gridRow: y + 1, gridColumn: x + 1 }}
    >
      <CellProvider {...props}>{children}</CellProvider>
    </div>
  );
};
