import styles from '../styles/header.module.css'
import Image from 'next/image'

export default function Header(){
    return (
        <div className={styles.container}>
            <div className={styles.child}>
            <Image className={styles.logoBosch}
                src={'/images/logoBoschSite.png'} 
                width={200}
                height={42}
                alt='Logo da Bosch'
            />
            </div>
        <div className={styles.child}>
            <Image className={styles.logoBrindes}
            src={'/images/logoBrindes.png'}
            width={255}
            height={50}
            alt='Logo do Site de Brindes'
            />
        </div>
        </div>
    )
}