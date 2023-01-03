import styled, { css } from "styled-components/native";

export const Container = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_700};
  `}
  margin-bottom: 8px;
  margin-top: 24px;
`;
