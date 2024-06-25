import { IUserData } from "@/types";
import * as S from "@screens/home/home.style";
import { FlatList, ListRenderItem } from "react-native";
import { useUsersController } from "@screens/home/home.controller";
import { useCallback } from "react";
import { useAlert } from "@/src/hooks/alert/use-alert";
import { useTranslation } from "react-i18next";
import { ALERT_TYPE } from "react-native-alert-notification";

export default function HomePage() {
  const { t } = useTranslation();
  const { addAlert } = useAlert();
  const { users, paginateUsers } = useUsersController();

  const renderItem: ListRenderItem<IUserData> = useCallback(
    ({ item }) => (
      <S.UserContainer>
        <S.Description>{item.name}</S.Description>
        <S.Description>{item.email}</S.Description>
        <S.Description>{item.phone}</S.Description>
      </S.UserContainer>
    ),
    []
  );

  const handleSendAlert = useCallback(() => {
    addAlert({
      title: "Fui clicado",
      type: ALERT_TYPE.DANGER,
      textBody:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto hic nemo aperiam? Explicabo atque laborum a, at animi, consequuntur ullam vel facere, ex porro incidunt quam nulla officiis iste! Ipsa.",
    });
  }, []);

  return (
    <S.Container>
      <S.Title>{t("title")}</S.Title>
      <S.AlertButton onPress={handleSendAlert}>
        <S.AlertButtonText>{t("buttonText")}</S.AlertButtonText>
      </S.AlertButton>
      <S.UsersListContainer>
        <FlatList<IUserData>
          data={users?.flat()}
          renderItem={renderItem as ListRenderItem<IUserData>}
          onEndReached={paginateUsers}
        />
      </S.UsersListContainer>
    </S.Container>
  );
}
