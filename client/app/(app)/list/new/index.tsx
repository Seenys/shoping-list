import { ThemedText } from "@/components/ThemedText";
import { BodyScrollView } from "@/components/ui/BodyScrollView";
import { View } from "react-native";

const NewListScreen = () => {
  return (
    <BodyScrollView>
      <View>
        <ThemedText type="title">New List</ThemedText>
      </View>
    </BodyScrollView>
  );
};

export default NewListScreen;
