import React from 'react'
import classes from './App.module.css'
import Header from '../src/components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'
import {Route, Routes} from 'react-router-dom'
import Users from "./components/Users/Users";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import state from "./redux/state";

function App() {

    let post = state.profilePage
    let dialog = state.dialogsPage.dialogs
    let message = state.dialogsPage.messages

    return (

            <div className={classes.appWrapper}>
                <Header/>
                <Navbar/>
                <div className={classes.content}>
                <Routes>
                        <Route path='/dialogs' element={<Dialogs dialogs={state.dialogsPage.dialogs} messages={state.dialogsPage.messages}/>}/>
                        <Route path='/profile' element={<Profile posts={state.profilePage.posts} />}/>
                        <Route path='/users' element={<Users/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                </Routes>
                </div>
            </div>
    )
}

export default App
