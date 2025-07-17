import { FC } from "react";

import { Fields } from "@/components/Fields/Fields";
import { useTetris } from "@/provider/tetris";

export const Game: FC = () => {
  const { playground, components } = useTetris();
  const { Playground: Playground } = components;

  if (!Playground) {
    return null;
  }

  return (
    <Playground {...playground}>
      <Fields />
    </Playground>
  );
};
