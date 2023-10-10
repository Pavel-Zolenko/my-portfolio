import styled from '@emotion/styled';
import { Container } from '../Container/Container';
import { theme } from 'theme/theme';

const { colors, shadows } = theme;

export const FormContainer = styled(Container)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  padding-top: 100px;

  @media (min-width: 1280px) {
    justify-content: space-around;
  }
`;

export const ContactList = styled.ul`
  list-style: none;
  z-index: 2;

  @media (max-width: 1279.98px) {
    display: flex;
    justify-content: center;
    gap: 16px;
    width: 100%;
  }
`;

export const ContactLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 16px;
  padding: 8px;
  font-size: 24px;
  font-weight: 400;
  text-decoration: none;
  color: ${colors.textMain};
  background-color: ${colors.bcgLayout};

  transition: color 200ms ease-in;

  :hover,
  :focus {
    color: white;
  }
`;

export const ContactSpan = styled.span`
  @media (max-width: 1279.98px) {
    display: none;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 16px;
  width: 100%;
  max-width: 520px;
  z-index: 2;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  color: white;
  background-color: ${colors.bcgLayout};

  border: none;
  outline: 2px solid transparent;
  background-image: linear-gradient(to bottom, #cacaca 1px, transparent 1px),
    linear-gradient(to bottom, #cacaca 1px, transparent 1px),
    linear-gradient(
      to right,
      #cacaca 1px,
      transparent 1px,
      transparent calc(100% - 1px),
      #cacaca calc(100% - 1px)
    ),
    linear-gradient(to top, #cacaca 1px, transparent 1px);
  background-position: -100% 0%, 200% 0%, 0% 100%, 0% 100%;
  background-size: 50% 100%, 50% 100%, 100% 1px, 100% 100%;
  background-repeat: no-repeat;
  transition: background-size 0.4s ease-out 0.6s,
    background-position 0.6s ease-in, box-shadow 0.4s ease-in-out;

  :hover,
  :focus {
    background-position: 0% 0%, 100% 0%, 0% 100%, 0% 100%;
    background-size: 51% 100%, 51% 100%, 100% 100%, 100% 100%;
    transition: background-size 0.4s ease-in,
      background-position 0.6s ease-out 0.4s;
    box-shadow: ${shadows.project};
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  font-size: 16px;
  resize: none;

  color: white;
  background-color: ${colors.bcgLayout};
  transition: box-shadow 200ms ease-in;
  :hover,
  :focus {
    box-shadow: ${shadows.project};
    outline: none;
  }
`;

export const SendBtn = styled.button`
  width: 100%;
  color: white;
  background-color: ${colors.bcgLayout};
  padding: 8px;
  font-size: 16px;
  font-weight: 700;
  transition: box-shadow 200ms ease-in;
  :hover,
  :focus {
    box-shadow: ${shadows.link};
  }
`;
