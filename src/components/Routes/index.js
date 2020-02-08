import React from 'react'

import { Route, Switch } from 'react-router-dom'
import Home from '../Home'
import Login from '../Login'
import SignOut from '../SignOut'
import Register from '../Register'
import GameDetails from '../GameDetails'
import UpdateGame from '../UpdateGame'
import Post from '../Post'


const Routes = ({ user, setUser, clearUser }) => (
    <Switch>
        <Route
            exact path='/login'
            render={props => <Login {...props} setUser={setUser} />}
        />
        <Route
            exact path='/'
            render={props => <Home {...props} user={user} />}
        />
        <Route
            exact path='/sign-out'
            render={props => <SignOut {...props} clearUser={clearUser} user={user} />}
        />

        <Route
            exact
            path='/sign-up'
            render={props => <Register {...props} setUser={setUser} />}
        />
        <Route
            exact
            path='/games/:id'
            render={props => <GameDetails {...props} />}
        />
        <Route
            exact
            path='/post'
            render={props => <Post {...props} />}
        />
        <Route
            exact
            path='/games/:id/edit'
            render={props => <UpdateGame {...props} />}
        />


    </Switch>
)



export default Routes