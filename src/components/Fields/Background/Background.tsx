import { FC, Fragment } from "react";
import { Block } from "@/components/Block/Block";
import { useTetris } from "@/provider/tetris";

export const Background: FC = () => {
  const { playground } = useTetris();

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
          <Block key={`${x}-${y}`} x={x} y={y} status="empty" />
        )),
      )}
    </Fragment>
  );
};
