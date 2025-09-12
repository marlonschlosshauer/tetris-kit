"use client";

import { FC } from "react";
import { Fields } from "@/components/Fields/Fields";
import { Playground } from "@/components/Playground/Playground";
import { useTetris } from "@/provider/tetris";

export const Game: FC = () => {
    const { playground, classNames } = useTetris();

    return (
        <Playground {...playground} className={classNames?.playground}>
            <Fields />
        </Playground>
    );
};
