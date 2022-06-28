import useAuthContext from "../../hook/useAuthContext";
import { useState } from "react";
import { validateEmail, validatePassword } from "../../helpers/Helpers";
import Layout from "../../components/Layouts/Layout";
import styles from "./Register.module.css";

const Register = () => {

  const { register } = useAuthContext();
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    let classMessage = "alert alert-fw alert-error";
    let message = "Error register";

    const formRegister = new FormData(e.currentTarget);
    let email = formRegister.get("email");
    let password = formRegister.get("password");

    if (!validateEmail(email)) return setMessage({ classMessage, message });
    if (validatePassword(password))
      return setMessage({ classMessage, message });

    let userRegister = await register({
      email: email,
      password: password,
    });
    if (userRegister) {
      classMessage = "alert alert-fw alert-ok";
      message = "Success";
    }
    setMessage({ classMessage, message });
  };

  return (

    <Layout>
      <section className="section-title section-center">
        <h1>Register</h1>
        <p>Simulate create new account.</p>
      </section>
      <section className={`${styles.form_register_container}`}>
        <form
          className={`${styles.form_register} form-default form-vertical`}
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
            Register
          </button>
          {message ? (
            <span className={message.classMessage}>{message.message}</span>
          ) : (
            ""
          )}
        </form>
      </section>
    </Layout>

  );

};
export default Register;
