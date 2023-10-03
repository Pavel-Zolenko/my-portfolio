import styled from '@emotion/styled/macro';
import { Container } from '../Container/Container.jsx';

export const CertContainer = styled(Container)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 100px;
  max-width: 360px;
  margin: 0 auto;
`;
export const Img = styled.img``;

export const IconContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 4px;
  opacity: 0;
  cursor: pointer;

  ${CertContainer}:hover &,
  ${CertContainer}:focus & {
    transition: opacity 500ms ease;
    opacity: 1;
  }
`;
export const Wrap = styled.div`
  position: relative;
`;

export const Link = styled.a`
  color: #12141d;
  text-decoration: none;
`;
