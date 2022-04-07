import React from 'react'
import classes from './App.module.css'
import Navbar from './components/Navbar/Navbar'
import {Route} from 'react-router-dom'
import News from "./components/News/News"
import Music from "./components/Music/Music"
import Settings from "./components/Settings/Settings"
import DialogsContainer from "./components/Dialogs/DialogsContainer"
import ProfileContainer from "./components/Profile/ProfileContainer"
import HeaderContainer from "./components/Header/HeaderContainer"
import UsersContainer from "./components/Users/UsersContainer";
import Login from "./components/Login/Login";



function App() {

    return (
        <div className={classes.appWrapper}>
            <HeaderContainer/>
            <Navbar/>
            <div className={classes.content}>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
            </div>
        </div>
    )
}

export default App
