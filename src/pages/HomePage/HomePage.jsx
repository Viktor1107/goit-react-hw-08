import { NavLink } from "react-router-dom";
import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={s.container}>
      <h1 className={s.title}>Welcome to Your Personal Phone Book</h1>
      <p className={s.description}>
        Organize your contacts, find them quickly, and stay connected.
      </p>

      <div className={s.advantages}>
        <div className={s.advantage}>
          <h3>🕒 Quick Access</h3>
          <p>Find your contacts in seconds with our smart search feature.</p>
        </div>
        <div className={s.advantage}>
          <h3>🔒 Privacy</h3>
          <p>All your contacts are securely stored and protected.</p>
        </div>
        <div className={s.advantage}>
          <h3>📱 Cross-Platform</h3>
          <p>Access your contacts from any device, anytime, anywhere.</p>
        </div>
      </div>
      <NavLink to="/login" className={s.loginButton}>
        Click to Login
      </NavLink>
    </div>
  );
};

export default HomePage;
