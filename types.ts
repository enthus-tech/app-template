/**
 * Representa os dados retornados da API.
 */
export interface IUserData {
  id?: number;
  name: string;
  email?: string;
  phone: string;
  password?: string;
  role: string;
}

/**
 * Representa os dados a serem enviados no body da requisição.
 */
export interface IRegisterUserData {
  name: string;
  email: string;
  phone: string;
  password: string;
}

/**
 * Representa os dados a serem enviados no body da requisição.
 */
export interface ILoginData {
  email: string;
  password: string;
}

export interface IResetPasswordData {
  email: string;
  old_password: string;
  password: string;
  password_confirm: string;
}
