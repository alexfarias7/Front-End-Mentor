import styles from "./styles.module.css";
import star from "../assets/img/icon-star.svg";

import OptionResult from "./OptionResult";
import Msg from "./OptionResult/Msg/Msg";

/* import { useLocation } from "react-router-dom";
 */
const Primary = ({ changeStage, changeValue, Erro }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.imgStar}>
            <img src={star} alt="icon-star" />
          </div>
          <h1 className={styles.titleMain}>How did we do?</h1>
          <p className={styles.description}>
            Please let us know how we did with your suport request. All feedback
            is appreciated to help us improve our offering!
          </p>

          <OptionResult changeValue={changeValue} />

          <button
            type="button"
            className={styles.btnSubmit}
            onClick={changeStage}
          
          >
            Submit
          </button>
        </div>
        <Msg  Erro={Erro} />
      </div>
    </>
  );
};

export default Primary;
