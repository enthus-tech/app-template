import { createUser, userLogin } from "@services/user.services";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useState,
} from "react";
import { useAlert } from "@hooks/alert/use-alert";
import { IRegisterUserData } from "@/types";
import { ALERT_TYPE } from "react-native-alert-notification";

export interface AuthContextProps {
  token?: string;
  updateJWTToken: (token: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  register: (user: IRegisterUserData) => Promise<void>;
  logoff: () => Promise<void>;
  isLoading: boolean;
}

const authContextDefaultValues: AuthContextProps = {
  token: undefined,
  updateJWTToken: async (token: string) => undefined,
  login: async (email: string, password: string) => undefined,
  register: async (user: IRegisterUserData) => undefined,
  logoff: async () => undefined,
  isLoading: true,
};

export const AuthContext = createContext<AuthContextProps>(
  authContextDefaultValues
);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);
  const { addAlert } = useAlert();

  useLayoutEffect(() => {
    const loadToken = async () => {
      setIsLoading(true);
      const token = await AsyncStorage.getItem("token");
      if (token) setToken(token);
      setIsLoading(false);
    };
    loadToken();
  }, []);

  const updateJWTToken = useCallback(async (token: string) => {
    try {
      await AsyncStorage.setItem("token", token);
    } catch (e) {
      console.log("ERRO AO ATUALIZAR TOKEN");
    }
  }, []);

  const login = useCallback(
    async (email: string, password: string) => {
      try {
        const response = await userLogin({ email, password });
        await updateJWTToken(response.token);
        setToken(response.token);
      } catch (e: any) {
        addAlert({
          type: ALERT_TYPE.DANGER,
          title: "Erro ao fazer login",
        });
        console.log("ERRO AO LOGAR");
      }
    },
    [addAlert, updateJWTToken]
  );

  const register = useCallback(
    async (user: IRegisterUserData) => {
      try {
        const response = await createUser(user);
        await updateJWTToken(response.token);
        setToken(response.token);
      } catch (e: any) {
        addAlert({
          type: ALERT_TYPE.DANGER,
          title: "Erro ao registrar ",
        });
        console.log("ERRO AO REGISTRAR");
      }
    },
    [addAlert, updateJWTToken]
  );

  const logoff = useCallback(async () => {
    try {
      await AsyncStorage.removeItem("token");
      setToken(undefined);
    } catch (e) {
      console.log("ERRO AO DESLOGAR");
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ updateJWTToken, token, login, register, isLoading, logoff }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
