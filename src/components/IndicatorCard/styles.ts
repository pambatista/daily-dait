import { View } from "react-native";
import styled, { css } from "styled-components/native";

import { ArrowUpRight } from "phosphor-react-native";

export type IndicatorCardTypeStyleProps = "PRIMARY" | "SECONDARY" | "TERTIARY";

type Props = {
  type: IndicatorCardTypeStyleProps;
};

export const Container = styled(View)<Props>`
  min-heigth: 89px;
  background-color: ${({ theme, type }) =>
    type === "PRIMARY"
      ? theme.COLORS.GREEN_100
      : type === "SECONDARY"
      ? theme.COLORS.RED_100
      : theme.COLORS.GRAY_200};
  padding: 20px 16px;
  gap: 2px;
  border-radius: 8px;
  position: relative;
  margin-bottom: 12px;
`;

export const Icon = styled(ArrowUpRight).attrs(() => ({
  size: 32,
}))`
  position: absolute;
  right: 8px;
  top: 8px;
`;

export const Number = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XXL}px;
    color: ${theme.COLORS.GRAY_700};
  `}
  align-items: center;
  text-align: center;
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_600};
    align-items: center;
    text-align: center;
  `}
`;
