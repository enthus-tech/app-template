import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import {
  useFonts,
  Inter_900Black,
  Inter_400Regular,
  Inter_100Thin,
  Inter_300Light,
  Inter_700Bold,
  Inter_600SemiBold,
  Inter_200ExtraLight,
  Inter_500Medium,
  Inter_800ExtraBold,
} from "@expo-google-fonts/inter";
import { AuthProvider } from "@hooks/auth/use-auth";
import { AlertProvider } from "@hooks/alert/use-alert";
import { AlertNotificationRoot } from "react-native-alert-notification";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    Inter_900Black,
    Inter_400Regular,
    Inter_100Thin,
    Inter_300Light,
    Inter_700Bold,
    Inter_600SemiBold,
    Inter_200ExtraLight,
    Inter_500Medium,
    Inter_800ExtraBold,
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <AlertNotificationRoot>
      <AlertProvider>
        <AuthProvider>
          <Stack>
            <Stack.Screen name="(home)" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
          </Stack>
        </AuthProvider>
      </AlertProvider>
    </AlertNotificationRoot>
  );
}
