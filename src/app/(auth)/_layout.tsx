import { Stack } from "expo-router";

export default function StackLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="login"
    >
      <Stack.Screen name="login" />
      <Stack.Screen name="register" />
    </Stack>
  );
}
