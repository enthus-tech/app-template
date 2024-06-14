import { useNavigation } from "@react-navigation/native";
import { useCallback } from "react";
import { useSettingsUsecase } from "./settings.usecase";

export function useSettingsController() {
  const { onLogoff } = useSettingsUsecase();

  const onPressLogoff = useCallback(() => {
    onLogoff();
  }, [onLogoff]);

  return {
    onPressLogoff,
  };
}
