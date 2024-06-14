import { useCallback } from "react";
import { useAuth } from "@hooks/auth/use-auth";

export function useSettingsUsecase() {
  const { logoff } = useAuth();
  const onLogoff = useCallback(logoff, [logoff]);
  return {
    onLogoff,
  };
}
