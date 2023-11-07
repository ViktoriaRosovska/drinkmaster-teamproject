import { styled } from '@mui/material/styles';
import Pagination from '@mui/material/Pagination';

export const StyledPagination = styled(Pagination)({
  '& .MuiPagination-ul': {
    justifyContent: 'center',
  },
  '& li .Mui-selected': {
    color: `${props => props.theme.color}`,
    backgroundColor: 'rgba(64, 112, 205, 0.5)',
    ':hover': {
      backgroundColor: 'rgba(64, 112, 205, 0.5)',
    },
  },
  '& li .MuiPaginationItem-root': {
    color: '#f3f3f3',
  },
  '& .MuiPaginationItem-ellipsis': {
    color: '#f3f3f3',
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

// import styled from 'styled-components';

// export const PagContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding-top: 14px;
//   padding-bottom: 14px;
//   margin-top: 40px;
//   width: 295px;

// `;

// export const NumberContainer = styled.div`
//   display: flex;
//   gap: 18px;
//   align-items: center;
//   justify-content: center;
// `;

// export const Button = styled.button`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-color: transparent;
// `;

// export const NumberButton = styled.button`
//   background-color: transparent;
//   color: var(--white-color);
//   font-weight: 500;
//   font-size: 12px;
//   width: 27px;
//   height: 27px;
//   border-radius: 50%;

//   ${({active}) => active? `
//      background-color: var(--blue-fifty-color);
//   ` : ' '}

//   &:hover {
//     background-color: var(--blue-fifty-color);
//   }
// `;
