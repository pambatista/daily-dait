import { Button } from "./../Home/styles";
import { ArrowLeft } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

type ContainerProps = {
  type: "PRIMARY" | "SECONDARY";
};

export const Container = styled.View<ContainerProps>`
  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_100 : theme.COLORS.RED_100};
  width: 100%;
  flex: 1;
  position: relative;
`;

export const ContentScreen = styled(SafeAreaView)`
  padding: 24px;
`;
export const Icon = styled(ArrowLeft).attrs(() => ({
  size: 32,
}))``;

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
export const ContentIndicators = styled.View`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  flex: 1;
  border-radius: 20px 0 0 20px;
  padding: 33px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_700};
  `}
  align-items: center;
  text-align: center;
  margin-bottom: 23px;
`;

export const WrapperIndicators = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
