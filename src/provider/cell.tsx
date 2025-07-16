import { Cell as Base } from "@/types/game";
import { createContext, FC, PropsWithChildren, useContext } from "react";

export type CellData = Base;

export type CellProps = CellData;

const Context = createContext({} as CellData);

export const CellProvider: FC<PropsWithChildren<CellProps>> = ({
  children,
  ...props
}) => {
  return <Context.Provider value={props}>{children}</Context.Provider>;
};

export const useCell = () => useContext(Context);
