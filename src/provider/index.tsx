"use client";

import { FC, PropsWithChildren } from "react";
import { GameData, GameProps, GameProvider, useGame } from "@/provider/game";
import { VisualData, VisualProps, VisualProvider, useVisual } from "@/provider/visual";

export type ProviderData = GameData & VisualData;

export type ProviderProps = GameProps & VisualProps;

export const Provider: FC<PropsWithChildren<ProviderProps>> = ({ children, ...props }) => {
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
