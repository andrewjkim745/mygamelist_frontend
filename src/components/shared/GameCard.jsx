import React from 'react'
import '../styles/GameCard.css'



const GameCard = (props) => {
    return (
        <div className='card'>
            <div className='title'>
            <h1 className={props.title.length < 15 ? 'game-title' : 'game-title-wrap'}>{props.title} </h1>
            </div>
            <div>
                <img src={props.image} />
            </div>
            <div>
                <p>{props.genre}</p>
            </div>



        </div>
    )
}

export default GameCard 