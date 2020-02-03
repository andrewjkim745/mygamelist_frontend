import React, {Component} from 'react'
import LoginForm from './shared/LoginForm'
import signInUser from './services/auth'







class Login extends Component {
    constructor(props) {
        super(props)


        this.state = {
            username: '',
            password: '',
            error: false,
            errorMsg: ''
        };
    }
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
            error: false,
            errorMsg: ""
        });
    };

    setUser = user => this.setState({ user });




    onSignIn = event => {
        event.preventDefault();

        const { history, setUser } = this.props;

        signInUser(this.state)
            .then(res => setUser(res.user))
            .then(() => history.push("/"))
            .catch(error => {
                console.error(error);
                this.setState({
                    error: true,
                    errorMsg: "Sign in Failed",
                    username: "",
                    password: ""
                });
            });
    };






    render() {

        const { username, password } = this.state;
        return (
            <LoginForm 
                username={username}
                password={password}
                onChange={this.handleChange}
                onSubmit={this.onSignIn}
                
            />

        )
    }
}

export default Login