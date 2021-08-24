import styled from 'styled-components';

export const Container = styled.div``;

export const Subtitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
`;

export const OrangeText = styled.span`
  color: #ff9b4e;
`;

export const Form = styled.form``;

export const PlanGroup = styled.div`
  align-items: center;
  border: 2px solid rgba(0, 0, 0, 0.08);
  border-radius: 1rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  padding: 1rem;
  &:hover {
    border: 2px solid #ff9b4e;
  }
`;

export const PlanPeriod = styled.span`
  font-size: 0.938rem;
  font-weight: 600;
`;

export const Discount = styled.span`
  background: #ffe082;
  border-radius: 0.375rem;
  font-size: 0.75rem;
  font-weight: 700;
  margin-left: 0.5rem;
  padding: 0.188rem 0.5rem;
`;

export const PricePerMonth = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
`;

export const SimpleText = styled.span`
  font-size: 0.875rem;
  font-weight: 400;
`;

export const Wrapper = styled.div`
  margin: 0.625rem 0 0.25rem 0;
`;

export const LineThrough = styled.span`
  margin-right: 0.5rem;
  text-decoration: line-through;
`;

export const OrangePrice = styled.span`
  color: #ff9b4e;
`;

export const Input = styled.input``;

export const Text = styled.p`
  font-size: 0.75rem;
  text-align: center;
`;

export const BlueText = styled.span`
  color: #90caf9;
`;

export const SafeCheckout = styled.img`
  display: block;
  margin: 0 auto;
`;
