import { IngredientSelect } from './DrinkIngredientCustomSelect.styled';

const DrinkIngredientCustomSelect = ({
  placeholder,
  options,
  name,
  onChange,
  ...props
}) => {
  const styles = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      boxShadow: state.isFocused ? 0 : 0,
      borderColor: state.isFocused
        ? 'var(--white-color)'
        : 'var(--white-fifty-color)',
      backgroundColor: 'transparent',
      justifyContent: 'flex-end',
      borderRadius: '200px',
      height: '100%',
      width: '100%',
      position: 'relative',
      paddingLeft: '18px',
      color: 'red',
      '&:hover': {
        borderColor: 'var(--white-color)',
      },
    }),
    singleValue: baseStyles => ({
      ...baseStyles,
      color: 'white',
      textAlign: 'right',
    }),

    valueContainer: baseStyles => ({
      ...baseStyles,

      justifyContent: 'flex-start',
      alignItems: 'center',

      color: 'var(--white-color)',
    }),
    indicatorsContainer: baseStyles => ({
      ...baseStyles,

      color: 'green',
      paddingLeft: '16px',
      paddingRight: '16px',
      justifyContent: 'flex-end',
      alignContent: 'center',
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
    modifiedOptions.push({ value: option._id.$oid, label: option.title });
  }

  return (
    <>
      <IngredientSelect
        placeholder={placeholder}
        options={modifiedOptions}
        styles={styles}
        name={name}
        onChange={onChange}
      />
    </>
  );
};

export default DrinkIngredientCustomSelect;
