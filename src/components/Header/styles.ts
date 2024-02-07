import styled from 'styled-components';
import theme from '@/styles/theme';

export const Wrapper = styled.header`
  width: 100%;
  height: 7rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${theme.colors.white};
  box-shadow: 0 0.1rem 1rem ${theme.colors.shadow};
  padding: 0rem 3rem;

  position: fixed;
  top: 0;
  z-index: 1;
`;

export const WrapperLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Title = styled.h1`
  font-family: 'Protest Riot', sans-serif;
  color: ${theme.colors.secondary};

  span {
    font-family: ${theme.font.family};
    font-family: 'Protest Riot', sans-serif;

    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.black};
    font-weight: ${theme.font.normal};
  }

  @media screen and (max-width: 780px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Links = styled.ul`
  display: flex;
  gap: 2rem;

  li {
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.black};
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  @media screen and (max-width: 780px) {
    display: none;
  }
`;

export const MenuMobile = styled.div`
  position: relative;

  .menu-mobile-options {
    position: absolute;
    right: 0;
    top: 3rem;

    width: 200px;

    background-color: ${theme.colors.white};
    border-radius: 1rem;
    box-shadow: 0 0.1rem 1rem ${theme.colors.shadow};

    li {
      padding: 1rem;
      font-size: ${theme.font.sizes.medium};
      color: ${theme.colors.black};
      font-weight: ${theme.font.normal};
      cursor: pointer;
    }
  }
`;
