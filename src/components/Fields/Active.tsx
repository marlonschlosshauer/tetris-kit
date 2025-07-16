import { FC, Fragment } from "react";
import { projectActive } from "@/lib/projection";
import { CellWrapper } from "@/components/CellWrapper/CellWrapper";
import { useVisual } from "@/provider/visual";
import { useGame } from "@/provider/game";

export const Active: FC = () => {
  const { active, playground } = useGame();
  const { components } = useVisual();
  const { Cell } = components;

  if (!Cell) {
    return null;
  }

  if (!active || !playground) {
    return null;
  }

  const map = projectActive(active, playground);

  return (
    <Fragment>
      {map.flatMap((row) =>
        row.flatMap((cell) => (
          <CellWrapper key={`${cell.x}-${cell.y}`} {...cell}>
            <Cell />
          </CellWrapper>
        )),
      )}
    </Fragment>
  );
};
