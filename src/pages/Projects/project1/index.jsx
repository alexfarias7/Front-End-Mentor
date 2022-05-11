import * as Styled from "./style";
import styles from "./styles.module.css"

import qrcode from "./images/image-qr-code.png";

const Project1 = () => {
 
    return (
      <div className={styles.main}>
        <div>
          <div className={styles.container}>
            <img className={styles.img} src={qrcode} alt="qr-code" />
  
            <h1>Improve your front-end skills by building projects</h1>
            <p>
              Scan the QR code to visit Frontend Mentor and take your coding
              skills to the next level
            </p>
          </div>
  
          <div className={styles.attribution}>
            Challenge by
            <a href="https://www.frontendmentor.io?ref=challenge">
              Frontend Mentor
            </a>
            . Coded by <a href="https://github.com/alexfarias7">Alex Farias</a>.
          </div>
        </div>
      </div>
  );
};

export default Project1;
