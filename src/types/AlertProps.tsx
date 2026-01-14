export type AlertTypes = "error" | "success" | "warning" | "info";

export interface AlertProps {
  text: string;
  type: AlertTypes;
}

export interface AlertData {
  id: number;
  text: string;
  type: AlertTypes;
}

export interface AlertContextType {
  showAlert: (text: string, type: AlertTypes, duration?: number) => void;
}