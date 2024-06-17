import { Theme } from "@/src/config/Theme";
import { View, TextInput, Text } from "react-native";
import styled from "styled-components/native";

export const InputContainer = styled(View)`
  width: 100%;
  flex-direction: column;
  margin-bottom: 12px;
`;

export const InputLabel = styled(Text)`
  color: ${Theme.colors.black};
  margin-bottom: 4px;
`;

export const InputText = styled(TextInput)`
  border: 1px solid ${Theme.colors.black};
  border-radius: 12px;
  padding: 10px 8px;
  width: 100%;
`;

export const ErrorText = styled(Text)`
  color: ${Theme.colors.error};
  font-size: 14px;
`;
