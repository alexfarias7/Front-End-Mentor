import { useState } from "react";

import Thumbnail from "../Thumbnail";
import ThumbnailSecond from "../ThumbnailSecond";


import styles from "./styles.module.css";

import ImgMain from "../../ecommerce-product-page-main/images/image-product-1.jpg";
import close from "../../ecommerce-product-page-main/images/icon-close.svg";

import Info from "../Info";
import { InfoProduct } from "../../data/productsItems";

const Content = ({ zoom, setZoom }) => {
  const [productId, setProductId] = useState(1);

  return (
    <main>
      <div className={styles.imgs}>
        <div className={styles.imgMain}>
          <img src={ImgMain} alt="img main" />
        </div>
        <ThumbnailSecond setZoom={() => setZoom(true)} zoom={zoom} />
      </div>

      {zoom && (
        <div className={`${styles.zoom} ${styles.lbox}`}>
        
            <img src={close} alt="close" onClick={() => setZoom(false)} />
            <Thumbnail />
            <ThumbnailSecond />
      
        </div>
      )}
      <Info
        title={InfoProduct.title}
        content={InfoProduct.content}
        midPrice={InfoProduct.midPrice}
        price={InfoProduct.price}
        descont={InfoProduct.descont}
        brange={InfoProduct.brange}
      />
    </main>
  );
};

export default Content;
