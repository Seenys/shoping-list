import Button from "@/components/ui/Button";
import { useUser } from "@clerk/clerk-expo";
import { Redirect, Stack, useRouter } from "expo-router";

const HomeRoutesLayout = () => {
  const { user } = useUser();
  const router = useRouter();

  if (!user) return <Redirect href="/(auth)" />;

  return (
    <Stack
      screenOptions={{
        ...(process.env.EXPO_OS !== "ios"
          ? {}
          : {
              headerLargeTitle: true,
              headerTransparent: true,
              headerBlurEffect: "systemChromeMaterial",
              headerLargeTitleShadowVisible: false,
              headerShadowVisible: true,
              headerLargeStyle: {
                // NEW: Make the large title transparent to match the background.
                backgroundColor: "transparent",
              },
            }),
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Shopping List",
        }}
      />
      <Stack.Screen
        name="profile"
        options={{
          headerTitle: "Profile",
          presentation: "modal",
          sheetAllowedDetents: [0.75, 1],
          headerBackTitle: "Back",
        }}
      />

      <Stack.Screen
        name="list/new/index"
        options={{
          presentation: "modal",
          headerTitle: "New List",
        }}
      />
      <Stack.Screen
        name="list/new/scan"
        options={{
          headerTitle: "Scan QR Code",
          presentation: "fullScreenModal",
          headerLargeTitle: false,
          headerLeft: () => (
            <Button variant="ghost" onPress={() => router.back()}>
              Cancel
            </Button>
          ),
        }}
      />
      <Stack.Screen
        name="list/new/create"
        options={{
          headerTitle: "Create List",
          presentation: "modal",
        }}
      />
    </Stack>
  );
};

export default HomeRoutesLayout;
