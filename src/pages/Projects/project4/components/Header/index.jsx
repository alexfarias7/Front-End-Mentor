import logo from "../../ecommerce-product-page-main/images/logo.svg";
import car from '../../ecommerce-product-page-main/images/icon-cart.svg'
import imgUser from '../../ecommerce-product-page-main/images/image-avatar.png'

import Navbar from "../Navbar";

import styles from "./styles.module.css";

const Header = () => {
  return (
    <header className={styles.Header}>
      <div className={styles.pages}>
        <a href="#project4">
          <img src={logo} alt="logo" />
        </a>
        <Navbar />
      </div>

      <div className={styles.user}>
          <div className={styles.car}>
            <img src={car} alt="car" />
          </div>

          <div className={styles.imgUser}>
            <img src={imgUser} alt="img user" />
          </div>
      </div>
    </header>
  );
};

export default Header;
