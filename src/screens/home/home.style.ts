import { Theme } from "@/src/config/Theme";
import { TouchableOpacity, View, Text, FlatList } from "react-native";
import styled from "styled-components/native";

export const Container = styled(View)`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 24px;
`;

export const Title = styled(Text)`
  color: ${Theme.colors.title};
  font-family: ${Theme.fonts.bold};
  font-size: 24px;
`;

export const Description = styled(Text)`
  color: ${Theme.colors.title};
  font-family: ${Theme.fonts.regular};
  font-size: 16px;
`;

export const UsersList = styled(FlatList)`
  flex-grow: 1;
`;

export const UsersListContainer = styled(View)`
  flex: 1;
`;

export const UserContainer = styled(View)`
  flex-direction: column;
  margin: 8px 0;
`;

export const AlertButton = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${Theme.colors.mainColor};
  padding: 12px 10px;
  border-radius: 8px;
`;

export const AlertButtonText = styled(Text)`
  font-size: 16px;
  font-weight: 500;
  color: #fff;
`;
