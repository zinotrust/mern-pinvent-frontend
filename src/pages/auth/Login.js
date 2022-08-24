import React from "react";
import styles from "./auth.module.scss";
import { BiLogIn } from "react-icons/bi";
import { Link } from "react-router-dom";
import Card from "../../components/card/Card";

const Login = () => {
  return (
    <section className={`container ${styles.auth}`}>
      <Card>
        <div className={styles.form}>
          <div className="--flex-center">
            <BiLogIn size={35} color="#999" />
          </div>
          <h2>Login</h2>

          <form>
            <input type="text" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button className="--btn --btn-primary --btn-block">Login</button>
          </form>
          <Link to="/forgot">Forgot Password</Link>

          <span className={styles.register}>
            <p>Don't have an account? &nbsp;</p>
            <Link to="/register">Register</Link>
          </span>
        </div>
      </Card>
    </section>
  );
};

export default Login;
