import { useDispatch, useSelector } from "react-redux";

import s from "./ContactList.module.css";
import { ContactItem } from "../Contact/Contact";
import { useEffect } from "react";

import { selectFilteredContacts } from "../../redux/contacts/selectors.js";
import { fetchContacts } from "../../redux/contacts/operations.js";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul className={s.item}>
      {filteredContacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
