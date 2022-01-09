import React from 'react'
import classes from './App.module.css'
import Header from '../src/components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import {Route, Routes} from 'react-router-dom'
import Users from "./components/Users/Users";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Profile from "./components/Profile/Profile";

function App() {

    return (

        <div className={classes.appWrapper}>
            <Header/>
            <Navbar/>
            <div className={classes.content}>
                <Routes>
                    <Route path='/dialogs' element={<DialogsContainer/>}/>
                    <Route path='/profile' element={<Profile/>}/>
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
