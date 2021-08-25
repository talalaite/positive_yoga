import React from 'react';
import { StickyDiscount, Header, ClientsSuccess } from './components';
import { Access, StartToday } from './pages';

const App = () => (
  <>
    <StickyDiscount />
    <Header />
    <Access />
    <ClientsSuccess />
    <StartToday />
  </>
);

export default App;
