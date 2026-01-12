import { forwardRef } from "react";
import type { InputProps } from "../../types/InputProps";
import styles from "./styles.module.css";

export const InputField = forwardRef<HTMLInputElement, InputProps>(({ label, error, className, id, ...props }, ref) => {
  const inputId = id || crypto.randomUUID();

  return (
    <div className={styles["input-container"]}>
      {label && (
        <label htmlFor={inputId} className={styles["input-label"]}>
          {label}
        </label>
      )}

      <input
        id={inputId}
        ref={ref}
        className={styles["input"]}
        {...props}
      />

      {error && <span className={styles["input-error-text"]}>{error}</span>}
    </div>
  );
}
);

InputField.displayName = "InputField";