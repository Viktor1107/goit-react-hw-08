import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Navigation } from "../Navigation/Navigation";
import s from "./AppBar.module.css";
import UserPage from "../../pages/UserPage/UserPage";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={s.container}>
      <header className={s.header}>
        {isLoggedIn ? <UserPage /> : <Navigation />}
      </header>
    </div>
  );
};

export default AppBar;
