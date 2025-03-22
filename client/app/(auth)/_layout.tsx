import { Redirect, Stack } from "expo-router";
import { useUser } from "@clerk/clerk-expo";

const AuthLayout = () => {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) return null;
  if (isSignedIn) return <Redirect href="/(app)" />;

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerTitle: "Sign in" }} />
      <Stack.Screen name="sign-up" options={{ headerTitle: "Sign up" }} />
      <Stack.Screen
        name="reset-password"
        options={{ headerTitle: "Reset password" }}
      />
    </Stack>
  );
};

export default AuthLayout;
