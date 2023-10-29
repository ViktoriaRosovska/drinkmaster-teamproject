import React from 'react';
import prev from '../../assets/images/paginator/prev.svg';
import next from '../../assets/images/paginator/next.svg';
import { ReactSVG } from 'react-svg';
import { Button, PagContainer, NumberButton, NumberContainer } from './Paginator.styled';

const Paginator = () => {
    const totalPages = 8;
    // if (totalPage === 0) {
    //     return null
    // }

    // const handlePageChange = (newPage) => {

    // }

    return (
        <PagContainer>
            <Button type='button'>
                <ReactSVG src={prev}/>
            </Button>
            <NumberContainer>
            {Array.from({ length: totalPages }, (_, index) => (
                <NumberButton
                key={index}
                >{index + 1 }</NumberButton>
            ))}
                </NumberContainer>
            <Button type='button'>
                <ReactSVG src={next}/>
            </Button>
        </PagContainer>
    )
}

export default Paginator;