import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import s from "./RegistrationForm.module.css";
import { register } from "../../redux/auth/operations";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const FormSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().nullable().email(),
    password: Yup.string()
      .min(6, "Too Short!")
      .max(12, "Too Long!")
      .required("Required"),
  });

  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(register(values));
    options.resetForm();
  };

  return (
    <div className={s.container}>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={FormSchema}
      >
        <Form className={s.Form}>
          <label className={s.label} htmlFor="name">
            Username
          </label>
          <Field type="text" name="name" placeholder="name" />
          <ErrorMessage name="name" />

          <label className={s.label} htmlFor="email">
            Email
          </label>
          <Field type="email" name="email" placeholder="email" />
          <ErrorMessage name="email" />

          <label className={s.label} htmlFor="password">
            Password
          </label>
          <Field type="password" name="password" placeholder="password" />
          <ErrorMessage name="password" />
          <button className={s.button} type="submit">
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
