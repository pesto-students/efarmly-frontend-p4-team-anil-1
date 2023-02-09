import styled from '@emotion/styled';
import { flexbox } from '@mui/system';

export const MyCategory = styled.div((props) => ({
  width: '304px',
  height: '120px',
  left: 0,
  top: 0,
  background: '#FFFFFF',
  borderRadius: '70px 30px 30px 70px',
  border: '1px solid#1a2b3a',
}));

export const Eclipse = styled.div((props) => ({
  width: '80px',
  height: '80px',
  left: '20px',
  top: '20px',
  background: '#3BA867',
  opacity: 0.2,
}));

export const CategoryText = styled.span((props) => ({
  color: '#000',
  fontWeight: 'bold',
  float: 'right',
  margin: '20px',
}));
export const CategoryImage = styled.div((props) => ({
  padding: '20px',
}));

export const CategoriesContainer = styled.div((props) => ({
  display: 'inline-flex',
  margin: '20px',
}));
