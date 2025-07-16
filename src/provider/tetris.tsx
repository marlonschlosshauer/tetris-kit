import { createContext, FC, PropsWithChildren, useContext } from "react";
import { GameProps, GameProvider } from "./game";
import { VisualProps, VisualProvider } from "./visual";

export type TetrisData = GameProps & VisualProps;

export type TetrisProps = GameProps & VisualProps;

const Context = createContext({} as TetrisData);

export const TetrisProvider: FC<PropsWithChildren<TetrisProps>> = ({
  children,
  ...props
}) => {
  return (
    <Context.Provider value={props}>
      <VisualProvider {...props}>
        <GameProvider {...props}>{children}</GameProvider>
      </VisualProvider>
    </Context.Provider>
  );
};

export const useTetris = () => useContext(Context);
