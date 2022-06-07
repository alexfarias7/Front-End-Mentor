import { productsSecond } from "../../data/productsItems";

import styles from "./styles.module.css";

const ThumbnailSecond = ({ zoom, setZoom }) => {
  return (
    <div className={styles.secondProduct}>
      {productsSecond.map((products) => (
        <div key={products.id}>
          <img
            src={products.productSecond}
            alt={products.id}
            tabIndex={products.id}
            onClick={setZoom}
            className={zoom ? styles.overshadow : ""}
          />
        </div>
      ))}
    </div>
  );
};

export default ThumbnailSecond;
