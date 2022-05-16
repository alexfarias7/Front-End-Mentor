import "./styles.css";

import Primary from "./Primary";

import { useState } from "react";
import Secondary from "./Secondary";

const stages = [
  { id: 1, name: "primary" },
  { id: 2, name: "secondary" },
];

const Project2 = () => {
  const [Stage, setStage] = useState(stages[0].name);
  const [Number, setNumber] = useState(null);
  const [Erro, setErro] = useState(false);

  const changeStage = () => {
    if (Number === null) {
      setErro(true);
      return false;
    }
    setStage(stages[1].name);
  };

  return (
    <div className="Project">
      <div className="general">
        {Stage === "primary" && (
          <Primary
            changeStage={changeStage}
            changeValue={setNumber}
            Erro={Erro}
          />
        )}
        {Stage === "secondary" && <Secondary Number={Number} />}
      </div>
    </div>
  );
};

export default Project2;
