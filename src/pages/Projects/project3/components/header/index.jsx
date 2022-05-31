import styles from "./styles.module.css";

import logo from "../../images/logo.svg";
import Navbar from "../navbar";
import Button from "../Button";
import { useState } from "react";

const Header = () => {
  const [isACtive, setisActive] = useState(false);

  /*   useEffect(
    (e) => {
      const onclick = (e) => {
        if (e.current !== null && !e.current.contains(e.target)) {
          setisActive(!isACtive);
        }
      };
      if (isACtive) {
        window.addEventListener("click", onclick);
      }

      return () => {
        window.removeEventListener("click", onclick);
      };
    },
    [isACtive]
  ); */

  const menuDrop = () => {
    setisActive(!isACtive);
    console.log("ola mundo");
  };
  return (
    <>
      <header className={styles.Header}>
        <div className={styles.pages}>
          <a href="#project03">
            <img src={logo} alt="logo" />
          </a>
          <div className={isACtive ? styles.Nav : styles.drop}>
            <Navbar />
          </div>
        </div>

        <div className={isACtive ? styles.buttons : styles.dropButon}>
          <Button type="button">Login</Button>
          <Button type="button">Register</Button>
        </div>

        <div className={styles.btnMobile} onClick={menuDrop}>
          {!isACtive ? (
            <svg width="32" height="18" xmlns="http://www.w3.org/2000/svg">
              <g fill="#151515" fillRule="evenodd">
                <path d="M0 0h32v2H0zM0 8h32v2H0zM0 16h32v2H0z" />
              </g>
            </svg>
          ) : (
            <svg width="26" height="26" xmlns="http://www.w3.org/2000/svg">
              <g fill="#151515" fill-rule="evenodd">
                <path d="m2.393.98 22.628 22.628-1.414 1.414L.979 2.395z" />
                <path d="M.98 23.607 23.609.979l1.414 1.414L2.395 25.021z" />
              </g>
            </svg>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
