"use client";

import {
    ActionDispatch,
    FC,
    PropsWithChildren,
    createContext,
    useContext,
    useEffect,
    useReducer,
} from "react";
import { Event, reduce } from "@/lib/loop";
import { Game as Base } from "@/types/game";

export interface GameData extends Base {
    dispatch: ActionDispatch<[event: Event]>;
}

export type GameProps = Partial<Base>;

const Context = createContext({} as GameData);

export const GameProvider: FC<PropsWithChildren<GameProps>> = ({
    children,
    cells,
    queue,
    active,
    cleared,
    playground,
}) => {
    const [state, dispatch] = useReducer(reduce, {} as Base);

    useEffect(() => {
        // I would prefer to use the initialState parameter on useReduce, unfortunately that runs twice, causing issues with Hydration as we call Math.random in startGame (to determine block order)
        dispatch({
            type: "RESTART",
            props: { cells, queue, active, cleared, playground },
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <Context.Provider value={{ ...state, dispatch }}>{children}</Context.Provider>;
};

export const useGame = () => useContext(Context);
