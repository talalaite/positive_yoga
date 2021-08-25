import React from 'react';
import * as S from './ClientsSuccess.style';
import { ClientsInfo } from './ClientsInfo';
import Client from '../Client/Client';
import Button from '../Button/Button';

const ClientsSuccess = () => (
  <S.Container>
    <S.Title>Hear success stories from our clients</S.Title>
    <S.Wrapper>
      {ClientsInfo.map((item) => (
        <Client
          key={item.id}
          name={item.name}
          age={item.age}
          city={item.city}
          stars={item.stars}
          picture={item.picture}
          story={item.story}
        />
      ))}
    </S.Wrapper>
    <S.Block>
      <Button>Get your plan</Button>
    </S.Block>
  </S.Container>
);

export default ClientsSuccess;
