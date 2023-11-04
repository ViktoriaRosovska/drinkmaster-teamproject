import Select from 'react-select';

const Selection = ({ placeholder, options, onChange }) => {
  const style = {
    control: baseStyles => ({
      ...baseStyles,
      borderRadius: '200px',
      backgroundColor: '#161F37',
      boxShadow: 'none',
      border: 0,
      width: 'auto',
      padding: '14px 24px',
    }),
    menu: baseStyles => ({
      ...baseStyles,
      borderRadius: '20px',
      backgroundColor: '#161F37',
      width: '199px',
      marginTop: '4px',
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
    dropdownIndicator: (baseStyles, { isFocused }) => ({
      ...baseStyles,
      color: 'var(--white-color)',
      '&:hover': {
        color: 'var(--white-color)',
      },
      transition: 'transform 0.25s ease-out',
      transform: isFocused && 'rotate(180deg)',
    }),
    indicatorSeparator: baseStyles => ({
      ...baseStyles,
      display: 'none',
    }),
    placeholder: baseStyles => ({
      ...baseStyles,
      color: 'white',
    }),
    input: baseStyles => ({
      ...baseStyles,
      color: 'white',
    }),
    option: baseStyles => ({
      ...baseStyles,
      backgroundColor: 'none',
      color: 'var(--white-fifty-color)',

      '&:hover': {
        color: 'var(--white-color)',
      },
    }),
    singleValue: baseStyles => ({
      ...baseStyles,
      color: 'white',
    }),
  };

  const modifiedOptions = [];
  for (const option of options) {
    modifiedOptions.push({ value: option, label: option });
  }

  return (
    <>
      <Select
        placeholder={placeholder}
        options={modifiedOptions}
        styles={style}
        onChange={onChange}
        isClearable={true}
        isSearchable={true}
      />
    </>
  );
};

export default Selection;
