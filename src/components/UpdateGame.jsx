import React, {Component}from 'react'
import UpdateForm from './shared/UpdateForm'
// import './styles/Postform.css'
import { Redirect } from 'react-router-dom'
import axios from 'axios'





class UpdateGame extends Component {
    constructor(props) {
        super(props)


        this.state = {

            title: '',
            description: '',
            genre: '', 
            image: '',
            updated: false

        }
    }


    onChange = (event) => {

        this.setState({
            [event.target.name]: event.target.value
        })


    }


    handleUpdate = async (e) => {

        e.preventDefault()
        await axios.put(`http://localhost:3000/games/${this.props.match.params.id}`, {
            title: this.state.title,
            description: this.state.description,
            image: this.state.image,
            username: this.state.username,
            genre: this.state.genre
        })
        this.setState({
            updated: true
        })
    }


    render() {


        const { handleUpdate, onChange } = this;
        const { title, description, genre, image } = this.state;

        if (this.state.updated) {
            return <Redirect to={'/'} />
        }


        return (

            <>
                <UpdateForm

                    title={title}
                    description={description}
                    genre={genre}
                    image={image}
                    onSubmit={handleUpdate}
                    onChange={onChange}

                />
            </>
        )
    }

}


export default UpdateGame