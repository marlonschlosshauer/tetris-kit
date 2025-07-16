import { useGame } from "@/provider/game";
import { FC, useEffect } from "react";

export const Tick: FC = () => {
  const { dispatch } = useGame();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch({ type: "TICK" });
    }, 1000);
    return () => clearInterval(interval);
  }, [dispatch]);

  return null;
};
