import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/selectors.js";
import s from "./ContactList.module.css";
import { ContactItem } from "../Contact/Contact";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={s.item}>
      {filteredContacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
