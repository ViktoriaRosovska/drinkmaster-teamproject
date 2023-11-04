import { AddFormSelect } from '../DrinkFormCustomSelect/DrinkFormCustomSelect.styled';

const DrinkFormCustomSelect = ({
  placeholder,
  options,
  name,
  value,
  onChange,
}) => {
  const styles = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      boxShadow: '0 !important',
      borderColor: state.isFocused
        ? 'var(--white-color)'
        : 'var(--white-fifty-color)',

      backgroundColor: 'transparent',
      justifyContent: 'flex-end',
      border: 'none',
      height: '34px',
      position: 'relative',
      color: 'red',
      borderBottom: state.isFocused
        ? '1px solid var(--white-color)'
        : '1px solid var(--white-fifty-color)',
      borderRadius: '0',
      '&:hover': {
        borderColor: 'var(--white-color)',
      },
    }),
    singleValue: baseStyles => ({
      ...baseStyles,
      color: 'white',
      textAlign: 'right',
    }),
    input: baseStyles => ({
      width: '300px',
    }),
    valueContainer: baseStyles => ({
      ...baseStyles,
      width: '131px',
      justifyContent: 'flex-end',
      alignItems: 'flex-start',
      marginRight: '18px',
      color: 'var(--white-color)',
      marginBottom: '14px',
    }),
    indicatorsContainer: baseStyles => ({
      ...baseStyles,
      color: 'green',
      width: '100%',
      justifyContent: 'flex-end',
      position: 'absolute',
      top: '0',
      padding: '0',
    }),
    menu: baseStyles => ({
      ...baseStyles,
      borderRadius: '12px',
      backgroundColor: '#161F37',
      width: '131px',
      top: '16px',
      right: '0',

      '&::-webkit-scrollbar': {
        width: '0px',
      },
    }),
    menuList: baseStyles => ({
      ...baseStyles,

      '&::-webkit-scrollbar': {
        width: '0px',
      },
    }),
    option: base => ({
      ...base,
      boxShadow: 'none',
      width: '100%',
      backgroundColor: 'transparent',
      '&:hover': {
        color: 'var(--white-color)',
      },
    }),

    indicatorSeparator: base => ({
      ...base,
      display: 'none',
    }),
    dropdownIndicator: (baseStyles, { isFocused }) => ({
      ...baseStyles,
      color: 'var(--white-color)',
      padding: '0',
      '&:hover': {
        color: 'var(--white-color)',
      },
      transition: 'transform 0.25s ease-out',
      transform: isFocused && 'rotate(180deg)',
    }),
  };
  const modifiedOptions = [];
  for (const option of options) {
    modifiedOptions.push({ value: option, label: option });
  }

  return (
    <>
      <AddFormSelect
        placeholder={placeholder}
        options={modifiedOptions}
        styles={styles}
        name={name}
        onChange={onChange}
        defaultValue={value}
      />
    </>
  );
};

export default DrinkFormCustomSelect;
