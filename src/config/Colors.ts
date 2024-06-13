/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColor = "#4f46e5";

export const Colors: Theme = {
  text: "#11181C",
  background: "#fff",
  tint: tintColor,
  icon: "#687076",
  tabIconDefault: "#687076",
  tabIconSelected: tintColor,
};

export interface Theme {
  text: string;
  background: string;
  tint: string;
  icon: string;
  tabIconDefault: string;
  tabIconSelected: string;
}
