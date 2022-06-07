import { createContext, useState } from "react";
import Content from "./components/Content";
import Header from "./components/Header";
import styles from "./styles.module.css";

import "lightgallery.js/dist/css/lightgallery.css";
import { LightgalleryProvider } from "react-lightgallery";

export const ContextQtd = createContext();

const Project4 = () => {
  const [Qtd, setQtd] = useState(0);
  const [zoom, setZoom] = useState(false);

  let qtdItem = Qtd 
  if (qtdItem <0) qtdItem=0

  return (
    <div className={`${styles.Project4} ${zoom ? styles.Visibility : ""}`}>
      <ContextQtd.Provider value={{qtdItem, setQtd}}>
        <Header />
        <LightgalleryProvider>
        <Content zoom={zoom} setZoom={setZoom}/>
        </LightgalleryProvider>
      </ContextQtd.Provider>
    </div>
  );
};

export default Project4;
