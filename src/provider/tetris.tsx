import { FC, PropsWithChildren } from "react";
import { GameData, GameProps, GameProvider, useGame } from "./game";
import { useVisual, VisualData, VisualProps, VisualProvider } from "./visual";

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
