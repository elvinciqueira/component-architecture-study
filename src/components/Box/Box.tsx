import { BaseComponent } from "@src/theme/BaseComponent";
import { StyleSheet } from "@src/theme/StyleSheet";

interface BoxProps {
  tag: any;
  styleSheet: StyleSheet;
  children: React.ReactNode;
}

export default function Box({ tag, styleSheet, children, ...props }: BoxProps) {
  const Tag = tag || "div";
  return (
    <BaseComponent as={Tag} styleSheet={styleSheet} {...props}>
      {children}
    </BaseComponent>
  );
}
