import { createContext, FC, PropsWithChildren, useContext } from "react";
import { Playground as PlaygroundBase } from "@/components/Playground/Playground";
import { Cell as CellBase } from "@/components/Cell/Cell";

export interface VisualDataClassNames {
  cell?: string;
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
  components,
  classNames = {},
  ...props
}) => {
  const { Playground: Playground = PlaygroundBase, Cell = CellBase } =
    components ?? {};

  return (
    <Context.Provider
      value={{
        ...props,
        classNames,
        components: { Playground: Playground, Cell },
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useVisual = () => useContext(Context);
