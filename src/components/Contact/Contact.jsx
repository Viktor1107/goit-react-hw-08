import s from "./Contact.module.css";
import { FaUserTie } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/contactsOps";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    toast(
      (t) => (
        <div style={{ textAlign: "center" }}>
          <p>Are you sure you want to delete this contact?</p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              marginTop: "10px",
            }}
          >
            <button
              onClick={() => {
                dispatch(deleteContact(contact.id));
                toast.dismiss(t.id);
              }}
              style={{
                padding: "5px 10px",
                background: "red",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Yes
            </button>
            <button
              onClick={() => toast.dismiss(t.id)}
              style={{
                padding: "5px 10px",
                background: "gray",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              No
            </button>
          </div>
        </div>
      ),
      { duration: 5000 }
    );
  };

  return (
    <motion.li
      className={s.item}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50, transition: { duration: 1 } }}
      transition={{ duration: 1 }}
    >
      <div className={s.wrap}>
        <div className={s.span}>
          <p>
            <FaUserTie /> {contact.name}
          </p>
          <p>
            <FaPhone /> {contact.number}
          </p>
        </div>
        <button className={s.btn} onClick={handleDelete}>
          Delete
        </button>
      </div>
    </motion.li>
  );
};
