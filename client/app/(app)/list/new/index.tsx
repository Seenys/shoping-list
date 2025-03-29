import { ThemedText } from "@/components/ThemedText";
import { BodyScrollView } from "@/components/ui/BodyScrollView";
import Button from "@/components/ui/Button";
import IconCircle from "@/components/ui/IconCircle";
import TextInput from "@/components/ui/TextInput";
import { backgroundColors, emojies } from "@/constants/Colors";
import { Href, router, useRouter } from "expo-router";
import { useMemo, useState } from "react";
import { StyleSheet, View } from "react-native";

const isValidUUID = (id: string | null) => {
  if (!id) return false;
  const uuidRegex =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return uuidRegex.test(id);
};

const NewListScreen = () => {
  const [listId, setListId] = useState<string>("");
  const router = useRouter();

  const isValidListId = useMemo(() => isValidUUID(listId), [listId]);

  const randomEmoji = useMemo(
    () => emojies[Math.floor(Math.random() * emojies.length)],
    []
  );
  const randomColor = useMemo(
    () => backgroundColors[Math.floor(Math.random() * backgroundColors.length)],
    []
  );

  const joinShoppingListCallback = (listId: string) => {};

  const handleJoinList = () => {};

  const handleDismissTo = (screen: Href) => {
    if (router.canDismiss()) {
      router.dismiss();

      setTimeout(() => {
        router.push(screen);
      }, 100);
    }
  };

  return (
    <BodyScrollView contentContainerStyle={{ padding: 16 }}>
      <View style={styles.container}>
        <IconCircle
          emoji={randomEmoji}
          backgroundColor={randomColor}
          size={60}
          style={styles.emoji}
        />
        <ThemedText type="title">Better Together</ThemedText>
        <ThemedText type="defaultSemiBold" style={styles.subtitle}>
          Create a shared shopping list and collaborate in real-time with your
          friends and family.
        </ThemedText>
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          onPress={() => handleDismissTo("/list/new/create")}
          variant="filled"
          size="lg"
          style={{ marginBottom: 16 }}
        >
          Create new list
        </Button>
        <View style={styles.divider}>
          <View style={styles.line} />
          <ThemedText style={styles.textDivider}>
            or join an existing list
          </ThemedText>
          <View style={styles.line} />
        </View>
      </View>
      <View style={styles.joinSection}>
        <TextInput
          placeholder="Enter a list code"
          value={listId}
          onChangeText={setListId}
          onSubmitEditing={(e) => {
            joinShoppingListCallback(e.nativeEvent.text);
          }}
          containerStyle={{ marginBottom: 0 }}
        />
        <Button onPress={handleJoinList} disabled={!isValidListId}>
          Join list
        </Button>
        <Button
          variant="ghost"
          onPress={() => handleDismissTo("/list/new/scan")}
        >
          Scan QR code
        </Button>
      </View>
    </BodyScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    gap: 32,
    marginTop: 32,
  },
  buttonsContainer: {
    gap: 16,
  },
  joinSection: {
    gap: 16,
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
    gap: 16,
  },
  emoji: {
    marginBottom: 8,
  },
  subtitle: {
    marginTop: 8,
    marginBottom: 16,
    color: "gray",
    textAlign: "center",
  },
  textDivider: {
    marginTop: 8,
    marginBottom: 8,
    color: "gray",
    textAlign: "center",
  },
  line: {
    height: 2,
    flex: 1,
    backgroundColor: "rgba(150, 150, 150, 0.2)",
  },
});

export default NewListScreen;
