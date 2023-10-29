import Select from 'react-select';

const Selection = ({ placeholder, options }) => {
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
    }),
    indicatorSeparator: baseStyles => ({
      ...baseStyles,
      display: 'none',
    }),
    placeholder: baseStyles => ({
      ...baseStyles,
      color: 'white',
    }),
    dropdownIndicator: baseStyles => ({
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
      />
    </>
  );
};

export default Selection;
