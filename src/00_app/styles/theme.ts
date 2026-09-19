import { Platform } from "react-native";
import { MD3LightTheme } from "react-native-paper";

/* NOTE: I don't care much about the styling intricacies besides getting an MVP, so I used AI to help me figure out
what I need to implement based on a pre-selected color palette that I liked. */

export const Colors = {
  primaryDark: "#09637E",
  primary: "#088395",
  secondary: "#7AB2B2",
  surface: "#EBF4F6",
  white: "#FFFFFF",
  textDark: "#1A2B33",
  textMuted: "#5A7A84",
  border: "#C8DFE3",
  error: "#C0392B",
  disabled: "#B0CED4",
  inputBg: "#EBF4F6",
  backdrop: "rgba(0,0,0,0.35)",
  auroraBase: "#03222C",
  auroraGlow1: "#7AB2B2",
  auroraGlow2: "#088395",
  auroraGlow3: "#09637E",
  auroraGlow4: "#7AB2B2",
  cardOnAurora: "rgba(255,255,255,0.06)",
  cardBorderOnAurora: "rgba(255,255,255,0.12)",
  // Solid deep-teal panel + hairline border for elevated modal surfaces.
  // Sits on top of Colors.backdrop, so it needs to be opaque (translucent
  // white over the dim backdrop reads as muddy grey).
  modalSurface: "#062B38",
  modalSurfaceElevated: "#0A3A4A",
  modalBorder: "rgba(255,255,255,0.14)",
  modalDivider: "rgba(255,255,255,0.08)",
} as const;

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
} as const;

export const Shadows = {
  card: Platform.select({
    ios: {
      shadowColor: Colors.primaryDark,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.08,
      shadowRadius: 8,
    },
    android: {
      elevation: 3,
    },
    default: {},
  }),
  cardLifted: Platform.select({
    ios: {
      shadowColor: Colors.primaryDark,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.12,
      shadowRadius: 12,
    },
    android: {
      elevation: 6,
    },
    default: {},
  }),
} as const;

export const Fonts = {
  wordmark: "Fredoka_600SemiBold",
  heading: "Manrope",
  body: "Inter",
  bodyItalic: "Inter-Italic",
  quranArabic: "Uthmanic-Hafs",
  quranTranslation: "Amiri-Regular",
} as const;

export const BorderRadius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  full: 9999,
} as const;

export const paperTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: Colors.primary,
    primaryContainer: Colors.surface,
    secondary: Colors.secondary,
    secondaryContainer: Colors.surface,
    background: Colors.surface,
    surface: Colors.white,
    surfaceVariant: Colors.surface,
    error: Colors.error,
    onPrimary: Colors.white,
    onSecondary: Colors.white,
    onBackground: Colors.textDark,
    onSurface: Colors.textDark,
    onSurfaceVariant: Colors.textMuted,
    outline: Colors.border,
    outlineVariant: Colors.border,
  },
};
