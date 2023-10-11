import styled from '@emotion/styled';
import { theme } from 'theme/theme';

const { colors, shadows } = theme;

export const Card = styled.div`
  text-align: right;
  color: ${colors.textMain};
  background-color: ${colors.bcgLayout};
  border: 1px solid;
  border-top: none;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 16px;
`;

export const NameDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const NameLink = styled.a`
  font-size: 24px;
  font-weight: 700;
  text-decoration: none;
  color: white;
  transition: text-shadow 120ms ease-in;

  :hover,
  :focus {
    text-shadow: ${shadows.link};
  }
`;
export const GithubLink = styled.a`
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  color: white;
  transition: text-shadow 120ms ease-in;

  :hover,
  :focus {
    text-shadow: ${shadows.link};
  }
`;

export const Tech = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
`;
export const Text = styled.div`
  text-align: left;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1px;
`;

export const BtnClose = styled.button`
  border: none;
  cursor: pointer;
  padding: 8px;
  color: ${colors.textMain};
  background-color: transparent;

  transition: color 200ms ease-in;
  :hover,
  :focus {
    color: white;
  }
`;
