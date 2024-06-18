import Input from "@/src/components/Input/Input";
import { useSettingsController } from "./settings.controller";
import * as S from "./settings.style";
import Button from "@/src/components/Button/Button";
import { Theme } from "@/src/config/Theme";

export default function SettingsPage() {
  const { onPressLogoff } = useSettingsController();

  return (
    <S.Container>
      <S.ResetPasswordContainer>
        <S.Title>Resetar senha</S.Title>
        <Input placeholder="example@example.com" label="Confirme seu email" />
        <Input placeholder="********" label="Confirme sua senna" />
        <Input placeholder="********" label="Digite sua nova senha" />
        <Input placeholder="********" label="Confirme sua nova senha" />
        <Button text="Salvar" />
      </S.ResetPasswordContainer>
      <Button
        backgroundColor={Theme.colors.error}
        text="Deslogar"
        onPress={onPressLogoff}
      />
    </S.Container>
  );
}
