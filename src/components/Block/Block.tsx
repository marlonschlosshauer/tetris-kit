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

  const classes =
    typeof classNames.cell === "string"
      ? { className: classNames.cell }
      : { classNames: classNames.cell };

  return (
    <Frame {...props}>
      <Cell {...props} {...classes} />
    </Frame>
  );
};
