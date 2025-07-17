import { FC, Fragment } from "react";
import { projectCells } from "@/lib/projection";
import { Block } from "@/components/Block/Block";
import { useTetris } from "@/provider/tetris";

export const Blocks: FC = () => {
  const { cells, playground } = useTetris();

  if (!cells || !playground) {
    return null;
  }

  const map = projectCells(cells, playground);

  return (
    <Fragment>
      {cells.map(({ x, y }) => (
        <Block key={`${x}-${y}`} {...map?.[y]?.[x]} />
      ))}
    </Fragment>
  );
};
