import styles from "./styles.module.css";

export default function NotFoundPage() {
  return (
    <main className={styles["main"]}>
      <h1 className={styles["title"]}>404</h1>

      <p className={styles["paragraph"]}>
        <span>Página não encontrada</span>
        <br />
        Volte para a página inicial e inicie a sua jornada novamente.
      </p>

      <button
        className={styles["button"]}
        title="RETORNAR PARA A PÁGINA INICIAL"  
      >
        RETORNAR PARA A PÁGINA INICIAL
      </button>
    </main>
  );
}