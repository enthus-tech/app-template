import { useCallback } from "react";
import { useAuth } from "@hooks/auth/use-auth";

export function useResetPasswordUsecase() {
  const { resetPassword } = useAuth();
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
    doResetPassword,
  };
}
