"use client";

import { FC, PropsWithChildren } from "react";
import { GameData, GameProps, GameProvider, useGame } from "@/provider/game";
import { VisualData, VisualProps, VisualProvider, useVisual } from "@/provider/visual";

export type TetrisProviderData = GameData & VisualData;

export type TetrisProviderProps = GameProps & VisualProps;

export const TetrisProvider: FC<PropsWithChildren<TetrisProviderProps>> = ({
    children,
    ...props
}) => {
    return (
        <VisualProvider {...props}>
            <GameProvider {...props}>{children}</GameProvider>
        </VisualProvider>
    );
};

export const useTetris = () => {
    const visual = useVisual();
    const game = useGame();

    return { ...visual, ...game };
};
