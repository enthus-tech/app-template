import * as S from "./style";
import { ActivityIndicator, TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  isLoading?: boolean;
  text: string;
}

const Button = ({ text, isLoading, ...props }: ButtonProps) => {
  if (isLoading) {
    return (
      <S.ButtonContainer accessibilityRole="button">
        <ActivityIndicator />
      </S.ButtonContainer>
    );
  } else {
    return (
      <S.ButtonContainer accessibilityRole="button" {...props}>
        <S.ButtonText>{text}</S.ButtonText>
      </S.ButtonContainer>
    );
  }
};

export default Button;
