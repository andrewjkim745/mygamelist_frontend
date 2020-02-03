import React from 'react'
import '../styles/LoginForm.css'




const RegisterForm = (props) => {
    return (


        <div className="column-form-background">
        <h3>Register</h3>
        <form className="column-auth-form" onSubmit={props.onSubmit}>
          <input
            required
            type="text"
            name="username"
            value={props.username}
            placeholder="Username"
            onChange={props.onChange}
          />
          <input
            required
            name="password"
            value={props.password}
            type="password"
            placeholder="Password"
            onChange={props.onChange}
          />
          <input
            required
            name="email"
            value={props.email}
            type="text"
            placeholder="Email"
            onChange={props.onChange}
            />
        <button type='submit'>Submit</button>
        </form>
      </div>
    )
}

export default RegisterForm