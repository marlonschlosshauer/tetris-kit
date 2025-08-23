import { createContext, FC, PropsWithChildren, useContext } from "react";
import { Playground as PlaygroundBase } from "@/components/Playground/Playground";
import { Cell as CellBase, CellClassNames } from "@/components/Cell/Cell";

export interface VisualDataClassNames {
  cell?: CellClassNames;
  playground?: string;
}

export interface VisualDataComponents {
  Cell?: typeof CellBase;
  Playground?: typeof PlaygroundBase;
}

export interface VisualData {
  classNames: VisualDataClassNames;
  components: VisualDataComponents;
}

export type VisualProps = {
  classNames?: Partial<VisualDataClassNames>;
  components?: Partial<VisualDataComponents>;
};

const Context = createContext({} as VisualData);

export const VisualProvider: FC<PropsWithChildren<VisualProps>> = ({
  children,
  components = {},
  classNames = {},
  ...props
}) => {
  return (
    <Context.Provider
      value={{
        ...props,
        classNames,
        components: {
          Playground: PlaygroundBase,
          Cell: CellBase,
          ...components,
        },
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useVisual = () => useContext(Context);
