import styled from '@emotion/styled';
import { BaseLink } from '../Base/Base.jsx';
import { theme } from 'theme/theme';

const { colors, fontSizes } = theme;

export const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  width: 100%;
  height: 100vh;
`;
export const Name = styled.h1`
  color: ${colors.white};
  font-size: ${fontSizes.m};
  @media (min-width: 768px) {
    font-size: ${fontSizes.l};
  }
  @media (min-width: 1280px) {
    font-size: ${fontSizes.xl};
  }
`;

export const Role = styled.h2`
  color: ${colors.white};
  font-size: ${fontSizes.s};
  @media (min-width: 768px) {
    font-size: ${fontSizes.m};
  }
  @media (min-width: 1280px) {
    font-size: ${fontSizes.l};
  }
`;

export const WrapContactLink = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 26px;
`;

export const BtnLink = styled(BaseLink)`
  border: solid 1px ${colors.white};
  border-radius: 5px;
  padding: 10px;
  margin-top: 22px;
`;

export const ContactLink = styled(BaseLink)`
  padding: 8px;
  &: last-child {
    border-radius: 50%;
  }
`;
