import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

type TitleProps = {
  isDiet?: boolean;
};

export const Container = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const Title = styled.Text<TitleProps>`
  ${({ theme, isDiet }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
    line-height: 31px;
    color: ${isDiet ? theme.COLORS.GREEN_700 : theme.COLORS.RED_700};
  `}
  text-align: center;
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    line-height: 21px;
    color: ${theme.COLORS.GRAY_700};
  `}
  text-align: center;
  margin-top: 8px;
  margin-bottom: 40px;
`;

export const Strong = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
    line-height: 21px;
    color: ${theme.COLORS.GRAY_700};
  `}
`;

export const Imagem = styled.Image`
  width: 224px;
`;

export const Button = styled.TouchableOpacity`
  height: 50px;
  width: 191px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
`;

export const TextButton = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.WHITE};
  `}
`;
