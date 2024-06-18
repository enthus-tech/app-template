import * as S from "./style";
import { ActivityIndicator, TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  isLoading?: boolean;
  text: string;
  backgroundColor?: string;
}

const Button = ({
  text,
  isLoading,
  backgroundColor,
  ...props
}: ButtonProps) => {
  if (isLoading) {
    return (
      <S.ButtonContainer
        disabled
        backgroundColor={backgroundColor}
        testID="loading-button"
      >
        <ActivityIndicator />
      </S.ButtonContainer>
    );
  } else {
    return (
      <S.ButtonContainer
        testID="button-container"
        backgroundColor={backgroundColor}
        {...props}
      >
        <S.ButtonText>{text}</S.ButtonText>
      </S.ButtonContainer>
    );
  }
};

export default Button;
