"use client";

import { FC } from "react";
import { Provider, ProviderProps } from "../../provider";
import { Active } from "../Fields/Active/Active";
import { Background } from "../Fields/Background/Background";
import { Blocks } from "../Fields/Blocks/Blocks";
import { Ghost } from "../Fields/Ghost/Ghost";
import { Input } from "../Input/Input";
import { Playground } from "../Playground/Playground";
import { Preview } from "../Preview/Preview";
import { Tick } from "../Tick/Tick";
import styles from "./Tetris.module.css";

export interface TetrisProps extends ProviderProps {
    hasInput?: boolean;
    hasTick?: boolean;
}

const Base: FC<TetrisProps> = ({ hasInput = true, hasTick = true, ...props }) => {
    return (
        <Provider {...props}>
            <div className={styles.content}>
                {hasInput && <Input />}
                {hasTick && <Tick />}
                <Playground>
                    <Background />
                    <Blocks />
                    <Ghost />
                    <Active />
                </Playground>
                <Preview.Base>
                    <Preview.UpNext />
                    <Preview.Rest />
                </Preview.Base>
            </div>
        </Provider>
    );
};

export const Tetris = Object.assign(Base, {
    Provider: Provider,
    Input: Input,
    Tick: Tick,
    Playground: Playground,
    Background: Background,
    Active: Active,
    Ghost: Ghost,
    Blocks: Blocks,
});
