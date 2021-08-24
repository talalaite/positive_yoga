import React from 'react';
import * as S from './StickyDiscount.style';

import Label from '../../assets/Label.svg';

const StickyDiscount = () => (
  <S.Block>
    <S.Label src={Label} alt="label" />
    <S.Text>
      <S.Bold>50% </S.Bold>
      discount only valid for
      <S.Bold> 00:15:49</S.Bold>
    </S.Text>
  </S.Block>
);

export default StickyDiscount;
