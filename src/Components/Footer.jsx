import styles from './Footer.module.css';
import { useLanguage } from "./LanguageText";

export function Footer() {
    const { text, setLang } = useLanguage();

    return (
        <footer className={styles.footer}>
            <div className={styles.teamSection}>
                <h3>{text("team")}</h3>
                <p>Brenda Yohara, Leandro Hiramatsu, Adrian Lucas</p>
            </div>

            <div className={styles.logosSection}>
                <img src="/images/icones_rodape.png" alt="Logos" />
            </div>
        </footer>
    )
}