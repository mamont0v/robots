import React from 'react'
import Card from './Card/Card'
import style from './CardList.module.css'

const CardList = ({robots}) => {
    
    const allRobots = robots.map((el,i) => {
        return <Card 
        key = {i} //default key 
        id = {robots[i].id} 
        name = {robots[i].name} 
        email = {robots[i].email}/>
    })
    
    return (
        <div className = {style.CardList}>
          {allRobots}
        </div>
    )
}

export default CardList