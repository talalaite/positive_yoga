import React from 'react';
import * as S from './PlansOptions.style';
import Button from '../Button/Button';
import SafeCheckout from '../../assets/SafeCheckout.svg';

const PlansOptions = () => (
  <S.Container>
    <S.Subtitile>
      Choose your plan and get
      <S.OrangeText> 7 days free trial</S.OrangeText>
    </S.Subtitile>
    <Button>Get your plan</Button>
    <S.Text>
      After 7 days free trial subscription payment is automatically charged from
      your account unless it is canceled at least 24 hours before the end of the
      trial period.
    </S.Text>
    <S.Text>
      By choosing a payment method you agree to the
      <S.BlueText> T&Cs </S.BlueText>
      and
      <S.BlueText> Privacy Policy</S.BlueText>
    </S.Text>
    <S.SafeCheckout src={SafeCheckout} alt="Safe Checkout" />
  </S.Container>
);

export default PlansOptions;
