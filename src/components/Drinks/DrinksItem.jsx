import { Item, Image, Title, SeeMore, Wrapper } from './DrinksItem.styled';

const DrinksItem = ({ drinkThumb, drinkTitle, key }) => {
  return (
    <Item>
      <Image src={drinkThumb} alt={drinkTitle} />
      <Wrapper>
        <Title>{drinkTitle}</Title>
        <SeeMore to={`/drink/${key}`}>See more</SeeMore>
      </Wrapper>
    </Item>
  );
};

export default DrinksItem;
