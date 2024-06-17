import { Theme } from "@/src/config/Theme";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";

export const Container = styled(View)`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 24px;
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

export const ResetPasswordContainer = styled(View)`
  margin-top: 32px;
  width: 100%;
`;

export const Title = styled(Text)`
  font-size: 24px;
  font-weight: 600;
  color: ${Theme.colors.black};
  text-align: center;
  margin: 8px 0;
`;

export const InputContainer = styled(View)`
  flex-direction: column;
  margin: 12px;
`;

export const InputLabel = styled(Text)`
  color: ${Theme.colors.black};
  margin-bottom: 4px;
`;

export const InputText = styled(TextInput)`
  border: 1px solid ${Theme.colors.black};
  border-radius: 12px;
  padding: 10px 8px;
`;
