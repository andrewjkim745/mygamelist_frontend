import { Component } from 'react'
import { signOut } from './services/auth'

class SignOut extends Component {





    signOut = async user => {
        try {
            await localStorage.clear()
            return true
        } catch (error) {
            throw error
        }
    }


    componentDidMount() {
        const { history, clearUser, user } = this.props
        signOut(user)
            .then(() => clearUser())
            .finally(() => history.push('/'))
    }

    render() {
        return ''
    }
}

export default SignOut