import { FC } from "react";
import { Cell } from "@/types/game";
import { Frame } from "@/components/Frame/Frame";
import { useVisual } from "@/provider/visual";

export type BlockProps = Cell;

export const Block: FC<BlockProps> = (props) => {
  const { components, classNames } = useVisual();
  const { Cell } = components;

  if (!Cell) {
    return null;
  }

  return (
    <Frame {...props}>
      <Cell {...props} className={classNames?.cell} />
    </Frame>
  );
};
