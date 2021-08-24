import styled from 'styled-components';

export const Button = styled.button`
  background-color: #ff9b4e;
  border: none;
  border-radius: 0.5rem;
  box-shadow: 0px 16px 32px rgba(255, 155, 78, 0.24);
  color: #ffffff;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
  height: 3.5rem;
  padding: 0.5rem 2.5rem;
  margin-top: 0.5rem;
  text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.16);
  width: 100%;
  &:hover {
    background: #ec8b3f;
  }
  &:active {
    background: #91b83d;
  }
`;

export const Block = styled.div`
  max-width: 22rem;
`;
