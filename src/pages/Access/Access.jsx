import React from 'react';
import * as S from './Access.style';
import { PlansOptions, Program } from '../../components';

const Access = () => (
  <S.Block>
    <S.OrdersCount>
      Over
      <S.Bold> 52 147 </S.Bold>
      plans ordered.
    </S.OrdersCount>
    <S.Title>Get access to your yoga program now!</S.Title>
    <S.Wrapper>
      <PlansOptions />
      <Program />
    </S.Wrapper>
  </S.Block>
);
export default Access;
