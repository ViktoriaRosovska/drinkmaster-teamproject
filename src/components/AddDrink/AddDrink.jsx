import {
  ImageBgYellow,
  ImageWrap,
  MainDescription,
  MainLink,
  MainWrap,
  HeroContainer,
  SectionWrap,
} from './AddDrink.styled';

import heroImgMobS from '../../assets/images/heroImage/hero-mob@1x.png';
import heroImgTabS from '../../assets/images/heroImage/hero-tab@1x.png';
import heroImgDescS from '../../assets/images/heroImage/hero-desc@1x.png';
import heroImgMobL from '../../assets/images/heroImage/hero-mob@2x.png';
import heroImgTabL from '../../assets/images/heroImage/hero-tab@2x.png';
import heroImgDescL from '../../assets/images/heroImage/hero-desc@2x.png';

import PageTitle from '../PageTitle/PageTitle';

const AddDrink = () => {
  return (
    <>
      <HeroContainer>
        <SectionWrap>
          <MainWrap>
            <PageTitle title="Craft Your Perfect Drink with Drink Master" />
            <MainDescription>
              Unlock your inner mixologist with Drink Master, your one-stop
              destination for exploring, crafting, and mastering the world`s
              finest beverages.
            </MainDescription>
            <MainLink to="/add">Add drink</MainLink>
          </MainWrap>
          <ImageWrap>
            <picture>
              <source
                media="(min-width:1200px)"
                srcSet={`${heroImgDescS} 1x, ${heroImgDescL} 2x`}
              />
              <source
                media="(min-width:768px)"
                srcSet={`${heroImgTabS} 1x, ${heroImgTabL} 2x`}
              />
              <source
                media="(max-width:767px)"
                srcSet={`${heroImgMobS} 1x, ${heroImgMobL} 2x`}
              />
              <img src={heroImgDescS} alt="main-coctail" />
            </picture>
            <ImageBgYellow></ImageBgYellow>
          </ImageWrap>
        </SectionWrap>
      </HeroContainer>
    </>
  );
};

export default AddDrink;
