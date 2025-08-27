import styles from './Overview.module.css';

export function Overview() {
    return (
        <main>
            <section className={styles.containerMain}>
                <div>
                    <img src="public/Logo.png" alt="Logo do B.M.A." />
                </div>

                <div className={styles.overviewText}>
                    <h2>Overview</h2>
                    <p>B.M.A, the Mechatronics Learning Bench, came from the need of the ETS to have an integrated mechatronic environment in one place, in order to create a learning platform that was educational and practical.</p>
                </div>

            </section>

            <section className={styles.containerCards}>
                <div className={styles.cardsBlue}>
                    <p>Integrated environment</p>
                </div>

                <div className={styles.cards}>
                    <p>Learning Platform</p>
                </div>

                <div className={styles.cardsBlue}>
                    <p>complete training</p>
                </div>

                <div className={styles.cards}>
                    <p>Adaptable system</p>
                </div>
            </section>

            <section className={styles.containerAdvantages}>
                <div>
                    <img src="public/icone.png" alt="" />
                </div>

                <div className={styles.advantagesText}>
                    <h2>Advantages</h2>
                    <p>Our bench, being modular and relatively simple, <b>has enormous adaptability</b>, and can be molded for the most diverse exercises, which facilitates the fulfillment of simple activities to the most complex and difficult demands, whether they are for beginner students or already trained professionals.</p>
                </div>
            </section>
        </main>
    )
}