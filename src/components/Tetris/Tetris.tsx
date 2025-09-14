"use client";

import { FC } from "react";
import { Active } from "@/components/Fields/Active/Active";
import { Background } from "@/components/Fields/Background/Background";
import { Blocks } from "@/components/Fields/Blocks/Blocks";
import { Ghost } from "@/components/Fields/Ghost/Ghost";
import { Input } from "@/components/Input/Input";
import { Playground } from "@/components/Playground/Playground";
import { Preview } from "@/components/Preview/Preview";
import { Tick } from "@/components/Tick/Tick";
import { Provider, ProviderProps } from "@/provider";

export interface TetrisProps extends ProviderProps {
    hasInput?: boolean;
    hasTick?: boolean;
}

const Base: FC<TetrisProps> = props => {
    return (
        <Provider {...props}>
            <Input />
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
        </Provider>
    );
};

export const Tetris = {
    Provider: Provider,
    Input: Input,
    Tick: Tick,
    Playground: Playground,
    Background: Background,
    Active: Active,
    Ghost: Ghost,
    Blocks: Blocks,
};

export default Base;
