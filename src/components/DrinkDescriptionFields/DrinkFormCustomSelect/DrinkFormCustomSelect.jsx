import { AddFormSelect } from '../DrinkFormCustomSelect/DrinkFormCustomSelect.styled';

const DrinkFormCustomSelect = ({
  placeholder,
  options,
  name,
  value,
  onChange,
  ...props
}) => {
  const styles = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      ...props,
      boxShadow: '0 !important',

      borderColor: state.isFocused
        ? 'var(--white-color)'
        : 'var(--white-fifty-color)',

      backgroundColor: 'transparent',
      justifyContent: 'flex-end',
      border: 'none',
      height: '34px',
      position: 'relative',
      color: `${props => props.theme.color}`,
      borderBottomWidth: '1px',
      borderBottomStyle: 'solid',

      borderRadius: '0',
      '&:hover': {
        borderColor: `${props => props.theme.color}`,
      },
    }),
    singleValue: baseStyles => ({
      ...baseStyles,
      color: `${props => props.theme.color}`,

      textAlign: 'right',
    }),
    input: baseStyles => ({
      ...baseStyles,
      width: '300px',
      color: `${props => props.theme.color}`,
    }),
    valueContainer: baseStyles => ({
      ...baseStyles,
      width: '131px',
      justifyContent: 'flex-end',
      alignItems: 'flex-start',
      marginRight: '18px',
      color: `${props => props.theme.color}`,
      borderColor: `${props => props.theme.color}`,
      marginBottom: '14px',
    }),
    indicatorsContainer: baseStyles => ({
      ...baseStyles,
      ...props,
      width: '100%',
      justifyContent: 'flex-end',
      position: 'absolute',
      top: '0',
      padding: '0',
      color: `${props => props.theme.color}`,
    }),
    menu: baseStyles => ({
      ...baseStyles,
      borderRadius: '12px',
      backgroundColor: '#161F37',
      color: 'var(--white-forty-color)',
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
      color: `${props => props.theme.backgroundColor}`,

      padding: '0',
      '&:hover': {
        color: `${props => props.theme.color}`,
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
