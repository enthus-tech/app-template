import * as S from "@screens/form/form.style";
import { Link } from "expo-router";

export default function FormPage() {
  return (
    <S.Container>
      <S.Title>Form Page</S.Title>
      <Link href="/first">Go to First Page</Link>
    </S.Container>
  );
}
