import s from "./HomeUser.module.css";
import phoneImg from "../../img/phone.png";
import contactImg from "../../img/phonebook.png";

const HomeUser = () => {
  return (
    <div className={s.container}>
      <h1 className={s.title}>Welcome Back!</h1>
      <p className={s.subtitle}>
        Enjoy the convenience of your personal phone book
      </p>

      <div className={s.images}>
        <img src={phoneImg} alt="Phone" className={s.phoneImage} />
        <img src={contactImg} alt="Contacts" className={s.contactImage} />
      </div>
    </div>
  );
};

export default HomeUser;
