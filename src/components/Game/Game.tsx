"use client";

import { FC } from "react";

import { Fields } from "@/components/Fields/Fields";
import { useTetris } from "@/provider/tetris";

export const Game: FC = () => {
  const { playground, components, classNames } = useTetris();
  const { Playground } = components;

  if (!Playground) {
    return null;
  }

  return (
    <Playground {...playground} className={classNames?.playground}>
      <Fields />
    </Playground>
  );
};
