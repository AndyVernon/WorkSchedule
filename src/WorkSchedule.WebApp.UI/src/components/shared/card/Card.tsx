import React from 'react';
import { CardProps } from './Card.Props';
import './Card.scss';

const Card = (props: CardProps) => {
    return (
        <React.Fragment key='card'>
            {props.cardNumber}
            {props.cardTitle}
        </React.Fragment>
    )
}

export default Card;