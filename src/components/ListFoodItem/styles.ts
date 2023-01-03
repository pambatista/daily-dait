import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

type StatusFoodProps = {
  isDiet?: boolean;
};

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 49px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  padding: 14px 16px 14px 12px;
  margin-bottom: 8px;
`;

export const Hours = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XS}px;
    color: ${theme.COLORS.GRAY_700};
  `}
`;

export const Divisor = styled.View`
  width: 1px;
  height: 14px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
  margin: 0 12px;
`;

export const Food = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_600};
  `}
  flex: 1;
`;

export const StatusFood = styled.View<StatusFoodProps>`
  width: 14px;
  height: 14px;
  background: ${({ theme, isDiet }) =>
    isDiet ? theme.COLORS.GREEN_300 : theme.COLORS.RED_300};
  border-radius: 100%;
`;
