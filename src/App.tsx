import React from 'react'
import classes from './App.module.css'
import Header from '../src/components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'

const App = () => {

    return (
        <div className={classes.appWrapper}>
            <Header/>
            <Navbar/>
            <Profile/>
        </div>
    )
}

export default App
