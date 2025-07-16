import { FC } from "react";
import { Game } from "@/components/Game/Game";
import { Input } from "@/components/Input/Input";
import { Tick } from "@/components/Tick/Tick";
import {
  TetrisProvider,
  TetrisProps as TetrisProviderProps,
} from "@/provider/tetris";

export interface TetrisProps extends TetrisProviderProps {
  hasInput?: boolean;
  hasTick?: boolean;
}

export const Tetris: FC<TetrisProps> = ({
  hasInput = true,
  hasTick = true,
  ...props
}) => {
  return (
    <TetrisProvider {...props}>
      {hasInput && <Input />}
      {hasTick && <Tick />}
      <Game />
    </TetrisProvider>
  );
};
