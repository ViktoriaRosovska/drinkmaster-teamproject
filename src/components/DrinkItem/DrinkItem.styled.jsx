import styled from "styled-components";

export const Card = styled.li`
    width: 335px;

    @media screen and (min-width: 768px) {
        width: 342px;
    }

    @media screen and (min-width: 1440px) {
        width: 400px;
    }
`;

export const CardImage = styled.img`
    width: 100%;
    height: auto;
    margin-bottom: 18px;

    @media screen and (min-width: 768px) {
        margin-bottom: 24px;
    }
`;

export const DrinkName = styled.h2`
    margin-bottom: 4px;
`;

export const IsAlco = styled.p`
    margin-bottom: 18px;

    @media screen and (min-width: 768px) {
        margin-bottom: 24px;
    }
`;

export const Description = styled.p`
    margin-bottom: 18px;

    @media screen and (min-width: 768px) {
        margin-bottom: 24px;
    }
`;

export const SeeMoreBtn = styled.button`
   min-width: 143px; 
   border-radius: 42px;
   padding: 14px 40px;
   margin-right: 8px;
`;