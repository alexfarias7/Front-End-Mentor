const { default: styled } = require("styled-components");

export const Container =styled.div`
min-height: 85vh;
margin-bottom: 2em;

`
export const Main = styled.div`
    background: ${({ theme }) => theme.colors.mainColor};

`