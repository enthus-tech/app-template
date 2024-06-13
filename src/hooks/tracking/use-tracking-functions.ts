import { track } from "@amplitude/analytics-react-native";

export function useTrackingFunctions() {
  const formScreenOpened = () => {
    track("Form Opened");
  };

  return {
    formScreenOpened,
  };
}
