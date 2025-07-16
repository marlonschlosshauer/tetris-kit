import { FC } from "react";

import { Fields } from "@/components/Fields/Fields";
import { PlaygroundWrapper } from "@/components/PlaygroundWrapper/PlaygroundWrapper";
import { useVisual } from "@/provider/visual";

export const Game: FC = () => {
  const { components } = useVisual();
  const { Playground } = components;

  if (!Playground) {
    return null;
  }

  return (
    <PlaygroundWrapper>
      <Playground>
        <Fields />
      </Playground>
    </PlaygroundWrapper>
  );
};
