import React from 'react'
import { NavLink } from 'react-router-dom'
// import SearchBar from 'material-ui-search-bar'
// import ReactSearchBox from 'react-search-box'
import SearchField from "react-search-field";
import './styles/Nav.css'

const authenticatedNav = (
    <div className="row sign-out">
        <NavLink className="nav-register" to="/sign-out">
            Sign Out
      </NavLink>

    </div>
);


const unauthenticatedNav = (
    <div className='nav unath'>
        <div className='nav-signin-row'>
            <NavLink className='nav-register' activeClassName='active' to='/login'>
                Log In 

            </NavLink>
            <NavLink className='nav-register' activeClassName='active' to='sign-up'>
                Register
            </NavLink>

        </div>
    </div>
)





export const Nav = ({ user }) => {
    return (
        <div className='nav-container'>
            <div className='nav'>
                <NavLink exact to='/' activeClassName='active'>
                    <img className='logo' src='https://i.imgur.com/IiKnuHJ.png'></img>
                </NavLink>
                <SearchField
                    // placeholder="Search..."
                    // onChange = {onChange}
                    classNames="searchBar"
                />
                <h1 className='Games'> Games </h1>
                {user ? authenticatedNav : unauthenticatedNav}
                <div>
                    {user && (<p className='welcome-sign'>Welcome {user.username}</p>)}
                    
                </div>
            </div>
        </div>
    )
}


export default Nav