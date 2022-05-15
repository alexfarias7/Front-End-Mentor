import styles from "./styles.module.css";
import star from "../assets/img/icon-star.svg";

const Primary = ({ changeStage }) => {
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

          <div className={styles.option}>
            <div className={styles.valueUser} tabIndex="1">
              1
            </div>
            <div className={styles.valueUser} tabIndex="2">
              2
            </div>
            <div className={styles.valueUser} tabIndex="3">
              3
            </div>
            <div className={styles.valueUser} tabIndex="4">
              4
            </div>
            <div className={styles.valueUser} tabIndex="5">
              5
            </div>
          </div>
          <button
            type="button"
            className={styles.btnSubmit}
            onClick={changeStage}
          >
            Submit
          </button>
        </div>

        <div className="errorMSG"></div>
      </div>
    </>
  );
};

export default Primary;
