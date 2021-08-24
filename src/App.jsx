import React from 'react';
import { StickyDiscount, Header } from './components';
import { Access, StartToday } from './pages';

const App = () => (
  <>
    <StickyDiscount />
    <Header />
    <Access />

    <StartToday />
  </>
);

export default App;
