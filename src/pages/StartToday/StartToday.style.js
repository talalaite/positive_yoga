import styled from 'styled-components';

export const Block = styled.div`
  padding: 0 1rem;
  text-align: left;
  margin-bottom: 4rem;
  @media only screen and (min-width: 768px) {
    max-width: 45.625rem;
    margin: 0 auto;
    text-align: center;
    padding-top: 3rem;
    margin-bottom: 7rem;
  }
`;

export const Title = styled.h1`
  color: #000000;
  font-size: 1.75rem;
  font-weight: 800;
  margin-top: 0.5rem;
`;

export const Wrapper = styled.div`
  text-align: left;
  @media only screen and (min-width: 768px) {
    display: flex;
  }
`;
