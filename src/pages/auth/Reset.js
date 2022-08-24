import styles from "./auth.module.scss";
import { Link } from "react-router-dom";
import Card from "../../components/card/Card";
import { MdPassword } from "react-icons/md";

const Reset = () => {
  return (
    <section className={`container ${styles.auth}`}>
      <Card>
        <div className={styles.form}>
          <div className="--flex-center">
            <MdPassword size={35} color="#999" />
          </div>
          <h2>Reset Password</h2>

          <form>
            <input type="password" placeholder="New Password" required />
            <input
              type="password"
              placeholder="Confirm New Password"
              required
            />

            <button className="--btn --btn-primary --btn-block">
              Reset Password
            </button>
            <div className={styles.links}>
              <p>
                <Link to="/login">- Login</Link>
              </p>
              <p>
                <Link to="/register">- Register</Link>
              </p>
            </div>
          </form>
        </div>
      </Card>
    </section>
  );
};

export default Reset;
