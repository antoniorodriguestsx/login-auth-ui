import styles from "./styles.module.css";
import type { AlertProps } from "../../types/AlertProps";

import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { BiSolidMessageSquareError } from "react-icons/bi";
import { IoIosWarning } from "react-icons/io";
import { FaInfoCircle } from "react-icons/fa";

export default function Alert({ text, type }: AlertProps) {
  return (
    <div className={styles["container"]} style={{ borderColor: `var(--color-alert-${type})`, color: `var(--color-alert-${type})` }}>
      {type === "error" && <BiSolidMessageSquareError className={styles["icon"]} />}
      {type === "success" && <IoCheckmarkDoneCircle className={styles["icon"]} />}
      {type === "warning" && <IoIosWarning className={styles["icon"]} />}
      {type === "info" && <FaInfoCircle className={styles["icon"]} />}

      {text}

      <div className={styles["progress-bar"]} style={{ backgroundColor: `var(--color-alert-${type})` }} />
    </div>
  );
}