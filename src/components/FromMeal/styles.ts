import styled, { css } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeft } from "phosphor-react-native";
import MaskInput from "react-native-mask-input";

export const Container = styled.View`
  background: ${({ theme }) => theme.COLORS.GRAY_300};
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

export const Label = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_600};
  `}
  a
`;

export const Input = styled.TextInput`
  height: 48px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
  border-radius: 6px;
  padding: 8px;
  margin-bottom: 24px;
`;

export const InputDate = styled(MaskInput)`
  height: 48px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
  border-radius: 6px;
  padding: 8px;
  margin-bottom: 24px;
`;

export const TextArea = styled.TextInput`
  height: 120px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
  border-radius: 6px;
  padding: 8px;
  margin-bottom: 24px;
`;

export const ContentData = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  padding: 16px 24px;
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

export const ContentButtonIsDiet = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
