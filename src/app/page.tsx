import styles from "./page.module.css";
import { Tetris } from "@/components/Tetris/Tetris";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Tetris />
      </main>
    </div>
  );
}
