import { useSettingsController } from "./settings.controller";
import * as S from "./settings.style";

export default function SettingsPage() {
  const { onPressLogoff } = useSettingsController();

  return (
    <S.Container>
      <S.LogoutButton onPress={onPressLogoff}>
        <S.LogoutButtonText>Deslogar</S.LogoutButtonText>
      </S.LogoutButton>
    </S.Container>
  );
}
