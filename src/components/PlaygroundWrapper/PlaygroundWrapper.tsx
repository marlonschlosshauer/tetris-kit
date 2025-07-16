import { useGame } from "@/provider/game";
import { PlaygroundProvider } from "@/provider/playground";
import { FC, PropsWithChildren } from "react";

export const PlaygroundWrapper: FC<PropsWithChildren> = ({ children }) => {
  const { playground } = useGame();
  return <PlaygroundProvider {...playground}>{children}</PlaygroundProvider>;
};
