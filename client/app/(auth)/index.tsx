import { ThemedText } from "@/components/ThemedText";
import * as Haptics from "expo-haptics";
import { isClerkAPIResponseError, useSignIn } from "@clerk/clerk-expo";
import { StyleSheet, View } from "react-native";
import { useCallback, useState } from "react";
import { useRouter } from "expo-router";
import Button from "@/components/ui/Button";
import TextInput from "@/components/ui/TextInput";
import { BodyScrollView } from "@/components/ui/BodyScrollView";
import { ClerkAPIError } from "@clerk/types";

const SignInScreen = () => {
  const { signIn, setActive, isLoaded } = useSignIn();
  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isSignIn, setIsSignIn] = useState<boolean>(false);
  const [errors, setErrors] = useState<ClerkAPIError[]>([]);

  // Handle the submission of the sign-in form
  const onSignInPress = useCallback(async () => {
    if (!isLoaded) return;

    if (process.env.EXPO_OS === "ios") {
      await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    }
    setIsSignIn(true);
    setErrors([]);

    // Start the sign-in process using the email and password provided
    try {
      const signInAttempt = await signIn.create({
        identifier: email,
        password,
      });

      // If sign-in process is complete, set the created session as active
      // and redirect the user
      if (signInAttempt.status === "complete") {
        await setActive({ session: signInAttempt.createdSessionId });
        router.replace("/(app)");
      } else {
        // If the status isn't complete, check why. User might need to
        // complete further steps.
        console.error(JSON.stringify(signInAttempt, null, 2));
      }
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      if (isClerkAPIResponseError(err)) setErrors(err.errors);
      console.error(JSON.stringify(err, null, 2));
    } finally {
      setIsSignIn(false);
    }
  }, [isLoaded, signIn, email, password, setActive]);

  return (
    <BodyScrollView contentContainerStyle={styles.container}>
      <View style={styles.formSection}>
        <TextInput
          label="Email"
          value={email}
          onChangeText={(email) => setEmail(email)}
          keyboardType="email-address"
          placeholder="Enter your email"
          autoCapitalize="none"
        />
        <TextInput
          label="Password"
          value={password}
          onChangeText={(password) => setPassword(password)}
          secureTextEntry
          placeholder="Enter your password"
        />
        {errors.map((error) => (
          <ThemedText key={error.longMessage} style={styles.errorText}>
            {error.longMessage}
          </ThemedText>
        ))}
        <Button
          onPress={onSignInPress}
          disabled={isSignIn || !email || !password}
          loading={isSignIn}
          style={styles.signInButton}
        >
          Sign In
        </Button>
      </View>
      <View style={styles.footerSection}>
        <ThemedText>Don't have an account?</ThemedText>
        <Button variant="ghost" onPress={() => router.push("/sign-up")}>
          Sign Up
        </Button>
      </View>
      <View style={styles.footerSection}>
        <ThemedText>Forgot password?</ThemedText>
        <Button variant="ghost" onPress={() => router.push("/reset-password")}>
          Reset Password
        </Button>
      </View>
    </BodyScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    gap: 32,
  },
  formSection: {
    gap: 16,
  },
  errorText: {
    color: "red",
    marginBottom: 8,
  },
  signInButton: {
    marginTop: 8,
  },
  footer: {
    gap: 24,
  },
  footerSection: {
    alignItems: "center",
  },
  footerText: {
    color: "gray",
  },
});

export default SignInScreen;
