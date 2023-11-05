import styled from 'styled-components';

export const HeaderCont = styled.header`
  background-color: ${props => props.theme};

  @media screen and (max-width: 1439.99px) {
    position: ${props => (props.isOpenBurgerMenu ? 'fixed' : 'static')};
    width: ${props => (props.isOpenBurgerMenu ? '100vw' : '')};
    z-index: 5001;
  }

  padding: 20px;
  border-bottom: 1px solid var(--white-twenty-color);
  min-width: 320px;

  @media screen and (min-width: 768px) {
    padding: 20px 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 28px 100px;
  }
`;

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  min-width: 320px;
  max-width: 375px;

  @media screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
    max-width: 768px;
  }

  @media screen and (min-width: 1440px) {
    padding-left: 20px;
    padding-right: 20px;
    max-width: 1280px;
  }
`;

export const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const HeaderList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media screen and (min-width: 1440px) {
    > li:first-child {
      margin-right: 224px;
    }
    column-gap: 16px;
  }
`;

export const HeaderItem = styled.li`
  &.push-right {
    margin-left: auto;
  }
  @media screen and (min-width: 1440px) {
    display: flex;
  }
`;

export const LastHeaderItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;

  @media screen and (min-width: 768px) {
    gap: 24px;
  }

  @media screen and (min-width: 1440px) {
    gap: 28px;
  }
`;
// export const Container = styled.div`
//   min-width: 320px;
//   margin-left: auto;
//   margin-right: auto;
//   padding: 20px;
//   display: flex;
//   flex-direction: row;

//   @media screen and (min-width: 375px) {
//     width: 375px;
//   }

//   @media screen and (min-width: 768px) {
//     width: 768px;
//     padding: 28px 32px;
//   }

//   @media screen and (min-width: 1440px) {
//     width: 1440px;
//     padding-left: 100px;
//     padding-right: 100px;
//   }
// `;

// export const NavCont = styled.ul`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   gap: 71px;
//   @media screen and (min-width: 375px) and (max-width: 767px) {
//     width: 768px;
//     gap: 224px;
//   }
//   @media screen and (min-width: 768px) {
//     gap: 375px;
//   }
// `;
