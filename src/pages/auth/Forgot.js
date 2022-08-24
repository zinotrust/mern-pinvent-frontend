import styles from "./auth.module.scss";
import { Link } from "react-router-dom";
import Card from "../../components/card/Card";
import { AiOutlineMail } from "react-icons/ai";

const Forgot = () => {
  return (
    <section className={`container ${styles.auth}`}>
      <Card>
        <div className={styles.form}>
          <div className="--flex-center">
            <AiOutlineMail size={35} color="#999" />
          </div>
          <h2>Forgot Password</h2>

          <form>
            <input type="text" placeholder="Email" required />

            <button className="--btn --btn-primary --btn-block">
              Get Reset Email
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

export default Forgot;
