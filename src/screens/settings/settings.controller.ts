import { useCallback, useState } from "react";
import { useSettingsUsecase } from "./settings.usecase";
import { schema } from "./settings.schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

export function useSettingsController() {
  const [isLoading, setIsLoading] = useState(false);
  const { onLogoff, doResetPassword } = useSettingsUsecase();

  const onPressLogoff = useCallback(() => {
    onLogoff();
  }, [onLogoff]);

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
    onPressLogoff,
    handleSubmit,
    control,
    onSubmit,
    errors,
  };
}
