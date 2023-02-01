import React from "react";

import Logo from "../../Logo";
import Container from "../Container";
import Menus from "./Menus";

const Header = () => {
  return (
    <Container className="flex items-center justify-between">
      <Logo />
      <Menus />
    </Container>
  );
};

export default Header;
