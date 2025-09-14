import React, { FC, Fragment, PropsWithChildren } from "react";
import clsx from "clsx";
import { Block } from "@/components/Block/Block";
import { projectBlock } from "@/lib/projection";
import { PropsWithClassName } from "@/types/app";
import { Cell, Tetromino as Tetromino_ } from "@/types/game";
import styles from "./Tetromino.module.css";

export interface TetrominoCellProps {
    cells: Cell[][];
}

export interface TetrominoTetrominoProps {
    tetromino: Tetromino_;
    rotation?: number;
}

export type TetrominoProps = TetrominoCellProps | TetrominoTetrominoProps;

export const Tetromino: FC<PropsWithClassName<TetrominoProps>> = ({ className, ...props }) => {
    const cells =
        "cells" in props
            ? props.cells
            : "tetromino" in props
              ? projectBlock({ ...props, rotation: props.rotation ?? 0 })
              : undefined;

    if (!cells) {
        return null;
    }

    return (
        <Wrapper cells={cells}>
            <Base cells={cells} className={className} />
        </Wrapper>
    );
};

const Wrapper: FC<PropsWithClassName<PropsWithChildren<TetrominoCellProps>>> = ({
    cells,
    className,
    children,
}) => {
    const rows = cells.length;
    const [initial] = cells;

    if (!initial) {
        return null;
    }

    const columns = initial.length;

    if (!columns) {
        return null;
    }

    return (
        <div className={styles.outer}>
            <div
                className={clsx(styles.inner, className)}
                style={{
                    gridTemplateRows: `repeat(${rows}, 1fr)`,
                    gridTemplateColumns: `repeat(${columns}, 1fr)`,
                }}>
                {children}
            </div>
        </div>
    );
};

const Base: FC<PropsWithClassName<TetrominoCellProps>> = ({ cells, className }) => {
    return (
        <Fragment>
            {cells.flatMap(row =>
                row.flatMap(cell => (
                    <Block key={`${cell.x}-${cell.y}`} {...cell} className={className} />
                ))
            )}
        </Fragment>
    );
};
