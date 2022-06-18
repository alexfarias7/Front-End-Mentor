import * as Styled from "./styles";
import { Link } from "react-router-dom";

const CardProject = ({ title, description, img, id }) => {
 
  return (
    <Styled.Card>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{img}</p>
   
      <Link to={`/projects/0${id}`}> 
      detalhes</Link>
    </Styled.Card>
  );
};




export default CardProject;
