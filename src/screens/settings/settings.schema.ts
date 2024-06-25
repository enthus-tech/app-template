import * as yup from "yup";

export const schema = yup.object().shape({
  email: yup
    .string()
    .email("O email precisa ser válido")
    .required("Campo 'email' é obrigatório"),
  old_password: yup.string().required("Você deve confirmar sua senha"),
  password: yup.string().required("Campo 'senha' é obrigatório"),
  password_confirm: yup.string().required("Você deve confirmar sua senha"),
});
