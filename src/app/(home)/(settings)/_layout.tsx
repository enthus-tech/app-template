import { Stack } from "expo-router";

export default function StackLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="settings"
    >
      <Stack.Screen
        options={{ headerShown: true, headerTitle: "Settings" }}
        name="settings"
      />
      <Stack.Screen
        options={{ headerShown: true, headerTitle: "Reset Password" }}
        name="reset-password"
      />
    </Stack>
  );
}
