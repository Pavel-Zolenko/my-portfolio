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

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  color: white;
  background-color: ${colors.bcgLayout};

  transition: box-shadow 200ms ease-in;
  :hover,
  :focus {
    box-shadow: ${shadows.project};
    outline: none;
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
