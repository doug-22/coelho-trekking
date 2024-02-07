import styled from 'styled-components';
import theme from '@/styles/theme';

export const Wrapper = styled.footer`
  width: 100%;
  height: 10rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${theme.colors.secondary};
  padding: 0rem 3rem;
`;
