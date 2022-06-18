import { createContext, useState } from "react";
import Content from "./components/Content";
import Header from "./components/Header";
import styles from "./styles.module.css";

import "lightgallery.js/dist/css/lightgallery.css";
import { LightgalleryProvider } from "react-lightgallery";

export const ContextData = createContext();

const Project4 = () => {
  const [Qtd, setQtd] = useState(0);
 

  let qtdItem = Qtd 
  if (qtdItem <0) qtdItem=0

  return (
    <div className={styles.Project4}>
      <ContextData.Provider value={{qtdItem, setQtd}}>
        <Header />
        <LightgalleryProvider>
        <Content/>
        </LightgalleryProvider>
      </ContextData.Provider>
    </div>
  );
};

export default Project4;
