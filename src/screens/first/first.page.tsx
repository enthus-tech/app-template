import * as S from "@screens/first/first.style";
import { Link } from "expo-router";

export default function FirstPage() {
  return (
    <S.Container>
      <S.Title>First Page</S.Title>
      <S.Text>
        Go to <S.Code>src/screens/first/first.page.tsx</S.Code> to edit this
        page.
      </S.Text>
      <Link href="/second">Go to Second Page</Link>
    </S.Container>
  );
}
