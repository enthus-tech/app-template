import * as yup from "yup";

export const schema = yup.object().shape({
  email: yup
    .string()
    .email("O email precisa ser válido")
    .required("Campo 'email' é obrigatório"),
  password: yup.string().required("Campo 'senha' é obrigatório"),
});
