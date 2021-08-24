import React from 'react';
import * as S from './Header.style';
import Logo from '../../assets/Logo.svg';

const Header = () => (
  <S.Block>
    <S.Logo src={Logo} alt="Positive Yoga" />
  </S.Block>
);

export default Header;
