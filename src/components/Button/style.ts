import { Theme } from "@/src/config/Theme";
import { TouchableOpacity, Text } from "react-native";
import styled from "styled-components/native";

interface ButtonProps {
  backgroundColor?: string;
}

export const ButtonContainer = styled(TouchableOpacity)<ButtonProps>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ?? Theme.colors.mainColor};
  padding: 12px 10px;
  border-radius: 8px;
  width: 100%;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

export const ButtonText = styled(Text)`
  font-size: 16px;
  font-weight: 500;
  color: ${Theme.colors.white};
  font-family: ${Theme.fonts.semiBold};
`;
