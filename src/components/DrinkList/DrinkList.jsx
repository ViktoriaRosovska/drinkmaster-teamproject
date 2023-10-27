import React from 'react';
import DrinkItem from 'components/DrinkItem/DrinkItem';
import { CardList } from './DrinkList.styled';

const DrinkList = () => {
     const drinks = [
    {
      "_id": {
        "$oid": "639b6de9ff77d221f190c50f"
      },
      "drink": "Quentin",
      "alcoholic": "Alcoholic",
      "description": "Quentin is a refreshing cocktail that combines the flavors of citrus and mint. It is made with fresh lime juice, orange liqueur, and a touch of mint syrup. The drink is served over ice and garnished with a sprig of mint. It is the perfect beverage for a hot summer day.",
      "drinkThumb": "https://ftp.goit.study/img/drinkify/recipes/Quentin.jpg",
      },
    {
      "_id": {
        "$oid": "639b6de9ff77d221f190c508"
      },
      "drink": "Irish Coffee",
      "alcoholic": "Alcoholic",
      "description": "Irish Coffee is a classic hot cocktail that combines the richness of coffee with the smoothness of Irish whiskey. It is made by pouring hot coffee into a glass, adding a shot of Irish whiskey, and topping it off with a dollop of whipped cream. The warmth of the drink and the sweetness of the cream make it a comforting and indulgent treat.",
      "drinkThumb": "https://ftp.goit.study/img/drinkify/recipes/Irish_Coffee.jpg",
     },
    {
      "_id": {
        "$oid": "639b6de9ff77d221f190c50d"
      },
      "drink": "Iced Coffee Fillip",
      "alcoholic": "Alcoholic",
      "description": "Iced Coffee Fillip is a cool and creamy beverage that combines the flavors of iced coffee, vanilla syrup, and chocolate sauce. It is made by blending ice, coffee, milk, vanilla syrup, and chocolate sauce together until smooth. The result is a refreshing and indulgent drink that is perfect for a hot summer day or as a pick-me-up in the afternoon.",
      "drinkThumb": "https://ftp.goit.study/img/drinkify/recipes/Iced_Coffee_Fillip.jpg",
      },
    {
      "_id": {
        "$oid": "639b6de9ff77d221f190c51e"
      },
      "drink": "Affair",
      "alcoholic": "Alcoholic",
      "description": "Affair is a seductive and sophisticated cocktail that combines a mix of spirits and fruit juices. It is made with vodka, peach schnapps, cranberry juice, and orange juice. The combination of flavors creates a balanced and tantalizing drink that is sure to impress. It is best enjoyed in the company of someone special.",
      "drinkThumb": "https://ftp.goit.study/img/drinkify/recipes/Affair.jpg",
     },
    {
      "_id": {
        "$oid": "639b6de9ff77d221f190c520"
      },
      "drink": "Avalon",
      "alcoholic": "Alcoholic",
      "description": "Avalon is a tropical and fruity cocktail that transports you to a sunny beach with its blend of rum and tropical fruit juices. It is made with white rum, pineapple juice, orange juice, and a splash of grenadine. The result is a vibrant and refreshing drink that captures the essence of paradise. Sit back, relax, and enjoy the taste of the tropics.",
      "drinkThumb": "https://ftp.goit.study/img/drinkify/recipes/Avalon.jpg",
     },
    {
      "_id": {
        "$oid": "639b6de9ff77d221f190c535"
      },
      "drink": "Orange Crush",
      "alcoholic": "Alcoholic",
      "description": "Orange Crush is a citrusy and effervescent cocktail that combines the flavors of orange vodka and fresh orange juice. It is made by muddling fresh orange slices with sugar, adding orange vodka and ice, and topping it off with sparkling water. The result is a bright and refreshing drink that is perfect for summer gatherings and brunches.",
      "drinkThumb": "https://ftp.goit.study/img/drinkify/recipes/Orange_Crush.jpg",
        },
  ];
  
  return (
    <>
      {drinks.length > 0 ? (<CardList>
            {drinks.map(( drink ) => {
                console.log(drink)
                return <DrinkItem key={drink._id.$oid} drinkData={drink} />
            })}
      </CardList>) : (<NotFound/>)}

      </>
   )
}

export default DrinkList;