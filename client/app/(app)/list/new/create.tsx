import { View } from "react-native";
import { BodyScrollView } from "@/components/ui/BodyScrollView";
import { ThemedText } from "@/components/ThemedText";

const CreateListScreen = () => {
  return (
    <BodyScrollView>
      <View>
        <ThemedText type="title">Create List</ThemedText>
      </View>
    </BodyScrollView>
  );
};

export default CreateListScreen;
