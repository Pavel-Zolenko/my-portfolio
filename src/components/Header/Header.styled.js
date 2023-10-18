import styled from '@emotion/styled';
import { theme } from 'theme/theme';
const { colors, shadows } = theme;

export const HeaderWrap = styled.header`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  z-index: 1;

  position: sticky;
  top: 0;
  border-bottom: 1px solid lightgrey;
  background-color: rgb(18, 20, 29, 0.8);
  backdrop-filter: blur(8px);

  @media (min-width: 1280px) {
    padding-left: 32px;
    padding-right: 32px;
  }
`;

export const HeaderName = styled.div`
  @media (max-width: 1199.98px) {
    display: none;
  }
`;

export const Nav = styled.ul`
  display: flex;
  gap: 15px;
  list-style: none;
  margin-left: auto;
  @media (max-width: 767.98px) {
    display: none;
  }
`;

export const NavMobile = styled.ul`
  display: flex;
  gap: 15px;
  list-style: none;
  margin-left: auto;
  @media (min-width: 768px) {
    display: none;
  }
`;
export const NavItem = styled.li``;

export const NavLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
  color: white;

  transition: text-shadow 200ms ease-in;
  :hover {
    text-shadow: ${shadows.link};
  }
`;

export const Name = styled.h1`
  font-size: 28px;
  color: ${colors.textMain};
`;

export const Box = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 2px;
  color: ${colors.textMain};
`;

export const Role = styled.p`
  font-weight: 400;
  color: ${colors.textMain};
`;

export const HeaderLogoLink = styled.a`
  display: flex;
  align-items: center;
  height: 40px;
  text-decoration: none;
  border-radius: 50%;
  background-color: white;
  transition: box-shadow 150ms ease-in;
  :hover,
  :focus {
    box-shadow: ${shadows.link};
  }
`;

export const Img = styled.img`
  width: 40px;
  height: 40px;
`;

export const LogoDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
