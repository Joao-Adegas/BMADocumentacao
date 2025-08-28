import styles from './Overview.module.css';
import { useLanguage } from "./LanguageText";

export function Overview() {
    const { text, setLang } = useLanguage();

    return (
        <main>
            <section className={styles.containerMain}>
                <div className={styles.mainImg}>
                    <img src="/images/Logo.png" alt="Logo do B.M.A." />
                </div>

                <div className={styles.overviewText}>
                    <h2>{text("overviewTitle")}</h2>
                    <p>{text("overviewText")}</p>
                </div>

            </section>

            <section className={styles.containerCards}>
                <div className={styles.cardsBlue}>
                    <p>{text("card1")}</p>
                </div>

                <div className={styles.cards}>
                    <p>{text("card2")}</p>
                </div>

                <div className={styles.cards}>
                    <p>{text("card3")}</p>
                </div>

                <div className={styles.cardsBlue}>
                    <p>{text("card4")}</p>
                </div>
            </section>

            <section className={styles.containerAdvantages}>
                <div className={styles.advantagesImg}>
                    <img src="/images/icone.png" alt="Icone vermelho" />
                </div>

                <div className={styles.advantagesText}>
                    <h2>{text("advantagesTitle")}</h2>
                    <p>{text("advantagesText")}</p>
                </div>
            </section>

            <section className={styles.containerBench}>
                <img src="/images/Bancada.png" alt="Icone da bancada" />

                <div className={styles.benchText}>
                    <h2>{text("benchTitle")}</h2>
                    <p>{text("benchText")}</p>
                </div>
            </section>
        </main>
    )
}