import React from 'react';
import Client from './Client';

import Star from '../../assets/Star.svg';
import Emily from '../../assets/Emily.svg';

export default {
  title: 'Client',
  component: Client,
};

export const ClientStory = () => (
  <Client
    name="Emily"
    age="28"
    city="Delaware, NJ"
    stars={Star}
    picture={Emily}
    story="I have been using this program for 3 months now and It helped me to lose 16lbs, taught me how to breathe properly and now I look forward to my workout. Great challenges for different problem zones. Definitely recommend to anyone that wants to lose weight and feel better without long hour at the gym or exhausting workouts."
  />
);
