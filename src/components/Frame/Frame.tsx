import { FC, PropsWithChildren } from "react";
import { PropsWithClassName } from "@/types/app";
import { Cell } from "@/types/game";
import styles from "./Frame.module.css";

export type FrameProps = Cell;

export const Frame: FC<PropsWithChildren<PropsWithClassName<FrameProps>>> = ({
    x,
    y,
    status,
    className,
    children,
}) => {
    return (
        <div
            data-x={x}
            data-y={y}
            id={`${status}-${x}-${y}`}
            className={`${styles.cell} ${styles[status]} ${className}`}
            style={{ gridRow: y + 1, gridColumn: x + 1 }}>
            {children}
        </div>
    );
};
