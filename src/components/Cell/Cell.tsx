import styles from "./Cell.module.scss";
import { FC } from "react";
import { PropsWithClassName } from "@/types/app";
import { useCell } from "@/provider/cell";

export const Cell: FC<PropsWithClassName> = ({ className }) => {
  const { status } = useCell();
  return <div className={`${styles.cell} ${styles[status]} ${className}`} />;
};
