import { useUser } from "@clerk/clerk-expo";
import { Redirect, Stack } from "expo-router";

const HomeRoutesLayout = () => {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) return null;
  if (!isSignedIn) return <Redirect href="/(auth)" />;

  return (
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  );
};

export default HomeRoutesLayout;
