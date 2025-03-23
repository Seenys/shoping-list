import { View } from "react-native";
import { BodyScrollView } from "@/components/ui/BodyScrollView";
import { ThemedText } from "@/components/ThemedText";

const ProfileScreen = () => {
  return (
    <BodyScrollView>
      <View>
        <ThemedText type="title">Profile</ThemedText>
      </View>
    </BodyScrollView>
  );
};

export default ProfileScreen;
