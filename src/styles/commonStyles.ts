import styled, { css } from 'styled-components';
import theme from './theme';

export const WrapperHome = styled.main`
  width: 100%;
  margin-top: 7rem;

  background-image: url('./assets/background.jpg');
  background-size: cover;
  background-attachment: fixed;
`;

export const WrapperAboutMe = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 70% 30%;
  row-gap: 2rem;
  padding: 2rem;

  .description {
    padding: 2rem;
    background-color: ${theme.colors.white};
    box-shadow: 0 0.1rem 1rem ${theme.colors.shadow};
  }

  .images {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 980px) {
    grid-template-columns: 100%;

    .images {
      flex-direction: row;
      justify-content: center;
    }
  }
`;

export const WrapperProducts = styled.div`
  padding: 2rem;
  background-color: ${theme.colors.dark_blue};
  .content-slider-products {
    width: 100%;
    padding: 2rem;

    .content-card {
      .card {
        margin: auto;
        width: 300px;
        background-color: ${theme.colors.white};
        padding: 1rem;

        img {
          margin: auto;
          width: 100%;
          height: 200px;
        }
      }
    }
  }

  @media screen and (max-width: 980px) {
    .content-card {
      .card {
        width: 100% !important;

        img {
          height: 300px !important;
        }
      }
    }
  }
`;

export const WrapperContacts = styled.div`
  padding: 2rem;
`;

export const WrapperPhotos = styled.div`
  background-color: ${theme.colors.green};
  padding: 2rem;
  .content-slider-photos {
    width: 100%;
    padding: 2rem;

    .content-photo {
      img {
        margin: auto;
        width: 80%;
        box-shadow: 0 0.1rem 1rem ${theme.colors.shadow};
      }
    }
  }

  @media screen and (max-width: 980px) {
    .content-photo {
      img {
        width: 100%;
        height: 400px;
      }
    }
  }

  @media screen and (max-width: 780px) {
    .content-photo {
      img {
        width: 100%;
        height: 200px;
      }
    }
  }
`;

export const TitleSection = styled.h1<{ color?: 'secondary' | 'white' }>`
  ${({ color = 'secondary' }) => css`
    font-family: ${theme.font.family_title};
    font-size: ${theme.font.sizes.xxlarge};
    margin-bottom: 1rem;
    color: ${theme.colors[color]};
  `}
`;

export const Text = styled.p<{ color?: 'secondary' | 'white' | 'black' }>`
  ${({ color = 'black' }) => css`
    font-size: ${theme.font.sizes.medium};
    text-align: justify;
    color: ${theme.colors[color]};
  `}
`;
