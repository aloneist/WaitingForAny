import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#f7f1e7" },
          headerTintColor: "#22313f",
          contentStyle: { backgroundColor: "#f7f1e7" }
        }}
      />
    </>
  );
}
