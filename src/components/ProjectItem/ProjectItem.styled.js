import styled from '@emotion/styled/macro';
import { theme } from 'theme/theme';
const { colors, shadows } = theme;

export const ImgThumb = styled.div`
  position: relative;
  max-width: 360px;
  max-height: 240px;
  overflow: hidden;
`;

export const ProjectTitle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  background-color: #12141d;

  transform: translateY(-100%);
  transition: transform 300ms ease;
  ${ImgThumb}:hover &,
  ${ImgThumb}:focus & {
    transform: translateY(0);
  }
`;

export const Name = styled.h4`
  font-size: 20px;
`;

export const ProjectImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const BoxButton = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50%;
  background-color: #12141d;
  padding-top: 16px;
  text-align: center;

  transform: translateY(100%);
  transition: transform 300ms ease;

  ${ImgThumb}:hover &,
  ${ImgThumb}:focus & {
    transform: translateY(0);
  }
`;

export const BtnMore = styled.button`
  padding: 8px 16px;
  border: 1px solid white;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${colors.bcgLayout};
  color: white;

  transition: box-shadow 120ms ease-in;

  :hover {
    box-shadow: ${shadows.link};
  }
`;

export const Tech = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  color: ${colors.textMain};
`;
