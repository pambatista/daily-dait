import styled, { css } from "styled-components/native";
import { ViewProps, TouchableOpacity } from "react-native";

export type ButtonSelectionStatusProps = ViewProps & {
  type: "sim" | "nao";
  select?: boolean;
};

export const Container = styled(TouchableOpacity)<ButtonSelectionStatusProps>`
  ${({ theme, type, select }) =>
    css`
      background: ${select && type === "sim"
        ? theme.COLORS.GREEN_100
        : select && type === "nao"
        ? theme.COLORS.RED_100
        : theme.COLORS.GRAY_200};

      ${select && type === "sim"
        ? ` border:  1px solid ${theme.COLORS.GREEN_700}`
        : select && type === "nao"
        ? ` border:  1px solid ${theme.COLORS.RED_700}`
        : ""};
    `}
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 48%;
  height: 50px;
  padding: 16px;
  border-radius: 6px;
`;
export const ButtonSelectionStatus = styled.View<ButtonSelectionStatusProps>`
  width: 8px;
  height: 8px;
  border-radius: 100%;
  margin-right: 8px;

  background: ${({ theme, type }) =>
    type === "sim" ? theme.COLORS.GREEN_700 : theme.COLORS.RED_700};
`;

export const ButtonSelectionText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_700};
  `}
`;
