import { useEffect, useState } from "react";
import styles from "./styles.module.css";

const Msg = ({ Erro }) => {
  const [Visible, setVisible] = useState(null);

  useEffect(() => {
    if (Erro) {
      setVisible(true);

      const timer = setTimeout(() => {
        setVisible(false);
      }, 3000);

      return timer;
    }

    setVisible(false);
  }, [Erro]);

  return (
    <>
      {Visible && (
        <p className={styles.MsgError}>
          Please select a rating before clicking submit
        </p>
      )}
    </>
  );
};

export default Msg;
