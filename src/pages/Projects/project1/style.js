import styled from "styled-components";


:root {
    --white: hsl(0, 0%, 100%);
    --light_gray: hsl(212, 45%, 89%);
    --grayish_blue: hsl(220, 15%, 55%);
    --dark_blue: hsl(218, 44%, 22%);
    --footer_blue: hsl(228, 45%, 44%);
  }
 
  export const Main = styled.div`
  background-color: hsl(212, 45%, 89%);
  font-family: "Outfit", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  text-align: center;
  margin-bottom: 10px;
  font-size: 15px;
  `
  
  
  .attribution {
    font-size: 11px;
  }
  .attribution a {
    color: var(--footer_blue);
  }
  
  .container {
    background-color: var(--white);
    padding: 1.25rem;
    border-radius: 0.625rem;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25);
    padding: 1rem;
    margin: 10vh auto;
    margin-bottom: 1rem;
    max-width: 300px;
  }
  .container p {
    color: var(--grayish_blue);
    font-weight: 400;
  }
  
  .container h1 {
    color: var(--dark_blue);
    font-size: 15px;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  
  img {
    width: 100%;
    height: auto;
    border-radius: 0.625rem;
    margin-bottom: 1rem;
  }