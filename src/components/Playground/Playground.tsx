import { FC, PropsWithChildren } from "react";
import styles from "./Playground.module.scss";
import { usePlayground } from "@/provider/playground";

export const Playground: FC<PropsWithChildren> = ({ children }) => {
  const playground = usePlayground();

  if (!playground) {
    return null;
  }

  const { rows, columns } = playground;

  if (!rows || !columns) {
    return null;
  }

  return (
    <section
      className={styles.wrapper}
      style={{
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
      }}
    >
      {children}
    </section>
  );
};
