import React, {Component} from 'react'
import RegisterForm from './shared/RegisterForm'
import { signInUser, signUp } from './services/auth'
import axios from 'axios'








class Register extends Component {
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
    
    
    signUp = async credentials => {
        console.log('this is for the signUp!!!!!!!', credentials)
      try {
        const resp = await axios.post('http://localhost:3000/users/register', credentials)
        localStorage.setItem('token', resp.data.token)
        return resp.data
      } catch (error) {
        throw error
      }
    }





    onSignUp = event => {
        event.preventDefault();
    
        const { history, setUser } = this.props;
    
        signUp(this.state)
          .then(() => signInUser(this.state))
          .then(res => setUser(res.user))
          .then(() => history.push("/"))
          .catch(error => {
            console.error(error);
            this.setState({
              username: "",
              password: "",
              error: true,
              errorMsg: "SignUp Failed"
            });
          });
      };






    render() {

        const { username, password } = this.state;
        return (
            <RegisterForm 
                username={username}
                password={password}
                onChange={this.handleChange}
                onSubmit={this.onSignUp}
                
            />

        )
    }
}

export default Register  