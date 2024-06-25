import { useCallback, useState } from "react";
import { useSettingsUsecase } from "./settings.usecase";

export function useSettingsController() {
  const [isLoading, setIsLoading] = useState(false);
  const { onLogoff } = useSettingsUsecase();

  const onPressLogoff = useCallback(() => {
    onLogoff();
  }, [onLogoff]);

  return {
    onPressLogoff,
  };
}
