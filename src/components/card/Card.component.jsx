import React from 'react';
import './Card.styles.css';

const Card = ({ monster }) => {
    return (
        <div className='card'>
            <img alt='robot' src={'https://robohash.org/' + monster.id} />
            <h1>{monster.name}</h1>
            <p>{monster.email}</p>
        </div >

    )

}
export default Card