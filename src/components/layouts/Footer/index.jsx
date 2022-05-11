import { useLocation } from "react-router-dom";

import * as Styled from "./style";

const Footer = () => {
  const { pathname } = useLocation();

  return (
    <>
      {["/", "/aboutme", "/contact"].includes(pathname) ? (
        <Styled.Footer>Footer</Styled.Footer>
      ) : null}
    </>
  );
};

export default Footer;
