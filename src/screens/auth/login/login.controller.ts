import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useLoginUsecase } from "./login.usecase";
import { schema } from "./login.schema";
import { useState } from "react";

export function useLoginController() {
  const [isLoading, setIsLoading] = useState(false);
  const { doLogin } = useLoginUsecase();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: async (data, context, options) => {
      return yupResolver(schema)(data, context, options);
    },
  });

  const onSubmit = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    setIsLoading(true);
    doLogin(email ?? "", password);
    setIsLoading(false);
  };

  return {
    handleSubmit,
    onSubmit,
    isLoading,
    errors,
    control,
  };
}
