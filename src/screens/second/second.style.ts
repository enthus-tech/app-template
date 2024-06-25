import { Theme } from "@/src/config/Theme";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${Theme.colors.black};
  font-size: 24px;
  font-weight: 700;
`;

export const Text = styled.Text`
  color: ${Theme.colors.black};
  font-family: ${Theme.fonts.regular};
  text-align: center;
  font-size: 16px;
`;

export const Code = styled.Text`
  color: ${Theme.colors.black};
  background-color: #d9d9d9;
  font-family: monospace;
  text-align: center;
  font-size: 16px;
`;
