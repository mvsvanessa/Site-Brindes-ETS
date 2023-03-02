import styles from '../styles/infos.module.css'

export default function Infos (){
    return (
        <div className={styles.container}>
            <div className={styles.containerinner}>
            <p className={styles.titles}>GET IN TOUCH</p>
            <p className={styles.text}>We look forward to your inquiry!</p>
            <p className={styles.subtitle}>Telephone</p>
            <p className={styles.blue}>+55 19 2103 1560</p>
            <p className={styles.subtitle}>E-mail</p>
            <p className={styles.blue}>Henrique.Dona@br.bosch.com</p>
            </div>
        </div>
    )
}