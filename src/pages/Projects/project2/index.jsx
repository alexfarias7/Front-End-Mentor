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

  const changeStage = () => {
    setStage(stages[1].name);
  };
  

  return (
    <div className="Project">
      <div className="general">
        {Stage === "primary" && <Primary changeStage={changeStage} />}
        {Stage === "secondary" && <Secondary />}
      </div>
    </div>
  );
};

export default Project2;
