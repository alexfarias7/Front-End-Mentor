import add from "../../ecommerce-product-page-main/images/icon-plus.svg";
import sub from "../../ecommerce-product-page-main/images/icon-minus.svg";
import cart from "../../ecommerce-product-page-main/images/icon-cart-2.svg";

import styles from "./styles.module.css";
import { useContext } from "react";
import { ContextData } from "../..";

const Info = ({ title, content, midPrice, price, descont, brange }) => {
  const { qtdItem } = useContext(ContextData);
  const { setQtd } = useContext(ContextData);

  return (
    <div className={styles.Info}>
      <h1>{brange}</h1>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>
        <span className={styles.midPrice}>${midPrice}</span>{" "}
        <span className={styles.descont}>{descont}</span>
      </p>
      <p>
        <span>${price}</span>
      </p>

      <div className={styles.buttons}>
        <div className={styles.ItemsCart}>
          <button type="button" onClick={() => setQtd(qtdItem + 1)}>
            <img src={add} alt="add" />
          </button>
          <span>{qtdItem}</span>
          <button onClick={() => setQtd(qtdItem - 1)}>
            <img src={sub} alt="sub" />
          </button>
        </div>

        <button className={styles.cart} type="button">
          <img src={cart} alt="cart" />    add to cart
        </button>
      </div>
    </div>
  );
};

export default Info;
