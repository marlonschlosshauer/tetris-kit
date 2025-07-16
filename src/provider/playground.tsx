import { Playground as Base } from "@/types/game";
import { createContext, FC, PropsWithChildren, useContext } from "react";

export type PlaygroundData = Base;

export type PlaygroundProps = PlaygroundData;

const Context = createContext({} as PlaygroundData);

export const PlaygroundProvider: FC<PropsWithChildren<PlaygroundProps>> = ({
  children,
  ...props
}) => {
  return <Context.Provider value={props}>{children}</Context.Provider>;
};

export const usePlayground = () => useContext(Context);
