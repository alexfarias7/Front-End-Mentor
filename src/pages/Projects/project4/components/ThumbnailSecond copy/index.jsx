import { productsSecond } from "../../data/productsItems";

import styles from "./styles.module.css";

const ThumbnailSecondZomm = ({ zoom, setZoom }) => {
  return (
    <div className={`${styles.secondProduct} ${zoom ? styles.normal : ''}`}>
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

export default ThumbnailSecondZomm;
