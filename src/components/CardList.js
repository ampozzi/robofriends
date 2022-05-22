import React from 'react';
import Card from './Card';

const CardList=({robots})=>{
    return (
        <div>
            {
            robots.map((element,i) => {
                return(<Card 
                key={element.id} 
                id={element.id} 
                name={element.name} 
                username={element.username} 
                email={element.email}/>
                )})
            }
        </div>
    )
}

export default CardList;