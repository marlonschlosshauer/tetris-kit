import { FC } from "react";
import clsx from "clsx";
import { PropsWithClassName } from "../../types/app";
import { Cell as Base } from "../../types/game";
import styles from "./Cell.module.css";

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
                "tetris-kit-cell",
                status && `tetris-kit-${status}`,
                type && `tetris-kit-${type}`,
                styles.cell,
                className,
                type && classNames[type],
                status && classNames[status]
            )}
        />
    );
};
