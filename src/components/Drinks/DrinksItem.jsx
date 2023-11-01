import { Item, Image, Title, SeeMore, Wrapper } from './DrinksItem.styled';
import DefaultImage from '../../assets/images/drinkPage/coctailPlaceholder.png';

const DrinksItem = ({ drinkThumb, drinkTitle, id }) => {
  return (
    <Item>
      <Image
        src={drinkThumb}
        alt={drinkTitle}
        onError={e => {
          e.currentTarget.src = DefaultImage;
        }}
      />
      <Wrapper>
        <Title>{drinkTitle}</Title>

        <SeeMore to={`/drinks/${id}`}>See more</SeeMore>
      </Wrapper>
    </Item>
  );
};

export default DrinksItem;
