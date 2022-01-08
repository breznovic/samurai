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

// type PropsType = {
//     store: StoreReduxType
//     dispatch: (action: ActionsTypes) => void
// }

// function App(props: PropsType) {
function App() {

    // const state = props.store.getState()

    // let post = state.profileReducer.posts
    // let newPost = state.profileReducer.newPostText
    // let dialog = state.dialogsReducer.dialogs
    // let message = state.dialogsReducer.messages
    // let messageBody = state.dialogsReducer.newMessageBody

    return (

        <div className={classes.appWrapper}>
            <Header/>
            <Navbar/>
            <div className={classes.content}>
                <Routes>
                    <Route path='/dialogs' element={<DialogsContainer/>}/>
                    {/*<Route path='/dialogs' element={<Dialogs*/}
                    {/*    dialogs={dialog}*/}
                    {/*    messages={message}*/}
                    {/*    messageBody={messageBody}*/}
                    {/*    // dispatch={props.store.dispatch.bind(props.store)}*/}
                    {/*/>}/>*/}
                    {/*<Route path='/profile' element={<Profile*/}
                    {/*    posts={post}*/}
                    {/*    // dispatch={props.store.dispatch.bind(props.store)}*/}
                    {/*    newPost={newPost}*/}
                    {/*/>}/>*/}
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
