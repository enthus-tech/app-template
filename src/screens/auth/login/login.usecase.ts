import { useAuth } from "@/src/hooks/auth/use-auth";

export function useLoginUsecase() {
  const { login } = useAuth();

  const doLogin = (email: string, password: string) => {
    login(email, password);
  };

  return {
    doLogin,
  };
}
