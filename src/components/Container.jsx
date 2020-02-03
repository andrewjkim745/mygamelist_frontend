import React, {Component} from 'react'
import Routes from './Routes'
import Nav from './Nav'


export default class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            games: []
        }
    }


    setUser = user => this.setState({ user });

    clearUser = () => this.setState({ user: null });





    render() {
        const { user } = this.state;
        return (
            <>
                <Nav user={user} />
                <main>
                    <Routes
                        user={user}
                        setUser={this.setUser}
                        clearUser={this.clearUser}
                    />
                </main>
            </>
        )
    }
}