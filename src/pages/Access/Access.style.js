import styled from 'styled-components';

export const Block = styled.div`
  padding: 0 1rem;
  text-align: left;
  @media only screen and (min-width: 768px) {
    text-align: center;
    padding-top: 3rem;
  }
`;

export const OrdersCount = styled.p`
  color: #000000;
  font-size: 0.875rem;
  font-weight: 400;
  margin: 1rem 0 0 0;
  letter-spacing: 0.031rem;
`;

export const Bold = styled.span`
  font-weight: 700;
`;

export const Title = styled.h1`
  color: #000000;
  font-size: 1.75rem;
  font-weight: 800;
  margin-top: 0.5rem;
`;
