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
import { RootStateType} from "./redux/state";

type PropsType = {
    state: RootStateType
    addPost: (text: string) => void
}

function App(props: PropsType) {

    let post = props.state.profilePage.posts
    let dialog = props.state.dialogsPage.dialogs
    let message = props.state.dialogsPage.messages

    return (

        <div className={classes.appWrapper}>
            <Header/>
            <Navbar/>
            <div className={classes.content}>
                <Routes>
                    <Route path='/dialogs' element={<Dialogs dialogs={dialog} messages={message}/>}/>
                    <Route path='/profile' element={<Profile posts={post} addPost={props.addPost}/>}/>
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
