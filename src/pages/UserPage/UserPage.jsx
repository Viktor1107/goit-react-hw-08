// import { NavLink } from "react-router-dom";
// import { logout } from "../../redux/auth/operations";
// import { useDispatch, useSelector } from "react-redux";
// import s from "./UserPage.module.css";
// import { selectUser } from "../../redux/auth/selectors";

// const UserPage = () => {
//   const dispatch = useDispatch();

//   const user = useSelector(selectUser);

//   return (
//     <div className={s.container}>
//       <p className={s.username}>Welcome, {user.name}</p>
//       <div className={s.wrap}>
//         <NavLink
//           to="/user"
//           className={({ isActive }) => (isActive ? s.activeLink : s.link)}
//         >
//           Home
//         </NavLink>
//         <NavLink
//           to="/contacts"
//           className={({ isActive }) => (isActive ? s.activeLink : s.link)}
//         >
//           Contacts
//         </NavLink>
//         <button
//           type="button"
//           onClick={() => dispatch(logout())}
//           className={s.button}
//         >
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default UserPage;
