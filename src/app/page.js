
import styles from "./page.module.css";
import Timer from "./components/Timer"

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
      <Timer/>
      </main>
      <footer className= {styles.footer}>
      </footer>
    </div>
  );
}
