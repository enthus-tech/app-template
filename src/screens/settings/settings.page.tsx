import { Controller } from "react-hook-form";
import Input from "@/src/components/Input/Input";
import { useSettingsController } from "./settings.controller";
import * as S from "./settings.style";
import Button from "@/src/components/Button/Button";
import { Theme } from "@/src/config/Theme";

export default function SettingsPage() {
  const { onPressLogoff, control, errors, handleSubmit, onSubmit } =
    useSettingsController();

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
      <Button
        backgroundColor={Theme.colors.error}
        text="Deslogar"
        onPress={onPressLogoff}
      />
    </S.Container>
  );
}
