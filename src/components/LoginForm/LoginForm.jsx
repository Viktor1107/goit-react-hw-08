import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { login } from "../../redux/auth/operations";
import { Navigate, useNavigate } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import s from "./LoginForm.module.css";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const FormSchema = Yup.object().shape({
    email: Yup.string().nullable().email(),
    password: Yup.string()
      .min(6, "Too Short!")
      .max(12, "Too Long!")
      .required("Required"),
  });

  const handleSubmit = (values, options) => {
    dispatch(login(values));
    options.resetForm();
  };
  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div className={s.container}>
      <Formik
        initialValues={{ Email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={FormSchema}
      >
        <Form className={s.Form}>
          <label className={s.label} htmlFor="email">
            Email
          </label>
          <Field type="text" name="email" placeholder="email" />
          <ErrorMessage name="email" />
          <label className={s.label} htmlFor="password">
            Password
          </label>

          <Field type="password" name="password" placeholder="password" />
          <ErrorMessage name="password" />
          <button className={s.button} type="submit">
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
};
export default LoginForm;
