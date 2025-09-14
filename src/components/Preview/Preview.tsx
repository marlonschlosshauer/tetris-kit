import { FC, Fragment, PropsWithChildren } from "react";
import clsx from "clsx";
import { Tetromino } from "@/components/Tetromino/Tetromino";
import { useTetris } from "@/provider";
import { PropsWithClassName } from "@/types/app";
import styles from "./Preview.module.css";

export const Base: FC<PropsWithChildren<PropsWithClassName>> = ({ className, children }) => {
    return <div className={clsx(styles.wrapper, className)}>{children}</div>;
};

export const UpNext: FC<PropsWithClassName> = ({ className }) => {
    const { queue = [] } = useTetris();

    const [nextUp] = queue;

    if (!nextUp) {
        return null;
    }
    return <Tetromino className={className} tetromino={nextUp} />;
};

export const Rest: FC<PropsWithClassName> = ({ className }) => {
    const { queue = [] } = useTetris();

    const [, ...rest] = queue;

    if (!rest.length) {
        return null;
    }
    return (
        <Fragment>
            {rest.slice(0, 6).map((tetromino, key) => (
                <Tetromino key={key} className={className} tetromino={tetromino} />
            ))}
        </Fragment>
    );
};

export const Nth: FC<PropsWithClassName<{ nth: number }>> = ({ nth, className }) => {
    const { queue = [] } = useTetris();

    const target = queue[nth];

    if (!target) {
        return null;
    }
    return (
        <Fragment>
            <Tetromino className={className} tetromino={target} />
        </Fragment>
    );
};

export const Preview = {
    Base,
    UpNext,
    Rest,
    Tetromino,
    Nth,
};
