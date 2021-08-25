import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Client.style';

import Star from '../../assets/Star.svg';

const Client = ({ name, age, city, stars, picture, story }) => (
  <S.Container>
    <S.PersonalDetails>{`${name}, ${age}`}</S.PersonalDetails>
    <S.City>{city}</S.City>
    <S.Stars>
      {Array.from(Array(stars)).map((element, index) => (
        <S.Star src={Star} alt="stars" key={index} /> // eslint-disable-line react/no-array-index-key
      ))}
    </S.Stars>
    <S.Picture src={picture} alt="Client picture" />
    <S.Story>{story}</S.Story>
  </S.Container>
);

Client.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
  picture: PropTypes.string.isRequired,
  story: PropTypes.string.isRequired,
};

export default Client;
