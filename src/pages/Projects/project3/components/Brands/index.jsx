import databiz from "../../images/client-databiz.svg";
import audiophile from "../../images/client-audiophile.svg";
import meet from "../../images/client-meet.svg";
import maker from "../../images/client-maker.svg";

import styles from './styles.module.css'

const Brands = () => {
  return (
    <div className={styles.Brands}>
      <img src={databiz} alt="databiz" />
      <img src={audiophile} alt="audiophile" />
      <img src={meet} alt="meet" />
      <img src={maker} alt="maker" />
    </div>
  );
};

export default Brands;
