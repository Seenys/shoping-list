import { FC } from "react";
import { Text, View, ViewStyle } from "react-native";
import { ThemedText } from "../ThemedText";

interface IconCircleProps {
  emoji: string;
  size?: number;
  style?: ViewStyle;
  backgroundColor?: string;
}

const IconCircle: FC<IconCircleProps> = ({
  emoji,
  size = 48,
  style,
  backgroundColor = "#f0f0f0",
}) => {
  return (
    <View
      style={[
        {
          backgroundColor,
          width: size,
          height: size,
          borderRadius: 12,
          justifyContent: "center",
          alignItems: "center",
        },
        style,
      ]}
    >
      <ThemedText style={{ fontSize: 2 }}>{emoji}</ThemedText>
    </View>
  );
};

export default IconCircle;
