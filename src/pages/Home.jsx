import React from 'react';

import { Typography } from '@mui/material';
import Category from '../components/atoms/category';
import expenseIcon from '../assets/icons/Expenses_icon.png';
import { Categories } from '../components/molecules/Categories';

function Home() {
  return (
    <div>
      <Typography variant="h3"></Typography>
      <Categories />
    </div>
  );
}

export default Home;
