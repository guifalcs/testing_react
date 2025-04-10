import styles from "./button.module.css";

export const Button = () => {
  return (
    <>
        <button className={styles.button} onClick={() => console.log('oi')}>Clique me</button>
    </>
  )
}
