import styles from "./styles.module.css";
import imgMain from "../../images/image-hero-desktop.png";
import imgMobile from '../../images/image-hero-mobile.png'
import Brands from "../Brands";

const Container = () => {
  return (
      <>
    <div className={styles.Container}>
      <div className={styles.texts}>
        <div className={styles.info}>
          <h1>
            Make<br></br>
            remote work
          </h1>
          <p>
            {" "}
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button className={styles.btn} type="button">
            Learn more
          </button>
        </div>
        <Brands />
      </div>

      <div className={styles.img}>
        <img src={imgMain} alt="hero" />
      </div>
    </div>

    <div className={styles.mobile}>
            <div className={styles.imgMobile}>
                <img src={imgMobile} alt="hero mobile" />
            </div>

               <h1>Make remote work</h1>
               <p> Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch productivity soar.</p>
              <button className={styles.btn} type='button'>Learn more</button>
              <div className={styles.brands}>
              <Brands />
              </div>
           </div>
      </>
  );
};

export default Container;
