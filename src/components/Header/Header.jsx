import { FaFolderClosed } from 'react-icons/fa6';
import {
  FaCertificate,
  FaReact,
  FaHtml5,
  FaSass,
  FaNodeJs,
  FaRegQuestionCircle,
} from 'react-icons/fa';
import { SiJavascript, SiRedux, SiTypescript } from 'react-icons/si';
import {
  HeaderWrap,
  Nav,
  NavMobile,
  NavItem,
  HeaderLogoLink,
  HeaderName,
  Name,
  Box,
  Role,
  LogoDiv,
  NavLink,
} from './Header.styled';

export const Header = () => {
  return (
    <HeaderWrap>
      <HeaderLogoLink href="#">LOGO</HeaderLogoLink>
      <HeaderName>
        <Name>Pavel Zolenko</Name>
        <Box>
          <Role>full-stack developer</Role>
          <LogoDiv>
            <FaHtml5 size="20" />
            <FaSass size="20" />
            <SiJavascript size="20" />
            <SiTypescript size="20" />
            <FaReact size="20" />
            <SiRedux size="20" />
            <FaNodeJs size="20" />
          </LogoDiv>
        </Box>
      </HeaderName>

      <Nav>
        <NavItem>
          <NavLink href="#projects" aria-label="Projects">
            <FaFolderClosed size={24} color="#fff" />
            Projects
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#certificate" aria-label="certificate">
            <FaCertificate size={24} color="#fff" />
            Certificate
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#contacts" aria-label="contacts">
            <FaRegQuestionCircle size={24} color="#fff" />
            Contacts
          </NavLink>
        </NavItem>
      </Nav>

      <NavMobile>
        <li>
          <NavLink href="#projects">
            <FaFolderClosed size={24} color="#fff" />
          </NavLink>
        </li>
        <li>
          <NavLink href="#certificate">
            <FaCertificate size={24} color="#fff" />
          </NavLink>
        </li>
        <li>
          <NavLink href="#contacts">
            <FaRegQuestionCircle size={24} color="#fff" />
          </NavLink>
        </li>
      </NavMobile>
    </HeaderWrap>
  );
};
