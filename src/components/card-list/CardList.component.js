import React from 'react';
import './CardList.styles.css'
import Card from '../card/Card.component'
const CardList = ({ monsters }) => {

    return (
        <div className='cardlistholder'>
            {
                monsters.map((monster) => {
                    return <Card key={monster.id} monster={monster} />
                })
            }
        </div>
    )
}

export default CardList