import { Game as Base } from "@/types/game";
import {
  ActionDispatch,
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useReducer,
} from "react";
import { Event, reduce } from "@/lib/loop";
import { startGame } from "@/lib/logic";

export interface GameData extends Base {
  dispatch: ActionDispatch<[event: Event]>;
}

export type GameProps = Partial<Base>;

const Context = createContext({} as GameData);

export const GameProvider: FC<PropsWithChildren<GameProps>> = ({
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

export const useGame = () => useContext(Context);
