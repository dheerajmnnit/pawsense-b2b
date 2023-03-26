import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import AccountIcon from "../../../assets/img/account.png";
import { logOutAction } from "../../../store/common/User/actions";
import { LOCAL_STORAGE } from "../../../utils/constants/siteSettings";

const AuthMenus = () => {
  return (
    <ul className="flex items-center justify-end gap-5 text-2xl text-primary">
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li>
        <Link to="/calender">Calender</Link>
      </li>
      <li>
        <UserMenuDropdown />
      </li>
    </ul>
  );
};

export default AuthMenus;

const UserMenuDropdown = () => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="relative">
      <button
        className="w-10 h-10 cursor-pointer"
        onClick={() => setShowUserMenu(!showUserMenu)}
      >
        <img className="w-10 h-10" src={AccountIcon} alt="Account Icon" />
      </button>

      {showUserMenu && (
        <ul className="absolute top-12 right-0 w-40 overflow-hidden bg-white rounded-lg">
          <li
            className="text-xl px-4 py-2 cursor-pointer hover:bg-secondary hover:text-white border-b border-primary"
            onClick={() => {
              setShowUserMenu(false);
              navigate("/my-profile");
            }}
          >
            My Profile
          </li>
          <li
            className="text-xl px-4 py-2 cursor-pointer hover:bg-secondary hover:text-white"
            onClick={() => {
              setShowUserMenu(false);
              dispatch(logOutAction());
              localStorage.removeItem(LOCAL_STORAGE.AUTH_USER);
              navigate("/");
            }}
          >
            Logout
          </li>
        </ul>
      )}
    </div>
  );
};
