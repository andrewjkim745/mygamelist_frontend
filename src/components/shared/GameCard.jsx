import React from 'react'
import '../styles/GameCard.css'
import Image from 'react-image-resizer'



const GameCard = (props) => {
    return (
        <div className='card'>
            <div className='title'>
            <h1 className={props.title.length < 15 ? 'game-title' : 'game-title-wrap'}>{props.title} </h1>
            </div>
            <div>
                <Image
                 src={props.image} 
                 height={350}
                 width={320}
                 />
            </div>
            <div>
                <p>{props.genre}</p>
            </div>



        </div>
    )
}

export default GameCard 