import { ThemedText } from "@/components/ThemedText";
import { BodyScrollView } from "@/components/ui/BodyScrollView";
import { Pressable, StyleSheet } from "react-native";
import { useClerk } from "@clerk/clerk-expo";
import Button from "@/components/ui/Button";
import { Stack, useRouter } from "expo-router";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { appleBlue } from "@/constants/Colors";

const HomeScreen = () => {
  const { signOut } = useClerk();
  const router = useRouter();

  const renderHeaderRight = () => {
    return (
      <Pressable
        onPress={() => router.push("/list/new")}
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <IconSymbol name="plus" color={appleBlue} />
      </Pressable>
    );
  };

  const renderHeaderLeft = () => {
    return (
      <Pressable
        onPress={() => router.push("/profile")}
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <IconSymbol name="gear" color={appleBlue} />
      </Pressable>
    );
  };

  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "Shopping Lists",
          headerTitleAlign: "center",
          headerRight: renderHeaderRight,
          headerLeft: renderHeaderLeft,
        }}
      />
      <BodyScrollView contentContainerStyle={styles.container}>
        <ThemedText type="title">Home</ThemedText>
        <Button onPress={() => signOut()}>Sign Out</Button>
      </BodyScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },
});

export default HomeScreen;
