import { TextInputProps } from "react-native";
import * as S from "./style";

interface InputProps extends TextInputProps {
  error?: string;
  label?: string;
}

const Input = ({ error, label, ...props }: InputProps) => {
  return (
    <S.InputContainer>
      <S.InputLabel>{label}</S.InputLabel>
      <S.InputText {...props} />
      <S.ErrorText>{error}</S.ErrorText>
    </S.InputContainer>
  );
};

export default Input;
