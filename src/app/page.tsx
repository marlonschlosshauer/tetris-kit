"use client";

import { Game } from "@/components/Game/Game";
import styles from "./page.module.css";
import { Provider } from "@/lib/provider";
import { Input } from "@/components/Input/Input";
import { Beat } from "@/components/Beat/Beat";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Provider>
          <Input />
          <Beat />
          <Game />
        </Provider>
      </main>
    </div>
  );
}
