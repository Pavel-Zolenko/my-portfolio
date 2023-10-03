import styled from '@emotion/styled';

import { theme } from 'theme/theme';

const { colors } = theme;

export const Layout = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  min-height: 100vh;
  background-color: ${colors.bcgLayout};
  background-size: cover;
  background-repeat: no-repeat;
`;
