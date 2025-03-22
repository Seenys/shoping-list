import { zincColors } from "@/constants/Colors";
import {
  ViewStyle,
  TextStyle,
  useColorScheme,
  Pressable,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { appleBlue } from "../../constants/Colors";
import { ThemedText } from "../ThemedText";

type ButtonVariant = "filled" | "outlined" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({
  variant = "filled",
  size = "md",
  children,
  disabled = false,
  loading = false,
  style,
  textStyle,
  onPress,
}) => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  const sizeStyles: Record<
    ButtonSize,
    { height: number; padding: number; fontSize: number }
  > = {
    sm: { height: 36, padding: 14, fontSize: 12 },
    md: { height: 44, padding: 16, fontSize: 16 },
    lg: { height: 55, padding: 18, fontSize: 20 },
  };

  const getVariantStyles = () => {
    const baseStyles: ViewStyle = {
      borderRadius: 12,
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
    };

    switch (variant) {
      case "filled":
        return {
          ...baseStyles,
          backgroundColor: isDark ? zincColors[50] : zincColors[900],
        };
      case "outlined":
        return {
          ...baseStyles,
          backgroundColor: "transparent",
          borderWidth: 1,
          borderColor: isDark ? zincColors[700] : zincColors[300],
        };
      case "ghost":
        return {
          ...baseStyles,
          backgroundColor: "transparent",
        };
    }
  };

  const getTextColor = () => {
    if (disabled) return isDark ? zincColors[900] : zincColors[400];

    switch (variant) {
      case "filled":
        return isDark ? zincColors[900] : zincColors[50];
      case "outlined":
      case "ghost":
        return appleBlue;
    }
  };

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      style={[
        getVariantStyles(),
        {
          height: sizeStyles[size].height,
          paddingHorizontal: sizeStyles[size].padding,
          opacity: disabled || loading ? 0.5 : 1,
        },
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={getTextColor()} />
      ) : (
        <ThemedText
          style={StyleSheet.flatten([
            {
              fontSize: sizeStyles[size].fontSize,
              color: getTextColor(),
              fontWeight: "700",
              textAlign: "center",
              marginBottom: 0,
            },
            textStyle,
          ])}
        >
          {children}
        </ThemedText>
      )}
    </Pressable>
  );
};

export default Button;
