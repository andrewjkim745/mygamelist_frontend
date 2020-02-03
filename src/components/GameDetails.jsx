import React from 'react'
// import './Styles/PostDetails.css'
import axios from 'axios'
import Moment from 'react-moment'




class GameDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            image: '',
            description: '',
            views: '',
            rating: '',
            date: '',
            genre: '',
            comments: [],
            isLoading: true

        }

    }


    componentDidMount() {
        this.getGame()
        this.onView()
        // this.getComments()
        // this._isMounted = true;
    }

    // componentWillUnmount() {
    //     this._isMounted = false;
    // }
    getGame = async () => {
        console.log('hello')
        await axios.get(`http://localhost:3000/games/${this.props.match.params.id}`)
            .then((response) => {
                console.log(response.data)
                this.setState({
                    title: response.data.title,
                    description: response.description,
                    image: response.data.image,
                    views: response.data.views,
                    rating: response.data.rating,
                    votes: response.data.votes,
                    date: response.data.created_at
                })
            })

    }

    onView = async () => {
        console.log('viewed')
        let data = await axios.get(`http://localhost:3000/games/${this.props.match.params.id}`)
        console.log(data.data)
        console.log(data.data.views)
        let newViews = data.data.views + 1
        await axios.put(`http://localhost:3000/games/${this.props.match.params.id}`, {
            views: newViews
        })
        this.getGame();

    }


// handleSubmit = async (e) => {
//     e.preventDefault()

//     await axios.put(`http://localhost:3000/posts/${this.props.match.params.id}`, {
//         title: this.state.post.title,
//         username: this.state.post.username,
//         image: this.state.post.link,
//         description: this.state.post.description
//     })


// }



render() {

    // const { post } = this.state;
    return (
        <div className='outer-container'>
            <div className='post-container'>
                <div className='votes-container'>
                    <p className='votes'>{this.state.votes ? this.state.votes : 0}</p>
                </div>
                <div className='top-container'>
                    <div className='user'>
                        <p>u/{this.state.username}-</p>
                        <Moment fromNow>{this.state.date}</Moment>

                    </div>
                    <h4>{this.state.title}</h4>
                    <img className='post-image' src={this.state.image}></img>
                    <p>{this.state.description}</p>
                    <div className='bottom-container'>
                        <p className='views'>{this.state.views < 1 ? 1 : this.state.views} views</p>
                    </div>
                    {/* <div>
                            {this.state.comments[0]}

                        </div>
                        <div>
                            {this.state.comments[1]}
                        </div>
                        <div>
                            {this.state.comments[2]}
                        </div> */}
                </div>




            </div>
        </div>
    )
}
}

export default GameDetails