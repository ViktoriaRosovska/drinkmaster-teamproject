import { styled } from '@mui/material/styles';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { CalendarSvgIcon } from './CalendarSvgIcon';

import { useFormikContext } from 'formik';

const transition = '300ms ease-in';

const StyledDesktopDatePicker = styled(DatePicker)(({ err, curValue }) => {
  return {
    '& .MuiInputBase-root': {
      borderRadius: '200px',
      border: '1px solid var(--white-twenty-color)',
      outline: 'none',
      fontSize: '14px',
      lineHeight: '1.28',
      color: 'var(--white-fifty-color)',
      backgroundColor: 'transparent',
      transition: `border 300ms ease-in`,
      borderColor:
        err && curValue
          ? 'red'
          : curValue
          ? 'green'
          : 'var(--white-twenty-color)',
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

    ///////////////// Calendar ////////////////////

    // '& .MuiDateCalendar-root': {
    //   backgroundColor: 'var(--dark-blue-color)',
    //   borderRadius: '200',
    // },
  };
});

export default function BirthDate() {
  const { setFieldValue, errors, values } = useFormikContext();

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
      err={errors.birthDate}
      curValue={values.birthDate}
      slotProps={{
        textField: {
          fullWidth: true,
          placeholder: 'dd/mm/yyyy',
          error: !!errors.birthDate,
        },
        toolbar: {
          hidden: true,
        },
      }}
      format="DD/MM/YYYY"
      defaultValue={'dd/mm/yyyy'}
    />
  );
}
