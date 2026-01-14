import { useAlert } from "../contexts/AlertContext";
import type { AlertTypes } from "../types/AlertProps";

let showAlertFn: ((text: string, type: AlertTypes, duration?: number) => void) | null = null;

export class AlertController {
  static register(fn: typeof showAlertFn) {
    showAlertFn = fn;
  }

  show(text: string, type: AlertTypes, duration = 3000) {
    if (!showAlertFn) {
      console.warn("AlertController is not registered");
      return;
    }

    showAlertFn(text, type, duration);
  }
}

export function AlertRegister() {
  const { showAlert } = useAlert();
  AlertController.register(showAlert);
  return null;
}