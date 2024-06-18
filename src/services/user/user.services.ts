import type {
  ILoginData,
  IRegisterUserData,
  IResetPasswordData,
  IUserData,
} from "@/types";
import { Get, Patch, Delete, Post } from "@services/api/api";

export const getUsers = async (
  page: number,
  quantity: number
): Promise<IUserData[]> => {
  return await Get(`users/${page}/${quantity}`);
};

export const getUser = async (id: number): Promise<IUserData> => {
  return await Get(`users/${id}`);
};

export const createUser = async (
  user: Omit<IRegisterUserData, "id">,
  headers?: HeadersInit
): Promise<{ token: string }> => {
  return await Post(`users/`, user, headers);
};

export const updateUser = async (
  user: Partial<IUserData>,
  headers?: HeadersInit
): Promise<Partial<IUserData>> => {
  return await Patch(`users/`, user, headers);
};

export const deleteUser = async (
  id: number,
  headers?: HeadersInit
): Promise<void> => {
  await Delete(`users/${id}`, headers);
};

export const userLogin = async (
  loginData: ILoginData
): Promise<{ token: string }> => {
  return await Post(`auth/login`, loginData);
};

export const resetPassword = async (
  resetPasswordData: IResetPasswordData
): Promise<{ token: string }> => {
  return await Post("auth/reset-password", resetPasswordData);
};
