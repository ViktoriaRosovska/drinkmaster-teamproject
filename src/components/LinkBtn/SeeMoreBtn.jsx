import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './SeeMoreBtn.styled';

const SeeMoreBtn = ({navLink}) => {
    return (
        <Link to={navLink}>
          <Button type="button">See more</Button>
        </Link>
    )
};

export default SeeMoreBtn;