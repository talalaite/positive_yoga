import React from 'react';
import * as S from './Program.style';
import { ProgramInfo } from './ProgramInfo';

import ProgramPoint from '../ProgramPoint/ProgramPoint';

const Program = () => (
  <S.Container>
    <S.Title>What&apos;s in my program?</S.Title>
    {ProgramInfo.map((item) => (
      <ProgramPoint
        key={item.id}
        src={item.src}
        title={item.title}
        subtitle={item.subtitle}
      />
    ))}
  </S.Container>
);

export default Program;
