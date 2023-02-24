import styles from '../styles/popup.module.css'
import 'reactjs-popup/dist/index.css';

export default function Popup(props){
    return(props.trigger) ? (
        <div className={styles.popup}>
            <div className={styles.popupinner}>
                <button 
                    className={styles.closebtn}
                    onClick={() => props.setTrigger(false)}
                >
                    close
                </button>
                Meu popUp
            </div>
        </div>
    ) : ""
}