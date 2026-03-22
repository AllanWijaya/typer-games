import GameMain from "@/core/components/main/GameMain";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* <main className={styles.main}>
       <div className={styles.intro}> */}
      <main>
        <GameMain />
      </main>
      {/* </div>
       </main> */}
    </div>
  );
}
