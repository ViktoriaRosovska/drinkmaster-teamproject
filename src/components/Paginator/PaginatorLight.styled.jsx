import { styled } from '@mui/material/styles';
import Pagination from '@mui/material/Pagination';

export const StyledPaginationLight = styled(Pagination)({
  '& .MuiPagination-ul': {
    justifyContent: 'center',
  },
  '& li .Mui-selected': {
  color: '#f3f3f3',
    backgroundColor: '#4070CD',
    ':hover': {
      backgroundColor: '#4070CD',
    },
  },
  '& li .MuiPaginationItem-root': {
    color: '#0A0A11',
  },
  '& .MuiPaginationItem-ellipsis': {
    color: '#0A0A11',
  },
});
export const stackStyles = {
  marginTop: '54px',
  // marginBottom: '94px',
  justifyContent: 'center',

  '@media (min-width: 768px)': {
    marginTop: '94px',
    // marginBottom: '154px',
  },
};