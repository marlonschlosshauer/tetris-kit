import { FC, Fragment } from "react";
import { projectGhost } from "@/lib/projection";
import { Block } from "@/components/Block/Block";
import { useTetris } from "@/provider/tetris";

export const Ghost: FC = () => {
  const { active, playground, cells } = useTetris();

  if (!active || !playground) {
    return null;
  }

  const map = projectGhost(active, playground, cells);

  return (
    <Fragment>
      {map.flatMap((row) =>
        row.flatMap(
          (cell) =>
            cell.status === "ghost" && (
              <Block key={`ghost-${cell.x}-${cell.y}`} {...cell} />
            ),
        ),
      )}
    </Fragment>
  );
};
