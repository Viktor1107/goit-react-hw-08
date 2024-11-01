import ContactsForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import s from "./ContactPage.module.css";

const ContactPage = () => {
  return (
    <div className={s.wrap}>
      <ContactsForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default ContactPage;
