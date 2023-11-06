import { styled } from '@mui/material/styles';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { CalendarSvgIcon } from './CalendarSvgIcon';

import { useFormikContext } from 'formik';

const transition = '500ms ease-in';

// const mainBorderColor = (props =>
//   props.value && props.error
//     ? 'var(--white-twenty-color)'
//     : props.value
//     ? 'green'
//     : 'var(--white-twenty-color)').toString();

const StyledDesktopDatePicker = styled(DesktopDatePicker)({
  '& .MuiInputBase-root': {
    borderRadius: '200px',
    border: '1px solid var(--white-twenty-color)',
    outline: 'none',
    fontSize: '14px',
    lineHeight: '1.28',
    color: 'var(--white-fifty-color)',
    backgroundColor: 'transparent',
    transition: `border 500ms ease-in`,
  },

  '& .MuiInputBase-root:hover': {
    border: '1px solid var(--white-fifty-color)',
  },

  '& .MuiTextField-root': {
    padding: '18px 24px',
  },

  '& .MuiOutlinedInput-root': {
    fontSize: '14px',
    lineHeight: '1.28',
    color: 'var(--white-fifty-color)',
    backgroundColor: 'transparent',
    paddingRight: '18px',
  },

  '& .MuiInputBase-input': {
    padding: '18px 24px',
  },

  '& .MuiIconButton-root': {
    marginRight: '0px',
  },

  '& .Mui-error': {
    transition: `border ${transition} color ${transition}`,
    border: '1px solid var(--red-error-fifty-color)',
  },

  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
});

export default function BirthDate() {
  const { setFieldValue, errors } = useFormikContext();

  return (
    <StyledDesktopDatePicker
      name="birthDate"
      value={null}
      onChange={value => {
        const updatedValue = value ? value.format('DD MMM YYYY') : '';
        setFieldValue('birthDate', updatedValue);
      }}
      disableFuture
      showDaysOutsideCurrentMonth
      slots={{
        openPickerIcon: CalendarSvgIcon,
      }}
      slotProps={{
        textField: {
          fullWidth: true,
          placeholder: 'dd/mm/yyyy',
          error: !!errors.birthDate,
        },
      }}
      format="DD/MM/YYYY"
      defaultValue={'dd/mm/yyyy'}
    />
  );
}
