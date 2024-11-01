import { Link } from "react-router-dom";
import s from "./NotFoundPage.module.css";

function NotFoundPage() {
  return (
    <div className={s.container}>
      <p>404 - Page Not Found</p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
}

export default NotFoundPage;