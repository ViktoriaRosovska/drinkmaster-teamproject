import React, { useState } from 'react';
import prev from '../../assets/images/paginator/prev.svg';
import next from '../../assets/images/paginator/next.svg';
import { ReactSVG } from 'react-svg';
import { Button, PagContainer, NumberButton, NumberContainer } from './Paginator.styled';

const Paginator = ({totalDrinks, drinksPerPage}) => {

    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(totalDrinks / drinksPerPage);

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    if (totalPages <= 1) {
        return null;
    };

    return (
        <PagContainer>
            <Button type='button' onClick={handlePrevPage} disabled={currentPage === 1}>
                <ReactSVG src={prev}/>
            </Button>
            <NumberContainer>
            {Array.from({ length: totalPages }, (_, index) => (
                <NumberButton
                    key={index}
                    onClick={() => setCurrentPage(index + 1)}
                    active={index + 1 === currentPage}
                >{index + 1 }</NumberButton>
            ))}
                </NumberContainer>
            <Button type='button' onClick={handleNextPage} disabled={currentPage === totalPages}>
                <ReactSVG src={next}/>
            </Button>
        </PagContainer>
    )
}


export default Paginator;