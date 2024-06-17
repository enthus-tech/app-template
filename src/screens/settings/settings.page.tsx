import Input from "@/src/components/Input/Input";
import { useSettingsController } from "./settings.controller";
import * as S from "./settings.style";
import Button from "@/src/components/Button/Button";

export default function SettingsPage() {
  const { onPressLogoff } = useSettingsController();

  return (
    <S.Container>
      <Button text="Deslogar" onPress={onPressLogoff} />
      <S.ResetPasswordContainer>
        <S.Title>Resetar senha</S.Title>
        <Input placeholder="example@example.com" label="Confirme seu email" />
        <Input placeholder="********" label="Confirme sua senna" />
        <Input placeholder="********" label="Digite sua nova senha" />
        <Input placeholder="********" label="Confirme sua nova senha" />
        <Button text="Salvar" />
      </S.ResetPasswordContainer>
    </S.Container>
  );
}
