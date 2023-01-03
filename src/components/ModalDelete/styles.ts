import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.25);
`;

export const Content = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  border-radius: 8px;
  padding: 24px;
  margin: 24px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;

    color: ${theme.COLORS.GRAY_600};
  `}
  margin-bottom: 32px;
  text-align: center;
`;

export const ContentButton = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ButtonCancelar = styled.TouchableOpacity`
  width: 48%;
  height: 50px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_700};
  border-radius: 6px;
  justify-content: center;
  align-items: center;
`;

export const ButtonExcluir = styled.TouchableOpacity`
  width: 48%;
  height: 50px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  border-radius: 6px;
  justify-content: center;
  align-items: center;
`;

export const ButtonTextCancelar = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;

    color: ${theme.COLORS.GRAY_600};
  `}
`;

export const ButtonTextExcluir = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;

    color: ${theme.COLORS.WHITE};
  `}
`;
