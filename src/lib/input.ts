import { useGame } from "@/provider/game";
import { useCallback, useEffect } from "react";

export const useInput = () => {
  const { dispatch } = useGame();

  const fn = useCallback(
    (e: KeyboardEvent) => {
      switch (e.key) {
        case "a":
        case "b":
        case "h":
        case "ArrowLeft":
          return dispatch({ type: "LEFT" });
        case "d":
        case "f":
        case "l":
        case "ArrowRight":
          return dispatch({ type: "RIGHT" });
        case "w":
        case "p":
        case "k":
        case "ArrowUp":
          return dispatch({ type: "ROTATE" });
        case "s":
        case "n":
        case "j":
        case "ArrowDown":
          return dispatch({ type: "DOWN" });
        case " ":
          return dispatch({ type: "DROP" });
      }
    },
    [dispatch],
  );

  useEffect(() => {
    window.addEventListener("keydown", fn);

    return () => window.removeEventListener("keydown", fn);
  }, [fn]);
};
