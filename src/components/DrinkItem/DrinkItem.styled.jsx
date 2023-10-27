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
    border-radius: 8px;

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
    width: 100%;
    height: 75px;
    margin-bottom: 18px;
    overflow: hidden;

    @media screen and (min-width: 768px) {
        margin-bottom: 24px;
        height: 110px;
    }

    @media screen and (min-width: 1440px) {
        height: 96px;
         white-space: normal;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    }
`;

export const SeeMoreBtn = styled.button`
   min-width: 143px; 
   border-radius: 42px;
   padding: 14px 40px;
   margin-right: 8px;
`;