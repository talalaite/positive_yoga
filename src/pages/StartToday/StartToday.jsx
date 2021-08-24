import React from 'react';
import * as S from './StartToday.style';
import { PlansOptions, Program } from '../../components';

const StartToday = () => (
  <S.Block>
    <S.Title>Start your yoga program today!</S.Title>
    <S.Wrapper>
      <PlansOptions />
      <Program />
    </S.Wrapper>
  </S.Block>
);
export default StartToday;
