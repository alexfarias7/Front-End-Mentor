import CardProject from "../CardProject";

import * as Styled from "./styles";

import { datas } from "data/db";
/* import { useFetch } from "hooks/useFetch"; */

const ContainerHome = () => {
/*   const url = "http://localhost:3000/datas";

   const { data: items, loading, error } = useFetch(url);
  */
  return (
    <Styled.Container>
    {/*   {loading && <p>LOADING...</p>}
      {error && <p>{error}</p>} */}

      {
        datas.map((data) => (
            <CardProject
              title={data.title}
              key={data.IdProject}
              description={data.description}
              img={data.img}
             id={data.IdProject}
            />
         
        ))}
    </Styled.Container>
  );
};

export default ContainerHome;
