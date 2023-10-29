const DrinkIngridientList = ({ ingredients }) => {
  return (
    <>
      <p>Ingredients</p>
      <ul>
        {ingredients.map(({ title, measure }) => (
          <li key={title}>
            {/* {ingredientThumb ? (
              <img src={ingredientThumb} alt={title} />
            ) : (
              <div>default image</div>
            )}
            <div> */}

            <div>default image</div>
            <p>{title}</p>
            <p>{measure}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
export default DrinkIngridientList;
