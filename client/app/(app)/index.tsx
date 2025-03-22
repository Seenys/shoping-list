import { ThemedText } from "@/components/ThemedText";
import { BodyScrollView } from "@/components/ui/BodyScrollView";
import { StyleSheet, View } from "react-native";
import { useClerk } from "@clerk/clerk-expo";
import Button from "@/components/ui/Button";

const HomeScreen = () => {
  const { signOut } = useClerk();

  return (
    <BodyScrollView contentContainerStyle={styles.container}>
      <ThemedText type="title">Home</ThemedText>
      <Button onPress={() => signOut()}>Sign Out</Button>
    </BodyScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },
});

export default HomeScreen;
