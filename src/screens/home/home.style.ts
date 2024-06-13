import { Colors, Theme } from "@/src/config/Colors";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${Colors.text};
  font-size: 24px;
  font-weight: 700;
`;

export const Text = styled.Text`
  color: ${Colors.text};
  font-size: 16px;
`;

export const ThemeToggle = styled.Switch``;

export const UsersList = styled.FlatList`
  flex: 1;
`;

export const UserContainer = styled.View`
  flex-direction: column;
  background-color: #d9d9d9;
  margin: 8px 0;
`;
