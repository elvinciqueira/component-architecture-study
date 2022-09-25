import { parseStyleSheet } from "@skynexui/responsive_stylesheet";
import styled from "styled-components";
import { StyleSheet } from "./StyleSheet";

interface StyledBaseComponentProps {
  styleSheet?: StyleSheet;
}

export const BaseComponent = (props) => {
  return <StyledBaseComponent {...props} />;
};

const StyledBaseComponent = styled.div<StyledBaseComponentProps>`
  ${({ styleSheet }) => parseStyleSheet(styleSheet)}
`;

BaseComponent.defaultProps = {
  styleSheet: {},
};
