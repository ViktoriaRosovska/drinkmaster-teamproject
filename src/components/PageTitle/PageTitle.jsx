import React from 'react';
import { Title } from './PageTitle.styled';

const PageTitle = ({title, forwardRef}) => {
    return (
        <Title ref={forwardRef}>{title}</Title>
    )
}  

export default PageTitle;