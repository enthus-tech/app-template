import { createContext, useCallback, useContext, useState } from "react";
import { ALERT_TYPE, Toast } from "react-native-alert-notification";

export interface AlertProps {
  type: ALERT_TYPE;
  title: string;
  textBody?: string;
}

export interface AlertContextProps {
  alerts: AlertProps[];
  addAlert: (alert: AlertProps) => void;
  removeAlert: (index: number) => void;
}

const alertContextDefaultValues: AlertContextProps = {
  alerts: [],
  addAlert: (alert: AlertProps) => undefined,
  removeAlert: (index: number) => undefined,
};

export const AlertContext = createContext<AlertContextProps>(
  alertContextDefaultValues
);

export function AlertProvider({ children }: { children: React.ReactNode }) {
  const [alerts, setAlerts] = useState<AlertProps[]>([]);

  const removeAlert = useCallback((index: number) => {
    setAlerts((prev) => prev.filter((_, i) => i !== index));
  }, []);

  const addAlert = (alert: AlertProps) => {
    Toast.show({
      type: alert.type,
      title: alert.title,
      textBody: alert.textBody,
    });
  };

  return (
    <AlertContext.Provider value={{ alerts, addAlert, removeAlert }}>
      {children}
    </AlertContext.Provider>
  );
}

export const useAlert = () => useContext(AlertContext);
