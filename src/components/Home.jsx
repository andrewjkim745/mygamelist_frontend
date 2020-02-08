import React from 'react'
import GameCard from './shared/GameCard'
import axios from 'axios'
import './styles/Home.css'
import { NavLink } from 'react-router-dom'




class Home extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            games: []
        }
    }


    componentDidMount() {

        this.getGames();

    }



    getGames = async () => {
        console.log('This works right?')
        let response = await axios.get('http://localhost:3000/games')
        console.log(response.data)
        this.setState({
            games: response.data
        })
    }

    // getGames = async() => {
    //     const response = await axios.get('/games');
    //     const data = response.data;
    //     this.setState({
    //         games: data
    //     })
    // }

    deleteGame = async (game) => {
        await axios.delete(`http://localhost:3000/games/${game.id}`)
        this.getGames();
    }

//     handleDelete(game) {
//     fetch(`http://localhost:3000/games/${game.id}`, {
//       method: 'DELETE',
//       // headers: {
//       //   'Accept': 'application/json, text/plain, */*',
//       //   'Content-Type': 'application/json'
//       // }
//     })
//     console.log("hi")
//     this.getGames();
//   }



    render() {
        return (
            <div className='parent-container'>
                {this.state.games.map(game => {
                    return (
                        <div className='card-container' key={game.id}>
                            <NavLink exact to={`/games/${game.id}`} className='link'>
                                <GameCard
                                    title={game.title}
                                    image={game.image}
                                    genre={game.genre}
                                    description={game.description}

                                />
                            </NavLink>
                            <NavLink exact to ={`/games/${game.id}/edit`} className='edit'>
                                <h2>edit</h2>
                            </NavLink>
                            <h2 className='delete' onClick={() => this.deleteGame(game)}>delete</h2>
                        </div>
                    )
                })}
            </div>
        )
    }
}


export default Home

