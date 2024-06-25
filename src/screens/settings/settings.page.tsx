import { Controller } from "react-hook-form";
import Input from "@/src/components/Input/Input";
import { useSettingsController } from "./settings.controller";
import * as S from "./settings.style";
import Button from "@/src/components/Button/Button";
import { Theme } from "@/src/config/Theme";
import { Link } from "expo-router";

export default function SettingsPage() {
  const { onPressLogoff } = useSettingsController();

  return (
    <S.Container>
      <Link
        style={{ marginBottom: 16, backgroundColor: "#d6d6d9" }}
        href="/reset-password"
      >
        Resetar senha
      </Link>
      <Button
        backgroundColor={Theme.colors.error}
        text="Deslogar"
        onPress={onPressLogoff}
      />
    </S.Container>
  );
}
