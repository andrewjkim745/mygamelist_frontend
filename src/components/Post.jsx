import React, {Component} from 'react'
import PostForm from './shared/PostForm'
import axios from 'axios'
import { Redirect } from 'react-router-dom'






export default class Post extends Component {
    constructor(props) {
        super(props)


        this.state = {
            title: '',
            description: '',
            image: '',
            created_at: '',
            rating: '',
            views: '',
            genre: '',
            newGame: false
        }
    }




    onChange = (event) => {

        this.setState({
            [event.target.name]: event.target.value
        })


    }


    handleSubmit = async (e) => {
        e.preventDefault()

        await axios.post('http://localhost:3000/games', {
            title: this.state.title,
            description: this.state.description,
            image: this.state.image,
            genre: this.state.genre
        })

        this.setState({
            newGame: true
        })

    }


    render() {
        const { title, description, genre, image, newGame} = this.state
        const { onChange, handleSubmit } = this;

        if (newGame) {
            return <Redirect to={'/'} />
        }
        return (
            <PostForm
                title={title}
                description={description}
                genre={genre}
                image={image}
                onChange={onChange}
                onSubmit={handleSubmit}
            />



        )
    };



}









