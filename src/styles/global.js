import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0;
  inset: 0;
  padding: 0;
}

html{
  background: ${({ theme }) => theme.colors.mainColor};font-family: ${({theme}) => theme.fonts.family.mainFont}; 

}

`;
