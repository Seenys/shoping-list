import { ThemedText } from "@/components/ThemedText";
import { BodyScrollView } from "@/components/ui/BodyScrollView";
import { View } from "react-native";

const ScanListScreen = () => {
  return (
    <BodyScrollView>
      <View>
        <ThemedText type="title">Scan List</ThemedText>
      </View>
    </BodyScrollView>
  );
};

export default ScanListScreen;
