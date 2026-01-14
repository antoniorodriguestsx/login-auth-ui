import { createContext, useContext, useState, type ReactNode } from "react";
import type { AlertContextType, AlertData, AlertTypes } from "../types/AlertProps";
import Alert from "../components/Alert";

const AlertContext = createContext<AlertContextType | null>(null);
let alertID: number = 0;


export function AlertProvider({ children }: { children: ReactNode }) {
  const [alerts, setAlerts] = useState<AlertData[]>([]);

  function showAlert(text: string, type: AlertTypes, duration = 3000) {
    const id: number = alertID++;

    setAlerts((prev) => [...prev, { id, text, type }]);

    setTimeout(() => setAlerts((prev) => prev.filter((alert) => alert.id !== id)), (duration + (800 * 2)));
  }

  return (
    <AlertContext.Provider value={{ showAlert }}>
      {children}

      <div className="alert-container">
        {alerts.map((alert) => <Alert key={alert.id} text={alert.text} type={alert.type} />)}
      </div>
    </AlertContext.Provider>
  );
}

export function useAlert() {
  const ctx = useContext(AlertContext);
  if (!ctx) throw new Error("useAlert must be used inside AlertProvider");
  return ctx;
}