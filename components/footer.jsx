import styles from '../styles/footer.module.css'
import Image from 'next/image'

export default function Footer(){
    return (
        <>
            <div className={styles.container}>
                <Image className={styles.ets}
                    src={'/images/logoEts.png'}
                    width={145}
                    height={88}
                    alt='Logo da ETS'
                    />
                <div className={styles.child}>
                    <p className={styles.text}>
                    Creating stories and shaping the future of our apprentices and employees since 1960.
                    Always looking to offer the best. Get to know more about us.
                    </p>
                </div>
                <div className={styles.child}>
                    <p className={styles.text}>
                    The ultimate new collaboration between Cap/ETS and GS/TET-LA shaping the digital talents of our generation.
                    Get to know more about the program.
                    </p>
                </div>
            <Image className={styles.dta}
                src={'/images/logoDta.png'}
                width={160}
                height={75}
                alt='Logo da DTA'
                />
            </div>
            <div className={styles.rodape}>
                    <p>©ROBERT BOSCH LTDA 2023 ALL RIGHTS RESERVED</p>
                    <p>CONTACT</p>
                    <p>CORPORATE INFORMATION</p>
                    <p>LEGAL NOTICE</p>
                    <p>DATA PROTECTION NOTICE</p>
                    
            </div>
        </>
    )
}