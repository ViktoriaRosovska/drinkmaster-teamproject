import Selection from './Select';
import { useState } from 'react';
import { Filter, Wrapper } from './DrinksSearch.styled';

const DrinksSearch = ({ updateData }) => {
  const [filter, setFilter] = useState('');
  const handleChange = e => {
    const { value } = e.currentTarget;
    setFilter(value);
    updateData(value);
  };

  const categories = [
    'Ordinary Drink',
    'Cocktail',
    'Shake',
    'Other/Unknown',
    'Cocoa',
    'Shot',
    'Coffee/Tea',
    'Homemade Liqueur',
    'Punch/Party Drink',
    'Beer',
    'Soft Drink',
  ];

  const ingredients = [
    'Highball glass',
    'Cocktail glass',
    'Old-fashioned glass',
    'Whiskey Glass',
    'Collins glass',
    'Pousse cafe glass',
    'Champagne flute',
    'Whiskey sour glass',
    'Cordial glass',
    'Brandy snifter',
    'White wine glass',
    'Nick and Nora Glass',
    'Hurricane glass',
    'Coffee mug',
    'Shot glass',
    'Jar',
    'Irish coffee cup',
    'Punch bowl',
    'Pitcher',
    'Pint glass',
    'Copper Mug',
    'Wine Glass',
    'Beer mug',
    'Margarita/Coupette glass',
    'Beer pilsner',
    'Beer Glass',
    'Parfait glass',
    'Mason jar',
    'Margarita glass',
    'Martini Glass',
    'Balloon Glass',
    'Coupe Glass',
  ];

  return (
    <Wrapper>
      <Filter
        type="text"
        placeholder="Enter the text"
        value={filter}
        onChange={handleChange}
      />
      <Selection placeholder="All categories" options={categories} />
      <Selection placeholder="Ingredients" options={ingredients} />
    </Wrapper>
  );
};

export default DrinksSearch;
