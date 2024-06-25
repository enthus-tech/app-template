import { useCallback } from "react";
import { useAuth } from "@hooks/auth/use-auth";

export function useSettingsUsecase() {
  const { logoff, resetPassword } = useAuth();
  const onLogoff = useCallback(logoff, [logoff]);
  const doResetPassword = useCallback(
    async (
      old_password: string,
      email: string,
      password: string,
      password_confirm: string
    ) => resetPassword(old_password, email, password, password_confirm),
    [resetPassword]
  );
  return {
    onLogoff,
    doResetPassword,
  };
}
