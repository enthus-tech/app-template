import { useEffect } from "react";

import { LogLevel, OneSignal } from "react-native-onesignal";

export function usePush() {
  useEffect(() => {
    OneSignal.Debug.setLogLevel(LogLevel.Verbose);
    OneSignal.initialize("");

    // Also need enable notifications to complete OneSignal setup
    OneSignal.Notifications.requestPermission(true);
  }, []);
}
