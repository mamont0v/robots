import React from 'react';
import style from './Card.module.css'
const Card = ({id, name, email}) => {
    return (
        <div className ={style.Card}>
            <img alt='robot' src={`https://robohash.org/${id}?200x200`}/>
            <div>
            <h2>{name}</h2>
                <p>
                    {email}s
                </p>
            </div>
        </div>
    )
}

export default Card