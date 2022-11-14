import React from 'react';

import { Route, Routes } from 'react-router-dom';

import Home from './Home';
import Transactions from './Transactions';

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/transaction" element={<Transactions />} />
    </Routes>
  );
}

export default Routers;
