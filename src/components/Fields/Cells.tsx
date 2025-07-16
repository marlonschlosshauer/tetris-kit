import { FC, Fragment } from "react";
import { projectCells } from "@/lib/projection";
import { CellWrapper } from "@/components/CellWrapper/CellWrapper";
import { useVisual } from "@/provider/visual";
import { useGame } from "@/provider/game";

export const Cells: FC = () => {
  const { cells, playground } = useGame();
  const { components } = useVisual();
  const { Cell } = components;

  if (!Cell) {
    return null;
  }

  if (!cells || !playground) {
    return null;
  }

  const map = projectCells(cells, playground);

  return (
    <Fragment>
      {cells.map(({ x, y }) => (
        <CellWrapper key={`${x}-${y}`} {...map?.[y]?.[x]}>
          <Cell />
        </CellWrapper>
      ))}
    </Fragment>
  );
};
