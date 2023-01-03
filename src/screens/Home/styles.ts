import { Plus } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  aling-items: center;
`;
export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`;

export const Avatar = styled.Image`
  width: 40px;
  heigth: 40px;
  border: 2px solid ${({ theme }) => theme.COLORS.GRAY_600};
  border-radius: 100%;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;

    color: ${theme.COLORS.GRAY_700};
  `}

  margin-bottom: 12px;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  padding: 16px 24px;

  flex-direction: row;
  justify-content: center;
  align-items: center;

  background: ${({ theme }) => theme.COLORS.GRAY_600};
  border-radius: 6px;
`;

export const ButtonText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.WHITE};
  `}
`;

export const Icon = styled(Plus).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.WHITE,
}))`
  margin-right: 12px;
`;
