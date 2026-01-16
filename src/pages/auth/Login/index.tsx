import { useState, type FormEvent } from "react";
import { InputField } from "../../../components/InputField";
import styles from "./styles.module.css";

import Ilustration from "../../../assets/cat-login.png";
import IlustrationTwo from "../../../assets/cat-login-no-view.png";

import { Button } from "../../../components/Button";
import { authLogin } from "../../../services/AuthService";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [isPasswordFocused, setPasswordFocused] = useState<boolean>(false);
  const [Email, setEmail] = useState<string>("");
  const [Password, setPassword] = useState<string>("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    authLogin(Email, Password);
  }

  return (
    <main className={styles["main"]}>
      <section className={styles["login-form"]}>
        <form onSubmit={onSubmit}>
          <h1 className={styles["login-form-title"]}>
            Login
          </h1>

          <h2 className={styles["login-form-subtitle"]}>
            Enter your information to continue
          </h2>

          <InputField
            label="Email"
            placeholder="Ex: name@email.com"
            style={{ marginBottom: "20px" }}
            type="email"
            value={Email}
            onChange={event => setEmail(event.target.value)}
            required
          />

          <InputField
            label="Password"
            placeholder="• • • • • • • • • • • • • • • •"
            style={{ marginBottom: "30px" }}
            type="password"
            onFocus={() => setPasswordFocused(true)}
            onBlur={() => setPasswordFocused(false)}
            value={Password}
            onChange={event => setPassword(event.target.value)}
            required
          />

          <Button title="LOGIN NOW" style={{ marginBottom: "20px" }}>
            Login Now
          </Button>
        </form>
        
        <Link to="/auth/register">
          <Button title="SIGNUP NOW" variant="outlined">
            Register Now
          </Button>
        </Link>
      </section>

      <section className={styles["right-side"]}>
        <h2 className={styles["right-side-title"]}>
          Authentication
        </h2>

        <h3 className={styles["right-side-subtitle"]}>
          Welcome stranger, please identify yourself to continue
        </h3>

        <img
          src={isPasswordFocused ? IlustrationTwo : Ilustration}
          className={styles["ilustration"]}
          alt="Orange cat login ilustration"
        />
      </section>
    </main>
  );
}