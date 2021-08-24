import React from 'react';
import ProgramPoint from './ProgramPoint';

import YogaProgram from '../../assets/YogaProgram.svg';

export default {
  title: 'ProgramPoint',
  component: ProgramPoint,
};

export const ProgramPointStory = () => (
  <ProgramPoint
    src={YogaProgram}
    title="A personalized yoga program"
    subtitle="Completely safe and focused on your key goals"
  />
);
