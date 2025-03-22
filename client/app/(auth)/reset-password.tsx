import { ThemedText } from "@/components/ThemedText";
import { View } from "react-native";
import { Link } from "expo-router";

const ResetPasswordScreen = () => {
  return (
    <View>
      <ThemedText type="title">Reset password</ThemedText>
      <View>
        <Link href="/(auth)">
          <ThemedText type="link">Go to sign in</ThemedText>
        </Link>
      </View>
    </View>
  );
};

export default ResetPasswordScreen;
