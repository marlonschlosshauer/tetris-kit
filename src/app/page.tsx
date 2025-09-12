import { Tetris } from "@/components/Tetris/Tetris";
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
