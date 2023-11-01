import { styled } from '@mui/material/styles';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export const BirthDate = styled(DatePicker)({
  '.MuiOutlinedInput-root': {
    color: 'rgba(243, 243, 243, 0.3)',
    borderRadius: 200,
    borderWidth: 0,
    borderColor: '#2196f3',
    border: '0px solid',
    backgroundColor: 'transparent',
    outline: 'none',
  },

  '.css-i4bv87-MuiSvgIcon-root': {
    fill: 'rgba(243, 243, 243, 0.3)',
  },
  '.css-cvgr87-MuiFormControl-root-MuiTextField-root': {
    width: '285px',
  },
  '.css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline ':
    {
      // С ОШИБКОЙ
      borderColor: 'green',
    },
});
