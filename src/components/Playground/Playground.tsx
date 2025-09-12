"use client";

import { FC, PropsWithChildren } from "react";
import clsx from "clsx";
import { useTetris } from "@/provider";
import { PropsWithClassName } from "@/types/app";
import styles from "./Playground.module.css";

export const Playground: FC<PropsWithChildren<PropsWithClassName>> = ({ className, children }) => {
    const { classNames, playground } = useTetris();

    if (!playground) {
        return null;
    }

    const { rows, columns } = playground;

    if (!rows || !columns) {
        return null;
    }

    return (
        <section
            className={clsx(styles.wrapper, className, classNames.playground)}
            style={{
                gridTemplateRows: `repeat(${rows}, 1fr)`,
                gridTemplateColumns: `repeat(${columns}, 1fr)`,
            }}>
            {children}
        </section>
    );
};
