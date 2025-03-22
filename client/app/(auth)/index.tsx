import { ThemedText } from "@/components/ThemedText";
import { useSignIn } from "@clerk/clerk-expo";
import { View } from "react-native";
import { useState } from "react";
import { Link, useRouter } from "expo-router";
import Button from "@/components/ui/Button";
import TextInput from "@/components/ui/TextInput";
const SignInScreen = () => {
  const { signIn, setActive, isLoaded } = useSignIn();
  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isSignIn, setIsSignIn] = useState<boolean>(true);

  const handleSignIn = async () => {
    if (!isLoaded) return;
  };

  return (
    <View>
      <ThemedText type="title">Sign In</ThemedText>
      <TextInput
        label="Email"
        value={email}
        placeholder="Enter your email"
        onChangeText={setEmail}
      />
      <Button onPress={handleSignIn}>hello</Button>
      <View>
        <Link href="/(auth)/sign-up">
          <ThemedText type="link">Go to sign up</ThemedText>
        </Link>
        <Link href="/(auth)/reset-password">
          <ThemedText type="link">Go to reset password</ThemedText>
        </Link>
      </View>
    </View>
  );
};

export default SignInScreen;
