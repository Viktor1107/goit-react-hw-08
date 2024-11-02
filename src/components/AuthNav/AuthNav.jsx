import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <div className={s.container}>
      <nav className={s.nav}>
        <NavLink
          to="/login"
          className={({ isActive }) => (isActive ? s.activeLink : s.link)}
        >
          Login
        </NavLink>
        <NavLink
          to="/register"
          className={({ isActive }) => (isActive ? s.activeLink : s.link)}
        >
          Register
        </NavLink>
      </nav>
    </div>
  );
};

export default AuthNav;
