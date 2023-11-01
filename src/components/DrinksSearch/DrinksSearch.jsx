import Selection from './Select';
import { Filter, Wrapper } from './DrinksSearch.styled';

import { useDispatch, useSelector } from 'react-redux';
import { filterSelector } from '../../redux/filter/filterSelector';
import { setFilter } from '../../redux/filter/filterSlice';

const DrinksSearch = () => {
  const dispatch = useDispatch();
  const filter = useSelector(filterSelector);

  const changeFilter = event => {
    dispatch(setFilter(event.target.value));
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
        onChange={changeFilter}
        debounceTimeout={1000}
      />
      <Selection placeholder="All categories" options={categories} />
      <Selection placeholder="Ingredients" options={ingredients} />
    </Wrapper>
  );
};

export default DrinksSearch;
