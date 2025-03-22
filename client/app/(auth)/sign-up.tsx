import { ThemedText } from "@/components/ThemedText";
import { Link, useRouter } from "expo-router";
import { View } from "react-native";

const SignUpScreen = () => {
  return (
    <View>
      <ThemedText type="title">Sign up</ThemedText>
      <View>
        <Link href="/(auth)">
          <ThemedText type="link">Go to sign in</ThemedText>
        </Link>
      </View>
    </View>
  );
};

export default SignUpScreen;
