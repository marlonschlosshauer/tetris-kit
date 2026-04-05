import { Tetris } from "tetris-kit";
import "tetris-kit/layout.css";
import styles from "./page.module.css";

export default function Home() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <Tetris />
            </main>
        </div>
    );
}
