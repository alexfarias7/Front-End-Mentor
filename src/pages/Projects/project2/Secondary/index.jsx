import styles from './styles.module.css'

import thanks from "../assets/img/illustration-thank-you.svg";


const Secondary = ({Number}) => {
  return (
    <>
      <div className={styles.divSecondary}>
        <div className={styles.ContainerSecondary}>
          <img src={thanks} alt="thanks" />
          <p className={styles.msgResult}>
            You selected <span className={styles.score}>{Number} </span> out of 5
          </p>
          <h1>Thank you!</h1>
          <p className={styles.thanks}>
            We appreciate you taking the time to give a rating. If you ever need
            more suport, don't hesitate to get in touch!
          </p>
        </div>
      </div>
    </>
  );
};

export default Secondary;
