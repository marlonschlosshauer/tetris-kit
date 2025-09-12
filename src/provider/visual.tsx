import { FC, PropsWithChildren, createContext, useContext } from "react";
import { CellClassNames } from "@/components/Cell/Cell";

export interface VisualDataClassNames {
    cell?: CellClassNames;
    playground?: string;
}

export interface VisualData {
    classNames: VisualDataClassNames;
}

export type VisualProps = {
    classNames?: Partial<VisualDataClassNames>;
};

const Context = createContext({} as VisualData);

export const VisualProvider: FC<PropsWithChildren<VisualProps>> = ({
    children,
    classNames = {},
    ...props
}) => {
    return (
        <Context.Provider
            value={{
                ...props,
                classNames,
            }}>
            {children}
        </Context.Provider>
    );
};

export const useVisual = () => useContext(Context);
