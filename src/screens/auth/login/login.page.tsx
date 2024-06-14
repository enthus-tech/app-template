import { Controller } from "react-hook-form";
import { useLoginController } from "./login.controller";
import * as S from "./login.style";

export default function LoginPage() {
  const { isLoading, control, errors, handleSubmit, onSubmit } =
    useLoginController();

  return (
    <S.Container>
      <S.Title>Página de login</S.Title>
      <S.FormContainer>
        <Controller
          name="email"
          control={control}
          render={({ field: { onChange } }) => (
            <S.InputContainer>
              <S.InputLabel>Email</S.InputLabel>
              <S.InputText
                onChangeText={onChange}
                placeholder="example@example.com"
              ></S.InputText>
              <S.ErrorText>{errors.email?.message}</S.ErrorText>
            </S.InputContainer>
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field: { onChange } }) => (
            <S.InputContainer>
              <S.InputLabel>Senha</S.InputLabel>
              <S.InputText
                secureTextEntry={true}
                onChangeText={onChange}
                placeholder="********"
              ></S.InputText>
              <S.ErrorText>{errors.password?.message}</S.ErrorText>
            </S.InputContainer>
          )}
        />
        <S.SubmitButton
          disabled={Object.keys(errors).length > 0}
          onPress={handleSubmit(onSubmit)}
        >
          <S.SubmitButtonText>Entrar</S.SubmitButtonText>
        </S.SubmitButton>
      </S.FormContainer>
    </S.Container>
  );
}
