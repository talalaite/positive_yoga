import React from 'react';
import PropTypes from 'prop-types';
import * as S from './ProgramPoint.style';

const ProgramPoint = ({ src, title, subtitle }) => (
  <S.Container>
    <S.Icon src={src} alt="icon" />
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
    </S.Wrapper>
  </S.Container>
);

ProgramPoint.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default ProgramPoint;
