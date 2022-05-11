import styled from "styled-components";

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
`;

export const attribution = styled.div`
  font-size: 11px;
  & a {
    color: hsl(228, 45%, 44%);
  }
`;

export const Container = styled.div`
  background-color: hsl(0, 0%, 100%);
  padding: 1.25rem;
  border-radius: 0.625rem;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25);
  padding: 1rem;
  margin: 10vh auto;
  margin-bottom: 1rem;
  max-width: 300px;

  & p {
    color: hsl(220, 15%, 55%);
    font-weight: 400;
  }

  & h1 {
    color: hsl(218, 44%, 22%);
    font-size: 15px;
    font-weight: 700;
    margin-bottom: 1rem;
  }
`;
export const Img = styled.img`
  width: 100%;
  height: auto;
  border-radius: 0.625rem;
  margin-bottom: 1rem;
`;
