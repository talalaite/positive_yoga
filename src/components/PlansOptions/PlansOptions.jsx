import React from 'react';
import * as S from './PlansOptions.style';
import Button from '../Button/Button';
import SafeCheckout from '../../assets/SafeCheckout.svg';

const PlansOptions = () => (
  <S.Container>
    <S.Subtitle>
      Choose your plan and get
      <S.OrangeText> 7 days free trial</S.OrangeText>
    </S.Subtitle>

    <S.Form>
      <S.PlanGroup>
        <div>
          <div>
            <S.PlanPeriod>6 month plan</S.PlanPeriod>
            <S.Discount> Save 50%</S.Discount>
          </div>
          <S.Wrapper>
            <S.PricePerMonth>$9.99 </S.PricePerMonth>
            <S.SimpleText>/ month</S.SimpleText>
          </S.Wrapper>
          <div>
            <S.LineThrough>$119.94</S.LineThrough>
            <S.OrangePrice>$59.94 </S.OrangePrice>
            <S.SimpleText>billed every 6 months</S.SimpleText>
          </div>
        </div>
        <S.Input type="radio" name="plan" />
      </S.PlanGroup>

      <S.PlanGroup>
        <div>
          <div>
            <S.PlanPeriod>3 month plan</S.PlanPeriod>
          </div>
          <S.Wrapper>
            <S.PricePerMonth>$14.99 </S.PricePerMonth>
            <S.SimpleText>/ month</S.SimpleText>
          </S.Wrapper>
          <div>
            <S.LineThrough>$59.97</S.LineThrough>
            <S.OrangePrice>$44.97 </S.OrangePrice>
            <S.SimpleText>billed every 3 months</S.SimpleText>
          </div>
        </div>
        <S.Input type="radio" name="plan" />
      </S.PlanGroup>

      <S.PlanGroup>
        <div>
          <div>
            <S.PlanPeriod>1 month plan</S.PlanPeriod>
          </div>
          <S.Wrapper>
            <S.PricePerMonth>$19.99 </S.PricePerMonth>
            <S.SimpleText>/ month</S.SimpleText>
          </S.Wrapper>
          <div>
            <S.SimpleText>Billed monthly</S.SimpleText>
          </div>
        </div>
        <S.Input type="radio" name="plan" />
      </S.PlanGroup>
    </S.Form>

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
