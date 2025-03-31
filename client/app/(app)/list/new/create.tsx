import { StyleSheet, Text, View } from "react-native";
import { BodyScrollView } from "@/components/ui/BodyScrollView";
import { ThemedText } from "@/components/ThemedText";
import { Link, Stack } from "expo-router";
import { appleBlue } from "@/constants/Colors";
import TextInput from "@/components/ui/TextInput";
import { useState } from "react";
import Button from "@/components/ui/Button";

const CreateListScreen = () => {
  const [listName, setListName] = useState<string>("");
  const [listDescription, setListDescription] = useState<string>("");

  const handleCreateList = () => {};
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "New List",
          headerTitleAlign: "center",
          headerLargeTitle: false,
        }}
      />
      <BodyScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Grocery Essentials"
            size="lg"
            variant="ghost"
            autoFocus
            returnKeyType="done"
            onChangeText={setListName}
            value={listName}
            onSubmitEditing={handleCreateList}
            inputStyle={styles.titleInput}
            containerStyle={styles.titleInputContainer}
          />
          <Link
            href={{ pathname: "/" }}
            style={[styles.emojiButton, { borderColor: "blue" }]}
          >
            <View style={styles.emojiContainer}>
              <Text>🍎</Text>
            </View>
          </Link>
          <Link
            href={{ pathname: "/" }}
            style={[styles.emojiButton, { borderColor: "blue" }]}
          >
            <View style={styles.emojiContainer}>
              <View
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 100,
                  backgroundColor: "blue",
                }}
              />
            </View>
          </Link>
        </View>
        <TextInput
          placeholder="Add a description (optional)"
          variant="ghost"
          multiline
          numberOfLines={4}
          value={listDescription}
          onChangeText={setListDescription}
          onSubmitEditing={handleCreateList}
          returnKeyType="done"
          inputStyle={styles.descriptionInput}
        />
        <Button
          variant="ghost"
          onPress={handleCreateList}
          textStyle={styles.createButtonText}
          disabled={!listName}
        >
          Create List
        </Button>
      </BodyScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    paddingTop: 16,
    padding: 16,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  titleInput: {
    fontWeight: "600",
    fontSize: 28,
    padding: 0,
  },
  titleInputContainer: {
    flexGrow: 1,
    flexShrink: 1,
    maxWidth: "auto",
    marginBottom: 0,
  },
  emojiButton: {
    padding: 1,
    borderWidth: 3,
    borderRadius: 100,
  },
  emojiContainer: {
    width: 28,
    height: 28,
    alignItems: "center",
    justifyContent: "center",
  },
  descriptionInput: {
    padding: 0,
  },
  createButtonText: {
    color: appleBlue,
    fontWeight: "normal",
  },
  colorButton: {
    padding: 1,
    borderWidth: 3,
    borderRadius: 100,
  },
  colorContainer: {
    width: 28,
    height: 28,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CreateListScreen;
