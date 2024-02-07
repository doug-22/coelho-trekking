'use client';

import Image from 'next/image';
import Logo from '../../../public/assets/logo.png';
import { Links, MenuMobile, Title, Wrapper, WrapperLogo } from './styles';
import { useState } from 'react';
import useMedia from '@/hooks/useMedia';
import { IoMdMenu } from 'react-icons/io';
import theme from '@/styles/theme';

export const Header = () => {
  const mobile = useMedia(48.8);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleRedirectMenu = (
    url: 'about-me' | 'products' | 'photos' | 'contacts'
  ) => {
    window.location.href = `#${url}`;
    setMenuOpen(false);
  };

  return (
    <Wrapper>
      <WrapperLogo>
        <Image src={Logo} alt="Logo" width={50} height={50} />
        <Title>
          COELHO TREKKING <span>Lençóis Maranhenses</span>
        </Title>
      </WrapperLogo>
      <Links>
        <li onClick={() => handleRedirectMenu('about-me')}>Sobre mim</li>
        <li onClick={() => handleRedirectMenu('products')}>Serviços</li>
        <li onClick={() => handleRedirectMenu('contacts')}>Contatos</li>
        <li onClick={() => handleRedirectMenu('photos')}>Fotos</li>
      </Links>
      {mobile && (
        <MenuMobile>
          <IoMdMenu
            onClick={() => setMenuOpen(!menuOpen)}
            size={30}
            color={theme.colors.secondary}
          />
          {menuOpen && (
            <ul className="menu-mobile-options">
              <li onClick={() => handleRedirectMenu('about-me')}>Sobre mim</li>
              <li onClick={() => handleRedirectMenu('products')}>Serviços</li>
              <li onClick={() => handleRedirectMenu('contacts')}>Contatos</li>
              <li onClick={() => handleRedirectMenu('photos')}>Fotos</li>
            </ul>
          )}
        </MenuMobile>
      )}
    </Wrapper>
  );
};
