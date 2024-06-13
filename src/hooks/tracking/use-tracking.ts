import { init, track } from "@amplitude/analytics-react-native";
import { useEffect } from "react";

export function useTracking() {
  useEffect(() => {
    init("");
    track("App Loaded");
  }, []);
}
