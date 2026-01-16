import { useState, type FormEvent } from "react";
import styles from "./styles.module.css";

import { InputField } from "../../../components/InputField";
import { Button } from "../../../components/Button";

import Ilustration from "../../../assets/cat-login.png";
import IlustrationTwo from "../../../assets/cat-login-no-view.png";
import { AlertController } from "../../../controllers/AlertController";
import { Link } from "react-router-dom";
import { authRegister } from "../../../services/AuthService";

export default function RegisterPage() {
  const [Name, setName] = useState<string>("");
  const [Email, setEmail] = useState<string>("");
  const [Password, setPassword] = useState<string>("");
  const [ConfirmPassword, setConfirmPassword] = useState<string>("");
  const [isPasswordFocused, setPasswordFocused] = useState<boolean>(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const alert = new AlertController();

    if (Password !== ConfirmPassword) {
      alert.show("The passwords don't match, please check and try again.", "error", 3000);
    } else {
      authRegister(Name, Email, Password);
    }
  }

  return (
    <main className={styles["main"]}>
      <section className={styles["register-form"]}>
        <form onSubmit={onSubmit}>
          <h1 className={styles["register-form-title"]}>
            Register
          </h1>

          <h2 className={styles["register-form-subtitle"]}>
            Enter your information to continue
          </h2>

          <InputField
            label="Name"
            placeholder="Ex: John Travolta"
            style={{ marginBottom: "20px" }}
            value={Name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <InputField
            label="Email"
            placeholder="Ex: name@email.com"
            style={{ marginBottom: "20px" }}
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
          />

          <InputField
            label="Password"
            placeholder="• • • • • • • • • • • • • • • •"
            style={{ marginBottom: "20px" }}
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            onFocus={() => setPasswordFocused(true)}
            onBlur={() => setPasswordFocused(false)}
            required
          />

          <InputField
            label="Confirm Password"
            placeholder="• • • • • • • • • • • • • • • •"
            style={{ marginBottom: "30px" }}
            value={ConfirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            onFocus={() => setPasswordFocused(true)}
            onBlur={() => setPasswordFocused(false)}
            required
          />

          <Button title="REGISTER NOW" style={{ marginBottom: "20px" }} type="submit">
            Register Now
          </Button>
        </form>

        <Link to="/auth/login">
          <Button title="LOGIN NOW" variant="outlined">
            Login Now
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