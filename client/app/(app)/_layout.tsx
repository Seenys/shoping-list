import { useUser } from "@clerk/clerk-expo";
import { Redirect, Stack } from "expo-router";

const HomeRoutesLayout = () => {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) return null;
  if (!isSignedIn) return <Redirect href="/(auth)" />;

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
    </Stack>
  );
};

export default HomeRoutesLayout;
