import { FC, Fragment } from "react";
import { CellWrapper } from "@/components/CellWrapper/CellWrapper";
import { useVisual } from "@/provider/visual";
import { useGame } from "@/provider/game";

export const Background: FC = () => {
  const game = useGame();
  const { components } = useVisual();
  const { Cell } = components;

  if (!game || !Cell) {
    return null;
  }

  const { playground } = game;

  if (!playground) {
    return null;
  }

  const { rows, columns } = playground;

  if (!rows || !columns) {
    return null;
  }

  return (
    <Fragment>
      {Array.from({ length: rows }).map((_, y) =>
        Array.from({ length: columns }).map((_, x) => (
          <CellWrapper key={`${x}-${y}`} x={x} y={y} status="empty">
            <Cell />
          </CellWrapper>
        )),
      )}
    </Fragment>
  );
};
