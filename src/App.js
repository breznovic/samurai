import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import Dialogs from './Components/Dialogs/Dialogs'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import Profile from './Components/Profile/Profile'



const App = (props) => {

  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/dialogs' render={ () => <Dialogs state={props.state.dialogsPage} />} />
        <Route path='/profile' render={ () => <Profile profilePage={props.state.profilePage}
        addPost={props.addPost}
        updateNewPostText={props.updateNewPostText} />} />
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App;
