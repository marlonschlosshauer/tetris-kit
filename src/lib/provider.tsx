import { Game } from "@/types/game";
import {
  ActionDispatch,
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useReducer,
} from "react";
import { Event, reduce } from "./loop";
import { startGame } from "./logic";

export interface ProviderData extends Game {
  dispatch: ActionDispatch<[event: Event]>;
}

export type ProviderProps = Partial<Game>;

const Context = createContext({} as ProviderData);

export const Provider: FC<PropsWithChildren<ProviderProps>> = ({
  children,
  ...props
}) => {
  const [state, dispatch] = useReducer(reduce, props, () => startGame(props));

  return (
    <Context.Provider value={{ ...state, dispatch }}>
      {children}
    </Context.Provider>
  );
};

export const useTetris = () => useContext(Context);
