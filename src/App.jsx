import "./App.css";
import { Layout } from "./components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, lazy, Suspense, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { refreshUser } from "./redux/auth/operations";
import { selectIsLoggedIn, selectIsRefreshing } from "./redux/auth/selectors";
import PrivateRoute from "./components/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute";
import { Toaster } from "react-hot-toast";

const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const RegisterPage = lazy(() =>
  import("./pages/RegisterPage/RegisterPage.jsx")
);
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage.jsx"));
const NotFoundPage = lazy(() =>
  import("./pages/NotFoundPage/NotFoundPage.jsx")
);
const HomeUser = lazy(() => import("./pages/HomeUser/HomeUser.jsx"));
const ContactPage = lazy(() => import("./pages/ContactPage/ContactPage.jsx"));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    dispatch(refreshUser()).then(() => setIsFirstLoad(false));
  }, [dispatch]);

  useEffect(() => {
    if (!isRefreshing && isLoggedIn && isFirstLoad) {
      navigate("/user");
    }
  }, [isRefreshing, isLoggedIn, isFirstLoad, navigate]);

  if (isRefreshing) {
    return <p>Loading....</p>;
  }

  return (
    <Layout>
      <Toaster position="top-right" />
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/contacts"
            element={
              <PrivateRoute component={<ContactPage />} redirectTo="/" />
            }
          />
          <Route
            path="/user"
            element={
              <PrivateRoute component={<HomeUser />} redirectTo="/login" />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute component={<LoginPage />} redirectTo="/user" />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={<RegisterPage />}
                redirectTo="/user"
              />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};
