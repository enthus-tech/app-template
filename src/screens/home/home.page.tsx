import { IUserData } from "@/types";
import * as S from "@screens/home/home.style";
import {
  ActivityIndicator,
  Button,
  FlatList,
  ListRenderItem,
  Text,
} from "react-native";
import { useUsersController } from "@screens/home/home.controller";
import { useCallback, useEffect } from "react";
import { useAlert } from "@/src/hooks/alert/use-alert";
import { ALERT_TYPE } from "react-native-alert-notification";

export default function HomePage() {
  const { addAlert } = useAlert();
  const { users, paginateUsers, isLoadingUsers } = useUsersController();

  const renderItem: ListRenderItem<IUserData> = useCallback(
    ({ item }) => (
      <S.UserContainer>
        <S.Text>{item.name}</S.Text>
        <S.Text>{item.email}</S.Text>
        <S.Text>{item.phone}</S.Text>
      </S.UserContainer>
    ),
    []
  );

  if (isLoadingUsers) return <ActivityIndicator />;

  return (
    <S.Container>
      <S.Title>Hello World</S.Title>
      <S.Text>Home page is here</S.Text>
      <Button
        onPress={() =>
          addAlert({
            title: "Fui clicado",
            type: ALERT_TYPE.DANGER,
            textBody:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto hic nemo aperiam? Explicabo atque laborum a, at animi, consequuntur ullam vel facere, ex porro incidunt quam nulla officiis iste! Ipsa.",
          })
        }
        title="Clique em mim"
      />
      <S.UsersList<IUserData>
        data={users?.flat()}
        renderItem={renderItem as ListRenderItem<IUserData>}
        onEndReached={paginateUsers}
      />
    </S.Container>
  );
}
