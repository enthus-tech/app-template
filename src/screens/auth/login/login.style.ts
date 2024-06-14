import { Theme } from "@/src/config/Theme";
import {
  Text,
  TextInput,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import styled from "styled-components/native";

export const Container = styled(View)`
  margin-top: 80px;
  padding: 40px 24px;
  flex-direction: column;
`;

export const FormContainer = styled(View)`
  margin: 32px 0;
  padding: 32px 12px;
`;

export const Title = styled(Text)`
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  color: ${Theme.colors.black};
`;

export const InputContainer = styled(View)`
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
`;

export const SubmitButton = styled(TouchableOpacity)<TouchableOpacityProps>`
  padding: 12px 8px;
  background-color: ${Theme.colors.mainColor};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  margin-top: 48px;
`;

export const SubmitButtonText = styled(Text)`
  color: ${Theme.colors.white};
  font-weight: 500;
  font-size: 16px;
`;

export const ErrorText = styled(Text)`
  color: ${Theme.colors.error};
  font-size: 14px;
`;
