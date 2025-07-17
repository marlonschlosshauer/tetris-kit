import { useTetris } from "@/provider/tetris";
import { FC, useEffect } from "react";

export const Tick: FC = () => {
  const { dispatch } = useTetris();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch({ type: "TICK" });
    }, 1000);
    return () => clearInterval(interval);
  }, [dispatch]);

  return null;
};
