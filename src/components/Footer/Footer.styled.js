import styled from '@emotion/styled';
import { Container } from '../Container/Container';
import { theme } from 'theme/theme';

const { colors, shadows } = theme;

export const FooterWrap = styled.footer`
  margin-top: 100px;
  font-weight: 700;
  color: ${colors.textMain};
  border-top: 1px solid lightgrey;
  background-color: #12141d;
`;

export const FooterContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 16px;
  padding-bottom: 16px;

  gap: 8px;
`;

export const FooterLink = styled.a`
  text-decoration: none;
  color: white;
  transition: text-shadow 300ms ease-in;
  :hover {
    text-shadow: ${shadows.link};
  }
`;
