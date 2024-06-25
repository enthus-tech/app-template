import { useCallback, useState } from "react";
import { schema } from "./reset-password.schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useResetPasswordUsecase } from "./reset-password.usecase";

export function useResetPasswordController() {
  const [isLoading, setIsLoading] = useState(false);
  const { doResetPassword } = useResetPasswordUsecase();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      old_password: "",
      password: "",
      password_confirm: "",
    },
    resolver: async (data, context, options) => {
      return yupResolver(schema)(data, context, options);
    },
  });

  const onSubmit = async ({
    email,
    old_password,
    password,
    password_confirm,
  }: {
    email: string;
    old_password: string;
    password: string;
    password_confirm: string;
  }) => {
    setIsLoading(true);
    await doResetPassword(email, old_password, password, password_confirm);
    setIsLoading(false);
  };

  return {
    handleSubmit,
    control,
    onSubmit,
    errors,
  };
}
