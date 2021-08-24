import styled from 'styled-components';

export const Block = styled.div`
  align-items: center;
  background-color: #90caf9;
  display: flex;
  justify-content: left;
  height: 3.5rem;
  @media only screen and (min-width: 768px) {
    justify-content: center;
  }
`;

export const Label = styled.img`
  margin: 0 1.125rem;
`;

export const Text = styled.p`
  color: #ffffff;
  font-size: 0.938rem;
  font-weight: 400;
  letter-spacing: 0.031rem;
`;

export const Bold = styled.span`
  font-weight: 600;
`;
