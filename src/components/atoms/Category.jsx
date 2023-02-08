import React from 'react';
import { CategoryImage, CategoryText, MyCategory } from '../../styles/CategoryStyle';
const imageBaseURL = '../../assets/icons/';

const Category = ({ name, icon }) => (
  <MyCategory>
    <CategoryImage>
      <CategoryText>{name}</CategoryText>
      <img src={icon} alt={name} />
    </CategoryImage>
  </MyCategory>
);

export default Category;
