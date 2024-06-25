import { Controller } from "react-hook-form";
import Input from "@/src/components/Input/Input";
import { useResetPasswordController } from "./reset-password.controller";
import * as S from "./reset-password.style";
import Button from "@/src/components/Button/Button";

export default function ResetPasswordPage() {
  const { control, errors, handleSubmit, onSubmit } =
    useResetPasswordController();

  return (
    <S.Container>
      <S.ResetPasswordContainer>
        <S.Title>Resetar senha</S.Title>
        <Controller
          name="email"
          control={control}
          render={({ field: { onChange } }) => (
            <Input
              error={errors.email?.message}
              onChangeText={onChange}
              placeholder="example@example.com"
              label="Confirme seu email"
            />
          )}
        />
        <Controller
          name="old_password"
          control={control}
          render={({ field: { onChange } }) => (
            <Input
              error={errors.old_password?.message}
              onChangeText={onChange}
              placeholder="********"
              label="Confirme sua senha"
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field: { onChange } }) => (
            <Input
              error={errors.password?.message}
              onChangeText={onChange}
              placeholder="********"
              label="Digite sua nova senha"
            />
          )}
        />
        <Controller
          name="password_confirm"
          control={control}
          render={({ field: { onChange } }) => (
            <Input
              error={errors.password_confirm?.message}
              onChangeText={onChange}
              placeholder="********"
              label="Confirme sua nova senha"
            />
          )}
        />
        <Button
          disabled={Object.keys(errors).length > 0}
          onPress={handleSubmit(onSubmit)}
          text="Salvar"
        />
      </S.ResetPasswordContainer>
    </S.Container>
  );
}
