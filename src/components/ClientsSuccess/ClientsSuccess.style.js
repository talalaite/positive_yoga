import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 1rem 1rem 1rem;
  text-align: left;
  @media only screen and (min-width: 768px) {
    max-width: 45.625rem;
    margin: 0 auto;
  }
`;

export const Wrapper = styled.div`
  @media only screen and (min-width: 768px) {
    display: flex;
  }
`;

export const Block = styled.div`
  @media only screen and (min-width: 768px) {
    width: 21rem;
    margin: 0 auto;
    margin-top: 2rem;
  }
`;

export const Title = styled.h3`
  font-weight: 800;
  margin-top: 3rem;
  @media only screen and (min-width: 768px) {
    text-align: center;
  }
`;
