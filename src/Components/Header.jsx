import styles from "./Header.module.css";
import { useLanguage } from "./LanguageText";

export function Header() {
  const { text, setLang } = useLanguage();

  return (
    <header className={styles.header}>
      <h1>{text("title")}</h1>
      <p>{text("subtitle")}</p>

      <button onClick={() => setLang("pt")}>🇧🇷 PT</button>
      <button onClick={() => setLang("en")}>🇺🇸 EN</button>
    </header>
  );
}
