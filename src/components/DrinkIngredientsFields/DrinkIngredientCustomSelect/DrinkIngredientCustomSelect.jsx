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
        ? `${props => props.theme.color}`
        : `${props => props.theme.borderSelectColor}`,
      backgroundColor: 'transparent',
      justifyContent: 'flex-end',
      borderRadius: '200px',
      height: '100%',
      width: '100%',
      position: 'relative',
      paddingLeft: '18px',
      color: `${props => props.theme.color}`,
      '&:hover': {
        borderColor: `${props => props.theme.color}`,
      },
    }),
    singleValue: baseStyles => ({
      ...baseStyles,
      ...props,
      color: `${props => props.theme.color}`,
      textAlign: 'right',
    }),

    valueContainer: baseStyles => ({
      ...baseStyles,

      justifyContent: 'flex-start',
      alignItems: 'center',

      color: `${props => props.theme.color}`,
    }),
    indicatorsContainer: baseStyles => ({
      ...baseStyles,
      ...props,
      paddingLeft: '16px',
      paddingRight: '16px',
      justifyContent: 'flex-end',
      alignContent: 'center',
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
    input: baseStyles => ({
      ...baseStyles,
      color: `${props => props.theme.color}`,
    }),
    indicatorSeparator: baseStyles => ({
      ...baseStyles,
      display: 'none',
    }),
    dropdownIndicator: (baseStyles, { isFocused }) => ({
      ...baseStyles,
      color: `${props => props.theme.color}`,
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
