import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

export const Navigation = () => {
  return (
    <div className={s.container}>
      <nav className={s.nav}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? s.activeLink : s.link)}
        >
          Home
        </NavLink>
        {/* <NavLink
          to="/contacts"
          className={({ isActive }) => (isActive ? s.activeLink : s.link)}
        >
          Contacts
        </NavLink> */}
        {/* <NavLink
          to="/register"
          className={({ isActive }) => (isActive ? s.activeLink : s.link)}
        >
          Register
        </NavLink> */}
      </nav>
    </div>
  );
};
