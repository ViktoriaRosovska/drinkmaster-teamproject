import { styled } from '@mui/material/styles';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { CalendarSvgIcon } from './CalendarSvgIcon';

import { useFormikContext } from 'formik';

const transition = '300ms ease-in';

const StyledDesktopDatePicker = styled(DesktopDatePicker)(
  ({ err, curValue }) => {
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
            ? 'var(--red-error-fifty-color)'
            : curValue
            ? 'var(--green-success-fifty-color)'
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
  }
);
const PopperDateStyles = {
  '& .MuiPaper-root': {
    backgroundColor: 'var(--dark-blue-color)',
    color: 'var(--white-color)',
  },

  '& .MuiIconButton-root': {
  color: 'var(--white-color)',
},

'& .MuiIconButton-root': {
  color: 'var(--white-color)',
},

'& .MuiIconButton-root': {
   color: 'var(--white-color)',
},

'& .Mui-disabled.Mui-disabled.MuiIconButton-edgeStart': {
   color: 'rgba(239, 237, 232, 0.4)',
},

'& .MuiDayCalendar-weekDayLabel': {
  color: 'rgba(243, 243, 243, 0.5)',
},

'& .MuiPickersDay-dayOutsideMonth': {
  color: 'var(--white-color)',
},

'& .MuiPickersDay-root.Mui-disabled.Mui-disabled': {
  color: 'rgba(243, 243, 243, 0.2)',
},

'& .MuiPickersDay-today.Mui-selected.MuiPickersDay-root': {
  backgroundColor: 'var(--white-color)',
  color: 'var(--black-color)',
 
},

'& .MuiPickersDay-today.Mui-selected': {
border: '1px solid rgba(243, 243, 243, 0.5)',
},

'& .MuiPickersDay-root': {
  color:' var(--white-color)',
},

 }

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
        popper: {
          sx: PopperDateStyles,
        }
      }}
      format="DD/MM/YYYY"
      defaultValue={'dd/mm/yyyy'}
    />
  );
}
