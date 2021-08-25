import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 1rem;
  box-shadow: 0px 16px 32px rgba(57, 53, 60, 0.08);
  padding: 1rem;
  margin-bottom: 1rem;
  @media only screen and (min-width: 768px) {
    width: calc(100% / 3 - 2rem);
    &:not(:last-child) {
      margin-right: 1rem;
    }
  }
`;

export const PersonalDetails = styled.h5`
  font-size: 0.938rem;
  font-weight: 600;
  margin: 0;
`;

export const City = styled.span`
  font-size: 0.75rem;
`;

export const Stars = styled.div`
  padding: 1rem 0;
`;

export const Star = styled.img``;

export const Picture = styled.img``;

export const Story = styled.p`
  font-size: 1rem;
  font-weight: 400;
`;
