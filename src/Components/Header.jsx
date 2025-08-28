import styles from "./Header.module.css";
import { useLanguage } from "./LanguageText";

export function Header() {
  const { text, setLang, lang } = useLanguage();

  return (
    <header className={styles.header}>
      <h1>{text("title")}</h1>
      <p>{text("subtitle")}</p>

      <div className={styles.botaoTraducao}>
        <button className={`${styles.botaoPortugues} ${lang === "pt" ? styles.ativo : ""}`} onClick={() => setLang("pt")}>PT 🇧🇷</button>
        <button className={`${styles.botaoIngles} ${lang === "en" ? styles.ativo : ""}`} onClick={() => setLang("en")}>EN 🇺🇸</button>
      </div>
    </header>
  );
}
