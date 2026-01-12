import { useState, type FormEvent } from "react";
import { InputField } from "../../../components/InputField";
import styles from "./styles.module.css";

import Ilustration from "../../../assets/cat-login.png";
import IlustrationTwo from "../../../assets/cat-login-no-view.png";

export default function LoginPage() {
  const [isPasswordFocused, setPasswordFocused] = useState<boolean>(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    alert("Submited!");
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
          />

          <InputField
            label="Password"
            placeholder="• • • • • • • • • • • • • • • •"
            style={{ marginBottom: "40px" }}
            type="password"
            onFocus={() => setPasswordFocused(true)}
            onBlur={() => setPasswordFocused(false)}
          />
        </form>
      </section>

      <section className={styles["right-side"]}>
        <h2 className={styles["right-side-title"]}>
          Authentication
        </h2>

        <h3 className={styles["right-side-subtitle"]}>
          Welcome stranger, please identify yoursef to continue
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