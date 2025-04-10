import styles from "./teste.module.css";
import { Button } from "./button";

export const Teste = () => {
  return (
    <>
      <div className={styles.card}>
        <h1>Card</h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam illum
          doloremque ducimus autem ad molestiae error atque saepe,
          exercitationem laboriosam asperiores, consequatur quisquam alias
          dolorem, vel aspernatur perferendis odit obcaecati?
        </p>
        <Button />
      </div>
    </>
  );
};
