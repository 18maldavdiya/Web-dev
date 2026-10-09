import styles from './Butt.module.css';

const ButtonsCompo = () => {
    const buttons = ['C', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', '/', '='];
    return (
        <div className={styles.buttonsContainer}>
            {buttons.map(buttons => <button className={styles.button}>{buttons}</button>)}

        </div>
    )
}
export default ButtonsCompo;
