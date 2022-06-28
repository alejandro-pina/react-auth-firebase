import React from "react";
import useAuthContext from "../../hook/useAuthContext";
import { NavLink } from "react-router-dom";
import { HOME, LOGIN, PRIVATE, PROFILE } from "../../config/routes/paths";
import styles from "./Navbar.module.css";
import logo from "./../../assets/images/logo.jpg";
import IconUser from "../Icons/IconUser";
import IconSignOutAlt from "../Icons/IconSignOutAlt";

const Navbar = () => {
  const { user, logout } = useAuthContext();
  const handleClickLogout = async () => await logout();

  return (
    <nav className={`${styles.navbar} container`}>
      <NavLink to={HOME}>
        <img src={logo} alt="" className={styles.navbar_logo} />
      </NavLink>

      {user ? (
        <>
          <div className={styles.navbar_links}>
            <NavLink
              to={PRIVATE}
              className={({ isActive }) =>
                isActive
                  ? `${styles.navbar_link} ${styles.navbar_link_active}`
                  : `${styles.navbar_link}`
              }
            >
              Private
            </NavLink>
            <NavLink
              to={PROFILE}
              className={({ isActive }) =>
                isActive
                  ? `${styles.navbar_link} ${styles.navbar_link_active}`
                  : `${styles.navbar_link}`
              }
            >
              Profile
            </NavLink>
          </div>
          <div className="navbar_buttons">
            <button
              onClick={handleClickLogout}
              className={`${styles.navbar_btn_icon} btn-icon`}
            >
              <IconSignOutAlt />
            </button>
          </div>
        </>
      ) : (
        <>
          <NavLink to={LOGIN}>
            <div className="navbar_buttons">
              <button className={`${styles.navbar_btn_icon} btn-icon`}>
                <IconUser />
              </button>
            </div>
          </NavLink>
        </>
      )}
    </nav>
  );
};

export default Navbar;
