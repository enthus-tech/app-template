import { Stack } from "expo-router";

export default function StackLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="first"
    >
      <Stack.Screen
        options={{ headerShown: true, headerTitle: "First Page" }}
        name="first"
      />
      <Stack.Screen
        options={{ headerShown: true, headerTitle: "Second Page" }}
        name="second"
      />
    </Stack>
  );
}
