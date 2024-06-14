import { Theme } from "@/src/config/Theme";
import { Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";

export const Container = styled(View)`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LogoutButton = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${Theme.colors.mainColor};
  padding: 12px 10px;
  border-radius: 8px;
`;

export const LogoutButtonText = styled(Text)`
  font-size: 16px;
  font-weight: 500;
  color: ${Theme.colors.white};
`;
