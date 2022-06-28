import useAuthContext from "../../hook/useAuthContext";
import { useState } from "react";
import { Link } from "react-router-dom";
import { REGISTER } from "../../config/routes/paths";
import { validatePassword, validateEmail } from "../../helpers/Helpers";
import Layout from "../../components/Layouts/Layout";
import styles from "./Login.module.css";

const Login = () => {

  const { login } = useAuthContext();
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    let classMessage = "alert alert-fw alert-error";
    let message = "Error login";

    const data = new FormData(e.currentTarget);
    let email = data.get("email");
    let password = data.get("password");

    if (!validateEmail(email)) return setMessage({ classMessage, message });
    if (validatePassword(password))
      return setMessage({ classMessage, message });

    let userLogin = await login({
      email: email,
      password: password,
    });
    if (userLogin) {
      classMessage = "alert alert-fw alert-ok";
      message = "Success";
    }
    setMessage({ classMessage, message });
  };

  return (

    <Layout>
      <section className="section-title section-center">
        <h1>Login</h1>
        <p>Example login. Dont have validation.</p>
      </section>
      <section className={`${styles.form_login_container}`}>
        <form
          className={`${styles.form_login} form-default form-vertical`}
          onSubmit={handleSubmit}
        >
          <label>
            <input
              type="text"
              className="inpt-primary"
              placeholder="Email"
              name="email"
            />
          </label>
          <label>
            <input
              type="password"
              className="inpt-primary"
              placeholder="Password"
              name="password"
            />
          </label>
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
          {message ? (
            <span className={message.classMessage}>{message.message}</span>
          ) : (
            ""
          )}
        </form>
        <p className={styles.link_user}>
          New to APP?
          <Link to={REGISTER}> Create new account</Link>.
        </p>
      </section>
    </Layout>

  );
};

export default Login;
