import styled from '@emotion/styled';
import { theme } from 'theme/theme';

const { colors, shadows } = theme;

export const BaseLink = styled.a`
  text-decoration: none;
  color: ${colors.white};
  transition: box-shadow 200ms ease-in;
  :hover {
    box-shadow: ${shadows.link};
  }
`;
