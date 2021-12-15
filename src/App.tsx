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
import {RootStateType, StoreType} from "./redux/state";

type PropsType = {
    store: StoreType
    addPost: (text: string) => void
    updateNewPostText: (newText: string) => void
}

function App (props: PropsType)
{

    const state = props.store.getState()

    let post = state.profilePage.posts
    let newPost = state.profilePage.newPostText
    let dialog = state.dialogsPage.dialogs
    let message = state.dialogsPage.messages

    return (

        <div className={classes.appWrapper}>
            <Header/>
            <Navbar/>
            <div className={classes.content}>
                <Routes>
                    <Route path='/dialogs' element={<Dialogs dialogs={dialog} messages={message}/>}/>
                    <Route path='/profile' element={<Profile
                        posts={post} addPost={props.store.addPost.bind(props.store)}
                        newPost={newPost}
                        updateNewPostText={props.store.updateNewPostText.bind(props.store)}/>}/>
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
