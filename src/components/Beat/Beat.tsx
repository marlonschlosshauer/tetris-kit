import { useTetris } from "@/lib/provider";
import { FC, useEffect } from "react";

export const Beat: FC = () => {
  const { dispatch } = useTetris();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch({ type: "TICK" });
    }, 1000);
    return () => clearInterval(interval);
  }, [dispatch]);

  return null;
};
