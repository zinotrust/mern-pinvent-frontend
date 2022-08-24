import styles from "./auth.module.scss";
import { TiUserAddOutline } from "react-icons/ti";
import Card from "../../components/card/Card";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <section className={`container ${styles.auth}`}>
      <Card>
        <div className={styles.form}>
          <div className="--flex-center">
            <TiUserAddOutline size={35} color="#999" />
          </div>
          <h2>Register</h2>

          <form>
            <input type="text" placeholder="Name" required />
            <input type="text" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <input type="password" placeholder="Confirm Password" required />
            <button className="--btn --btn-primary --btn-block">
              Register
            </button>
          </form>

          <span className={styles.register}>
            <p>Already an account? &nbsp;</p>
            <Link to="/login">Login</Link>
          </span>
        </div>
      </Card>
    </section>
  );
};

export default Register;
