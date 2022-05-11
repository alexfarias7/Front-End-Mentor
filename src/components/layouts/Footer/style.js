import styled from "styled-components";

export const Footer = styled.footer`
  background-color: ${({ theme }) => theme.colors.tertiaryColor};
  height: 15vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
