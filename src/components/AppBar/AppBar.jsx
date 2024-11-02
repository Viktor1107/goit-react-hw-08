import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Navigation } from "../Navigation/Navigation";
import s from "./AppBar.module.css";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={s.container}>
      <header className={s.header}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
    </div>
  );
};

export default AppBar;

//   const isLoggedIn = useSelector(selectIsLoggedIn);

//   return (
//     <div className={s.container}>
//       <header className={s.header}>
//         {isLoggedIn ? <UserPage /> : <Navigation />}
//       </header>
//     </div>
//   );
// };
