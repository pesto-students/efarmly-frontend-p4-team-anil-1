import React from 'react';

import CategoriesJSON from '../../data/categories';
import Category from '../atoms/category';
import expenseIcon from '../../assets/icons/Expenses_icon.png';
import { CategoriesContainer } from '../../styles/CategoryStyle';

export const Categories = () => {
  const { data } = CategoriesJSON;
  const categories = Object.keys(data);
  const component = categories.map((item) => {
    const { name, icon } = data[item];
    return (
      <CategoriesContainer>
        <Category name={name} icon={expenseIcon} />
      </CategoriesContainer>
    );
  });
  return component.map((item) => item);
};
