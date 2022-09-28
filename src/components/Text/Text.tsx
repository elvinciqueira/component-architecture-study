import type { ThemeTypographyVariants } from "@src/theme/theme";
import { BaseComponent } from "@src/theme/BaseComponent";
import { useTheme } from "@src/theme/ThemeProvider";
import { forwardRef } from "react";

interface TextProps {
  variant?: ThemeTypographyVariants;
  tag?: "a" | "p" | "li" | "h1" | "h3" | "h4" | "h6" | "h5" | "span" | string;
  styleSheet?: StyleSheet;
  children: React.ReactNode;
  ref?: any;
}

const Text = forwardRef(
  ({ tag = "p", styleSheet, variant = "body2", ...props }: TextProps, ref) => {
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
        ref={ref}
        {...props}
      />
    );
  }
);

export default Text;
