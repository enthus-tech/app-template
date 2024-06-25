import "@config/i18n";
import { Stack, router } from "expo-router";
import { useAuth } from "../hooks/auth/use-auth";
import { useEffect } from "react";

export function MainNavigator() {
  const { isLoading, token } = useAuth();

  useEffect(() => {
    if (!token && !isLoading) {
      return router.replace("/login");
    } else {
      return router.replace("/");
    }
  }, [token]);

  return (
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
