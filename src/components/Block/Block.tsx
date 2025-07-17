import { FC } from "react";
import { Cell } from "@/types/game";
import { Frame } from "@/components/Frame/Frame";
import { useVisual } from "@/provider/visual";

export type BlockProps = Cell;

export const Block: FC<BlockProps> = (props) => {
  const { components } = useVisual();
  const { Cell: Tile } = components;

  if (!Tile) {
    return null;
  }

  return (
    <Frame {...props}>
      <Tile {...props} />
    </Frame>
  );
};
