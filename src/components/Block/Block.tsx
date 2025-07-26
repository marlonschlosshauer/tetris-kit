import { FC } from "react";
import { Cell } from "@/types/game";
import { Frame } from "@/components/Frame/Frame";
import { useVisual } from "@/provider/visual";

export type BlockProps = Cell;

export const Block: FC<BlockProps> = (props) => {
  const { components, classNames } = useVisual();
  const { Cell: Tile } = components;

  if (!Tile) {
    return null;
  }

  return (
    <Frame {...props}>
      <Tile {...props} className={classNames?.cell} />
    </Frame>
  );
};
