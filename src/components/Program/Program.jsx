import React from 'react';
import * as S from './Program.style';
import Program from '../../assets/Program.svg';

const Program = () => (
  <S.Container>
    Hey
    <S.Circle src={Program} alt="program" />
  </S.Container>
);

export default Program;
