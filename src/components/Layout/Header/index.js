import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Logo from "../../Logo";
import Container from "../Container";
import AuthMenus from "./AuthMenus";
import Menus from "./Menus";

import { LOCAL_STORAGE } from "../../../utils/constants/siteSettings";
import { storeUser } from "../../../store/common/User/actions";

const Header = ({ showHeaderMenus = true }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    const auth = localStorage.getItem(LOCAL_STORAGE.AUTH_USER);
    if (auth) {
      dispatch(storeUser(JSON.parse(auth)));
    }
  }, []);

  return (
    <Container className="flex items-center justify-between">
      <Logo />
      {showHeaderMenus && (user ? <AuthMenus /> : <Menus />)}
    </Container>
  );
};

export default Header;
