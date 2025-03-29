import { ThemedText } from "@/components/ThemedText";
import { BodyScrollView } from "@/components/ui/BodyScrollView";
import IconCircle from "@/components/ui/IconCircle";
import { StyleSheet, View } from "react-native";

const NewListScreen = () => {
  return (
    <BodyScrollView contentContainerStyle={{ padding: 16 }}>
      <IconCircle emoji="🛒" size={60} style={{ alignSelf: "center" }} />
      <ThemedText type="subtitle">Better Together</ThemedText>
      <ThemedText type="defaultSemiBold" style={styles.subtitle}>
        Create a shared shopping list and collaborate in real-time with your
        friends and family.
      </ThemedText>
    </BodyScrollView>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    marginTop: 8,
    marginBottom: 16,
  },
});

export default NewListScreen;
