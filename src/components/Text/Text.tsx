import type { ThemeTypographyVariants } from "@src/theme/theme";
import { BaseComponent } from "@src/theme/BaseComponent";
import { useTheme } from "@src/theme/ThemeProvider";

interface TextProps {
  variant?: ThemeTypographyVariants;
  tag?: "p" | "li" | "h1" | "h3" | "h4" | "h6" | "h5" | "span";
  styleSheet?: StyleSheet;
  children: React.ReactNode;
}

export default function Text({
  styleSheet,
  variant,
  tag,
  ...props
}: TextProps) {
  const theme = useTheme();
  const textVariant = theme.typography.variants[variant];

  return (
    <BaseComponent
      as={tag}
      styleSheet={{
        fontFamily: theme.typography.fontFamily,
        ...textVariant,
        ...styleSheet,
      }}
      {...props}
    />
  );
}

Text.defaultProps = {
  tag: "p",
  variant: "body2",
};
