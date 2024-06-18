# APP Template 👋

Template de app criado com a arquitetura do **Alambrado**.

## Como começar

1. Instale as dependências

   ```bash
   npm install ou yarn
   ```

2. Inicie o app

   ```bash
    npx expo start ou yarn start
   ```


## Dependências
O projeto foi criado usando as seguintes tecnologias:
- [Expo](https://expo.dev/)
- [Expo Router](https://docs.expo.dev/router/introduction/)
- [React Native](https://reactnative.dev/docs/environment-setup)
- [react-native-alert-notification](https://github.com/CodingByJerez/react-native-alert-notification#readme)
- [react-native-onesignal](https://github.com/OneSignal/react-native-onesignal)
- [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/)
- [styled-components](https://styled-components.com/docs/basics)
- [swr](https://swr.vercel.app/pt-BR)
- [yup](https://github.com/jquense/yup)
- [Jest](https://jestjs.io/pt-BR/)
- [React Native Testing Library](https://callstack.github.io/react-native-testing-library/)

## Screens
A definição das rotas & telas é feita através da [criação de pastas e arquivos](https://docs.expo.dev/router/create-pages/), como no [NextJS](https://nextjs.org/).

Para simplificar, as rotas são definidas em arquivos e as páginas são importadas dentro dela, exemplo:

### Página de configurações
Rota definida em: `src/app/(home)/settings.tsx`:
  ``` typescript
  // setings.tsx
  import SettingsPage from "@/src/screens/settings/settings.page";

  export default function SettingsScreen() {
    return <SettingsPage />;
  }
  ```

  Estrutura da página (estilização, controllers, etc...) definidos em `src/screens/settings/*`:
  ``` typescript
  // settings.page.tsx
  export default function SettingsPage() {
    return (
      <S.Container>
     // ...
  ```

A criação de um novo grupo de rotas é feito através da criação de pastas, como no `src/app/(home)/*`, as rotas e páginas são definidas através da criação de um arquivo `_layout.tsx`:
  -  `src/app/(home)/_layout.tsx`;
  -  `src/app/(auth)/_layout.tsx`;

Grupos de telas distintas de níveis superiores (como a página de autenticação e a página home por exemplo) devem ser definidas no arquivo de navegação principal `src/app/main.tsx`:
``` typescript
// main.tsx
export function MainNavigator() {
  return (
    // Observe que tanto a página home quanto a página auth são definidas aqui.
    <Stack>
      <Stack.Screen
        name="(home)"
        options={{ headerShown: false, headerTitle: "Home" }}
      />
      <Stack.Screen
        name="(auth)"
        options={{ headerShown: false, headerTitle: "Auth" }}
      />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
```

## Services, Hooks, Controllers, UseCases
O projeto é separado em 5 partes seguindo a seguinte ordem:
```  
  Services *
    ├── Hooks *
          ├── UseCases
                ├── Controllers
                      ├── Pages
```

Onde:
- Os `services` são os únicos que fazem contato direto com a API (um exemplo disso é a criação dos métodos CRUD de users em `src/services/user/user.services.ts`;
- OS `hooks` interagem com os `services` e eles são responsáveis por gerenciar os estados e a lógica de busca de dados, retornando informações como `isLoading`, `data`, etc...;
- Os `UseCases` encapsulam a lógica de negócios específica e utilizam hooks para obter dados, retornando dados e estados formatados para o **controlador**;
- Os `Controllers` são responsáveis por orquestrar a interação entre os usecases e a interface do usuário, gerenciando callbacks e lógica de UI.
- As `Pages` são as páginas com os dados, estados e funções retornados pelo `controller` disponíveis para a interação com o usuário;

<img width="685" alt="Screenshot 2024-06-18 at 5 14 39 PM" src="https://github.com/enthus-tech/app-template/assets/89851406/a44bb56e-b648-481b-9bf6-432e57ed6787">

## Estilização
O app é inteiramente estilizado com [styled-components](https://styled-components.com/docs/basics), contendo um arquivo de estilização global localizado em `src/config.Theme.ts`;

Neste arquivo contém as principais cores utilizadas pelo app.

``` typescript
// home.style.ts
import { Theme } from "@/src/config/Theme";

export const AlertButton = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${Theme.colors.mainColor};
  // Aqui o background-color está usando a cor principal do app
  padding: 12px 10px;
  border-radius: 8px;
`;
```

## Demais configurações
Serviços como `OneSignal`, `Alerts`, `AuthMiddleware` devem ser definidos em `src/app/_layout.tsx`:

``` typescript
// _layout.tsx
// Providers & Contextos definidos aqui serão utilizáveis no app inteiro.
export default function RootLayout() {
  return (
      <AlertNotificationRoot>
        <AlertProvider>
          <AuthProvider>
            <MainNavigator />
          </AuthProvider>
        </AlertProvider>
      </AlertNotificationRoot>
    );
}
```

## Saiba mais

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.
