// import { styled } from '@mui/material/styles';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// export const BirthDate = styled(DatePicker)({
//   '.MuiOutlinedInput-root': {
//     color: 'rgba(243, 243, 243, 0.3)',
//     borderRadius: 200,
//     borderWidth: 0,
//     borderColor: '#2196f3',
//     border: '0px solid',
//     backgroundColor: 'transparent',
//     outline: 'none',
//   },

//   '.css-i4bv87-MuiSvgIcon-root': {
//     fill: 'rgba(243, 243, 243, 0.3)',
//   },
//   '.css-cvgr87-MuiFormControl-root-MuiTextField-root': {
//     width: '285px',
//   },
//   '.css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root': {
//     borderColor: 'rgba(243, 243, 243, 0.3)',
//   },

//   '.css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline ':
//     {
//       // С ОШИБКОЙ
//       borderColor: 'green',
//     },
//   '.css-nxo287-MuiInputBase-input-MuiOutlinedInput-input': {
//     width: '285px',
//   },
// });

import { styled } from '@mui/material/styles';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const StyledStaticDatePicker = styled(DatePicker)({
  '.MuiPickersToolbar-root': {
    color: 'rgba(243, 243, 243, 0.3)',
    borderRadius: 200,
    borderWidth: 1,
    borderColor: 'rgba(243, 243, 243, 0.3)',
    border: '1px solid',
    backgroundColor: 'transparent',
  },
  '.MuiPickersToolbar-content': {
    color: 'red',
    borderRadius: 7,
    borderWidth: 0,
    borderColor: '#e91e63',
    border: '0px solid',
    backgroundColor: '#f8bbd0',
  },
});

export default function StyledPickerContainer() {
  return <StyledStaticDatePicker />;
}
