import { useLocation } from "react-router-dom";

import * as Styled from "./styles";

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <>
      {["/", "/aboutme", "/contact"].includes(pathname) ? (
        <Styled.Navbar>
          <Styled.Brand to="/">HOME</Styled.Brand>

          <Styled.LinksLists>
            <Styled.NavActive to="/aboutme">About Me</Styled.NavActive>

            <Styled.NavActive to="/contact">Contact</Styled.NavActive>
          </Styled.LinksLists>
        </Styled.Navbar>
      ): null}
    </>
  );
};

export default Navbar;
