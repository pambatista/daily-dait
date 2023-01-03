import { TouchableOpacityProps } from "react-native";
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeft, PencilSimpleLine, Trash } from "phosphor-react-native";

type ButtonProps = TouchableOpacityProps & {
  outline?: boolean;
};
type DietProps = {
  isDiet?: boolean | null | undefined;
};

type TextButton = {
  outline?: boolean;
};

export const Container = styled.View<DietProps>`
  background: ${({ theme, isDiet }) =>
    isDiet ? theme.COLORS.GREEN_100 : theme.COLORS.RED_100};
  flex: 1;
`;

export const Header = styled(SafeAreaView)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 24px 24px 0;
`;

export const HeaderText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_700};
  `}
  text-align: center;
  flex: 1;
`;

export const HeaderIcon = styled(ArrowLeft).attrs({
  size: 24,
})``;

export const Content = styled.View`
  background: ${({ theme }) => theme.COLORS.WHITE};
  flex: 1;
  border-radius: 20px 0 0 20px;
  padding: 0 24px 24px;
`;

export const Form = styled(SafeAreaView)`
  flex: 1;
  justify-content: space-between;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_700};
  `}
  margin-bottom: 8px;
`;

export const TextSpan = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_600};
  `}
  margin-bottom: 20px;
`;

export const TextStrong = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XS}px;
    color: ${theme.COLORS.GRAY_700};
  `}
  margin-bottom: 8px;
`;

export const Chip = styled.View`
  width: 144px;
  height: 34px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background: ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const ChipText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_700};
  `}
  text-align: center;
  margin-left: 8px;
`;

export const ChipStatus = styled.View<DietProps>`
  width: 8px;
  height: 8px;
  border-radius: 100%;
  background: ${({ theme, isDiet }) =>
    isDiet ? theme.COLORS.GREEN_700 : theme.COLORS.RED_700};
`;

export const Button = styled(TouchableOpacity)<ButtonProps>`
  width: 100%;
  height: 50px;
  padding: 16px 24px;

  flex-direction: row;
  justify-content: center;
  align-items: center;

  ${({ theme, outline }) => css`
    ${!outline
      ? `background: ${theme.COLORS.GRAY_600}`
      : `border: 1px solid ${theme.COLORS.GRAY_600}`}
  `};

  border-radius: 6px;
`;

export const ButtonText = styled.Text<TextButton>`
  ${({ theme, outline }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${outline ? theme.COLORS.GRAY_600 : theme.COLORS.WHITE};
  `}
`;

export const IconPencil = styled(PencilSimpleLine).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.WHITE,
}))`
  margin-right: 12px;
`;
export const IconTrash = styled(Trash).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_600,
}))`
  margin-right: 12px;
`;
