import { zincColors } from "@/constants/Colors";
import {
  ViewStyle,
  TextStyle,
  useColorScheme,
  StyleSheet,
  TextInput as RNTextInput,
  View,
} from "react-native";
import { ThemedText } from "../ThemedText";

type TextInputVariant = "default" | "filled" | "outlined" | "ghost";
type TextInputSize = "sm" | "md" | "lg";

interface TextInputProps extends Omit<RNTextInput, "style"> {
  variant?: TextInputVariant;
  size?: TextInputSize;
  label?: string;
  error?: string;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
  disabled?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({
  variant = "default",
  size = "md",
  label,
  error,
  containerStyle,
  inputStyle,
  disabled = false,
  ...props
}) => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  const sizeStyles: Record<
    TextInputSize,
    { height?: number; padding: number; fontSize: number }
  > = {
    sm: { padding: 14, fontSize: 8 },
    md: { height: 50, padding: 14, fontSize: 16 },
    lg: { height: 55, padding: 16, fontSize: 32 },
  };

  const getVariantStyles = () => {
    const baseStyles: ViewStyle = {
      borderRadius: 12,
      backgroundColor: isDark ? zincColors[900] : "rgb(229, 229, 234)",
    };

    switch (variant) {
      case "filled":
        return {
          ...baseStyles,
          backgroundColor: isDark ? zincColors[700] : zincColors[100],
        };
      case "outlined":
        return {
          ...baseStyles,
          borderWidth: 1,
          borderColor: isDark ? zincColors[600] : zincColors[200],
        };
      case "ghost":
        return {
          ...baseStyles,
          backgroundColor: "transparent",
        };
      default:
        return baseStyles;
    }
  };

  const getTextColor = () => {
    if (disabled) return isDark ? zincColors[500] : zincColors[400];

    return isDark ? zincColors[50] : zincColors[900];
  };

  return (
    <View style={[styles.container, containerStyle]}>
      {label && <ThemedText style={styles.label}>{label}</ThemedText>}
      <View style={[getVariantStyles(), disabled && styles.disabled]}>
        <RNTextInput
          style={[
            {
              height: sizeStyles[size].height,
              fontSize: sizeStyles[size].fontSize,
              padding: sizeStyles[size].padding,
              color: getTextColor(),
            },
            inputStyle,
          ]}
          placeholderTextColor={isDark ? zincColors[500] : zincColors[400]}
          editable={!disabled}
          {...props}
        />
      </View>
      {error && <ThemedText style={styles.error}>{error}</ThemedText>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    marginBottom: 4,
  },
  error: {
    color: "#ef4444", // red-500
    marginTop: 4,
  },
  disabled: {
    opacity: 0.5,
  },
});

export default TextInput;
