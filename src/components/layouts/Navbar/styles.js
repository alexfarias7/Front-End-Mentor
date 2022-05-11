import { NavLink } from "react-router-dom";

import styled  from 'styled-components'
export const Navbar = styled.nav`
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.15) 0px -2px 10px 0px;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em 2em;
  height: 15vh;
  width: 100%;
  font-weight: 900;
  font-size: 1.2em;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.family.secondaryFont};
  background-color: ${({ theme }) => theme.colors.tertiaryColor};
  color: ${({ theme }) => theme.colors.white};



  & a {
    color: #fafafa;
  }
`;

export const Brand = styled(NavLink)`
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  text-decoration: none;
  border-radius: 30px;

  &.active {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.secondaryColor};
  }

  padding: 10px 20px;
`;

export const Active = styled.div`
 
`;

export const NavActive = styled(NavLink)`
  text-decoration: none;
  border-radius: 30px;
  margin: 1em 0.5em;
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  padding: 10px 20px;

  
  &.active {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.secondaryColor};
   
   
  }
  `;

export const LinksLists = styled.div`
  display: flex;
  flex-direction: row;
  list-style: none;
  border-radius: 30px;

  `;

