import type { ButtonProps } from "../../types/ButtonProps";
import styles from "./styles.module.css";

export const Button: React.FC<ButtonProps> = ({ children, size = "md", isLoading = false, variant = "default", disabled, ...props }) => {
  return (
    <button
      className={variant === "default" ? styles["button"] : styles["button-outlined"]}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? "Carregando..." : children}
    </button>
  );
};